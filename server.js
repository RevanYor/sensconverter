const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const helmet = require('helmet');

// Serve static files from the public directory
app.use(express.static('public'));
app.use(helmet());

// Serve index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 