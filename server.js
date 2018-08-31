// server.js
const express = require('express');
const app = express();
const path = require("path");

app.use(express.static(__dirname + '/Public'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('server running on port 3000');
})

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public', 'index.html'))
);

app.get('/api/whoami', (req, res) =>
  res.json({ ipaddress: req.ip })
);