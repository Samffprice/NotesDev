// backend/src/routes/text.js
const express = require('express');
const router = express.Router();
const { handleText } = require('../controllers/textController'); // Import the handleText function

router.post('/', handleText); // Use handleText as the callback function

module.exports = router;