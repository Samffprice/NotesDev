// backend/src/server.js
const express = require('express');
const cors = require('cors');
const textRoutes = require('./routes/text');
const uploadRoutes = require('./routes/upload');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Use routes
app.use('/text', textRoutes);
app.use('/upload', uploadRoutes);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});