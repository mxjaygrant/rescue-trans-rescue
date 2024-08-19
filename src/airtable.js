/**
 * Module handles database management
 *
 * Server API calls the methods in here to query and update the Airtable database
 */

// Setup airtable - use the .env to set your key and base id
const Airtable = require("airtable");
let base;
// We use try and catch blocks throughout to handle any database errors
try {
  base = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY
  }).base(process.env.AIRTABLE_BASE_ID);
} catch (dbError) {
  console.error(dbError);
}

// Our server script will call these methods to connect to the db
module.exports = {
  
  /**
   * Get the options in the database
   * Return everything in the Choices table
   * Throw an error in case of db connection issues
   */
  getOptions: async () => {
    // Check if the db is setup yet
    if (!base) return [];

    // We use a try catch block in case of db errors
    try {
      const options = await base("Choices")
        .select()
        .firstPage(); 
      console.log(options);
      
      // Return the coding language fields
      return options.map(choice => choice.fields);
    } catch (dbError) {
      // Database connection error
      console.error(dbError);
    }
  },

  /**
   * Process a user vote
   *
   * Receive the user vote string from server
   * Add a log entry
   * Find and update the chosen option
   * Return the updated list of votes
   */
  processVote: async vote => {
    // Insert new Log table entry indicating the user choice and timestamp
    try {
      await base("Log").create([
        {
          fields: {
            choice: vote,
            time: new Date().toISOString()
          }
        }
      ]);

      // We need to filter for the record containing the user chosen language to update its total
      let filterStr = '{language}="' + vote + '"';

      // Find the choice the user picked - it'll be the first one [0]
      const choice = await base("Choices")
        .select({
          filterByFormula: filterStr
        })
        .firstPage();

      // Update the number of picks in the chosen language using id and field to update
      await base("Choices").update([
        {
          id: choice[0].id,
          fields: {
            picks: choice[0].get("picks") + 1
          }
        }
      ]);

      // Get updated choices from the database for the chart
      const options = await base("Choices")
        .select()
        .firstPage();

      // Return the coding language fields
      return options.map(choice => choice.fields);
    } catch (dbError) {
      console.error(dbError);
    }
  },

  /**
   * Get logs
   *
   * Return choice and time fields from all records in the Log table
   */
  getLogs: async () => {
    // Return most recent 20
    try {
      // Return most recent 20
      const logs = await base("Log")
        .select({
          maxRecords: 20,
          sort: [{ field: "time", direction: "desc" }]
        })
        .firstPage();

      // Return choice and timestamp for each
      return logs.map(log => ({
        choice: log.get("choice"),
        time: log.get("time")
      }));
    } catch (dbError) {
      console.error(dbError);
    }
  },

  /**
   * Clear logs and reset votes
   *
   * Destroy everything in Log table
   * Reset votes in Choices table to zero
   */
  clearHistory: async () => {
    try {
      // Get all logs
      const logs = await base("Log")
        .select()
        .firstPage();

      // Get the list of log ids
      let logIds = logs.map(log => log.id);

      // We use a function to keep deleting until we're done (can only bulk delete 10 at a time)
      const destroyLogs = async () => {
        // We continually splice the array to delete the first ten by id
        await base("Log").destroy(logIds.splice(0, 10));
        // We still have more to delete
        if (logIds.length > 0) await destroyLogs();

        // We're done deleting - all gone!
      };
      // Start deletion - will continue calling itself until there are no logs left
      await destroyLogs();

      // Reset vote numbers
      const choices = await base("Choices")
        .select()
        .firstPage();

      // Get the list of choices
      let updates = choices.map(c => {
        return { id: c.id, fields: { picks: 0 } };
      });
      await base("Choices").update(updates);

      // Return empty array
      return [];
    } catch (dbError) {
      console.error(dbError);
    }
  }
};
