const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// JSON データを提供する API
app.get('/courses', (req, res) => {
    fs.readFile('data/renamed_courses.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ message: 'Error reading data' });
            return;
        }
        res.json(JSON.parse(data));
    });
});

// サーバー起動
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
