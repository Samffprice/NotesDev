// backend/src/routes/upload.js
const express = require('express');
const multer = require('multer');
const router = express.Router();
const { handleUpload } = require('../controllers/uploadController'); // Import the handleUpload function

// Multer configuration for file uploads
const upload = multer({
    dest: 'uploads/' // This is where files will be stored. Make sure this directory exists.
});

router.post('/', upload.single('file'), handleUpload); // Use handleUpload as the callback function

module.exports = router;