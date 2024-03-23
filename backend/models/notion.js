// backend/src/models/notion.js
const axios = require('axios');
//const { processDocument } = require('./mlModel'); // Import your machine learning model
const Structure = require('./structure');
const { convertParagraphsToJson } = require('../models/process');


// const NOTION_API_URL = 'https://api.notion.com/v1/pages/; // Replace with the actual Notion API URL
// const NOTION_API_KEY = 'secret_JdBeWqJJy3tw51DkjnVMluLRBFq89OjdWhVHdvNRzn0'; // Make sure to set this environment variable

async function createNotionWorkspace(structure) {
    console.log(structure);
    NOTION_API_URL = 'https://api.notion.com/v1/pages/';
    NOTION_API_KEY = 'secret_JdBeWqJJy3tw51DkjnVMluLRBFq89OjdWhVHdvNRzn0';
    // Use the Notion API to create a new workspace using the provided structure
    // This is just a placeholder. You'll need to replace this with the actual API call
    console.log(structure);
    const response = await axios.post(`${NOTION_API_URL}`, structure, {
        headers: {
            'Authorization': `Bearer ${NOTION_API_KEY}`,
            'Content-Type': 'application/json',
            'Notion-Version': '2022-06-28', // Replace with the actual Notion API version
        }
    });

    // Return the URL of the new workspace
    return response.data.url;
}

async function processAndCreateWorkspace(pageID, text) {
    // Process the document using the machine learning model
    console.log('we made it here')
    const structure = convertParagraphsToJson(pageID, text);
    console.log(structure)
    // Create a new Notion workspace using the structure
    const url = await createNotionWorkspace(pageID, structure);

    // Return the URL of the new workspace
    return url;
}

module.exports = {
    processAndCreateWorkspace,
    createNotionWorkspace
};