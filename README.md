This is a repo demonstrating Airtable API connection using hello-node on Glitch

https://rtr-dev.glitch.me with source at https://github.com/mxjaygrant/rescue-trans-rescue

## Sources

* glitch-hello-node: https://glitch.com/~glitch-hello-node
* glitch-hello-sqlite: https://glitch.com/~hello-sqlite
* glitch-hello-airtable: https://glitch.com/~glitch-hello-airtable

## How to run 

1. Create a personal access tokens at https://airtable.com/create/tokens
    * Token should contain the scopes data.records:read, data.recordComments:read, and schema.bases:read
    * Base should be the rescue-trans-rescue
2. Create a .env file based on .env-blank and fill it out
    * On Glitch, this will be a form. Create two fields: AIRTABLE_API_KEY and AIRTABLE_BASE_ID
    * For a self hosted instance, copy .env-blank to .env 
    * The personal token generated in step 1 is your AIRTABLE_API_KEY 
    * Your AIRTABLE_BASE_ID is located in the URL to your Airtable base: https://airtable.com/{baseid}/
    * You can also locate your Base ID by going to Help (upper right hand corner) and clicking on "API Documentation"

## Self-hosted Development
Requirements: node.js, npm

To install:
`npm install`

To start:
`npm start`

To run with nodemon:
`npm run watch`