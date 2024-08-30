const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Serve static files (HTML, CSS, JS)
app.use(express.static(__dirname));

// Route to serve the dump.csv
app.get('/data', (req, res) => {
    res.sendFile(path.join(__dirname, 'dump.csv'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
