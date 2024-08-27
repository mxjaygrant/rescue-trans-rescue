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

	getArtists: async () => {
		// check that DB is up
		if (!base) return [];

		try {
			let artists = await base("artists")
				.select()
				.firstPage();

				return artists.map(artists => artists.fields);
		} catch (dbError) {
			// Database connection error
			console.error(dbError);
		}
	},

	/**
	 * Get the options in the database
	 *
	 * Return everything in the artists table
	 * Throw an error in case of db connection issues
	 */
 	getOptions: async () => {
		// Check if the db is setup yet
		if (!base) return [];

		// We use a try catch block in case of db errors
		try {
			return true;
		} catch (dbError) {
			// Database connection error
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
/* 	clearHistory: async () => {
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
	} */
};