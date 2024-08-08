// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json());

// Data
const comments = [
  { id: 1, username: 'Alice', comment: 'I am Alice' },
  { id: 2, username: 'Bob', comment: 'I am Bob' },
  { id: 3, username: 'Charlie', comment: 'I am Charlie' },
];

// Routes
app.get('/comments', (req, res) => {
  res.json(comments);
})