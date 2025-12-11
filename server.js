const express = require('express');
const path = require('path');
const { marked } = require('marked');

const app = express();
const PORT = process.env.PORT || 3131;
const HOST = process.env.HOST || '0.0.0.0';

// Middleware
app.use(express.static('public'));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/resume', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'resume.html'));
});

app.get('/project/:slug', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'project.html'));
});

// Start server
app.listen(PORT, HOST, () => {
  console.log(`Portfolio server running on http://localhost:${PORT}`);
  console.log(`Server bound to ${HOST} and listening on port ${PORT}`);
});
