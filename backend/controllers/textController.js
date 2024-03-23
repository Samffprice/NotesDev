// backend/src/controllers/textController.js
const { processAndCreateWorkspace } = require('../models/notion');
const { convertParagraphsToJson } = require('../models/process');

async function handleText(req, res) {
    try {
        const document = req.body.text;
        console.log('document', document);
        pageID = '637bdfdaf9524125810889b7ff5f36db';
        const url = await processAndCreateWorkspace(document, pageID);

        res.json({ message: 'Text processed successfully', url });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while processing the text' });
    }
}

module.exports = {
    handleText
};