const express = require('express');
const axioshttps = require('axios');
const app = express();
const port = 3000;

app.get('/countries', async (req, res) => {

  let { filter, limit, sort, population } = req.query;

  if (typeof filter === 'string') {
    console.log('filter', filter)
  }

  if (!isNaN(limit)) {
    console.log('limit', limit)
  }

  if (!isNaN(population)) {
    population *= 1000000;
    console.log('population', population)
  }

  if (typeof sort === 'string') {


   // 'ascend' 'descend' 


    console.log('sort', sort)
  }
  

  console.log(filter, limit, sort, population);


  let countries = (await axioshttps.get(`https://restcountries.com/v3.1/name/${filter}?fields=name,capital,population`)).data;

  countries = countries
    .map(countrie => (countrie.population <= population) && countrie)
    .filter(val => val)

  countries = countries.sort((a, b) => a - b);



  console.log(countries);



  const body = req.query;
  res.status(200).send(body) 
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
