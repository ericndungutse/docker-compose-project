// Importing necessary modules
const express = require('express');
const cors = require('cors');

// Create an Express application
const app = express();

app.use(cors());

// Sample product data
const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 },
];

// Define a route handler for GET requests to /products
app.get('/products', (req, res) => {
  // Send the list of products as JSON response
  res.json(products);
});

// Start the server and listen on port 3000
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
