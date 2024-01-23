// index.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Welcome message endpoint
app.get('/', (req, res) => {
  res.send('WELCOME TO BOOKSTORE MANAGEMENT SYSTEM');
});

// Books endpoint - Display all books
app.get('/books', (req, res) => {
  // Replace this with logic to retrieve and display all books
  res.send('Displaying all books...');
});

// Middleware to validate book details before adding
const validator = (req, res, next) => {
  const { title, author, ISBN } = req.body;
  if (!title || !author || !ISBN) {
    res.status(400).send('Invalid book details. Please provide title, author, and ISBN.');
  } else {
    next();
  }
};

// Add a new book endpoint
app.post('/books/add', validator, (req, res) => {
  // Replace this with logic to add a new book
  res.send('Book added successfully!');
});

// Search for books endpoint
app.get('/books/search', (req, res) => {
  const query = req.query.q;
  // Replace this with logic to search for books based on the query
  res.send(`Searching for books with query: ${query}`);
});

// Update a book endpoint
app.patch('/books/update/:id', (req, res) => {
  const bookId = req.params.id;
  // Replace this with logic to update the details of a specific book
  res.send(`Updating book with ID: ${bookId}`);
});

// Delete a book endpoint
app.delete('/books/delete/:id', (req, res) => {
  const bookId = req.params.id;
  // Replace this with logic to delete a specific book
  res.send(`Deleting book with ID: ${bookId}`);
});

// Handle invalid endpoints
app.use((req, res) => {
  res.status(404).send('Invalid endpoint. Please check your request.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
