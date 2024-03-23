// backend/src/controllers/uploadController.js
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const { processAndCreateWorkspace } = require('../models/notion');

async function handleUpload(req, res) {
    try {
        const document = await readFile(req.file.path, 'utf8');
        const url = await processAndCreateWorkspace(document);

        res.json({ message: 'File uploaded and processed successfully', url });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while uploading and processing the file' });
    }
}

module.exports = {
    handleUpload
};