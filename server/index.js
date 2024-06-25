const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start server
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});