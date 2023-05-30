/**
 * Create the endpoint that accept parameters. 
 * Endpoint could accept from 0 to 3 parameters, type string, number, string.
 * Naming is optional. 
 */

const express = require('express');
const axioshttps = require('axios');
const app = express();
const port = 3000;

// Define a route for the root URL
app.get('/countries', async (req, res) => {

  const { filter, limit, sort } = req.query;

  if (typeof filter === 'string') {
    console.log('filter', filter)
  }

  if (!isNaN(limit)) {
    console.log('limit', limit)
  }

  if (typeof sort === 'string') {
    console.log('sort', sort)
  }
  

  console.log(filter, limit, sort);


  const countries = await axioshttps.get('https://restcountries.com/v3.1/all');

  console.log(countries)


  const body = req.query;
  res.status(200).send(body) 
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
