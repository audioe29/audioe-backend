const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('AUDIOE Backend Running');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
// package.json
{
  "name": "audioe-backend",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  }
}

