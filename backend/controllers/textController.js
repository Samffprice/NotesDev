// backend/src/controllers/textController.js
const { processAndCreateWorkspace } = require('../models/notion');

async function handleText(req, res) {
    try {
        const document = req.body.text;
        const url = await processAndCreateWorkspace(document);

        res.json({ message: 'Text processed successfully', url });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while processing the text' });
    }
}

module.exports = {
    handleText
};