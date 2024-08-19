This is a repo demonstrating Airtable API connection using hello-node on Glitch

https://rtr-dev.glitch.me with source at https://github.com/u/mxjaygrant/rescue-trans-rescue

## Sources

* glitch-hello-node: https://glitch.com/~glitch-hello-node
* glitch-hello-sqlite: https://glitch.com/~hello-sqlite
* glitch-hello-airtable: https://glitch.com/~glitch-hello-airtable

## How to run

1. Create two personal access tokens at https://airtable.com/create/tokens
    * One token should contain the scopes data.records:write, data.recordComment:write, and schema.bases:read
    * One token should contain the scopes data.records:read, data.recordComments:read, and schema.bases:read
2. Create a .env file based on .env-blank
    * The first token is your admin key
    * The second token is your airtable_api_key
    * Your airtable base id is located in the URL to your Airtable base: https://airtable.com/{baseid}/

 

## Self-hosted Development
Requirements: node.js, npm
Recommendations: dotenv package

* npm install
* 
