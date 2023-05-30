const express = require('express');
const axioshttps = require('axios');
const app = express();
const port = 3000;

app.get('/countries', async (req, res) => {

  let { filter, limit, sort, population } = req.query;

  console.log( filter, limit, sort, population)

  if (filter && typeof filter !== 'string' || filter.trim() === '') {
    return res.status(400).json({ error: 'Invalid filter' });
  }

  if (limit && (!Number.isInteger(Number(limit)) || limit < 0)) {
    return res.status(400).json({ error: 'Invalid limit' });
  }

  if (population && (!Number.isInteger(Number(population)) || population < 0)) {
    return res.status(400).json({ error: 'Invalid population' });
  } 
  
  if (population) {
    population *= 1000000;
    console.log('population', population)
  }

  if (sort && typeof sort !== 'string' || sort.trim() === '' || sort !== 'ascend' || sort !== 'descend') {
    return res.status(400).json({ error: 'Invalid filter' });
  }

  const countryFilter = filter ? `name/${filter}` : 'all';

  let countries = (await axioshttps.get(`https://restcountries.com/v3.1/${countryFilter}?fields=name,capital,population,capital,altSpellings,region,languages,latlng,area,landlocked,flag,maps,timezones,flags,coatOfArms`)).data;

  if (filter) {
    countries = countries.map(country => {
       const doesNameIncludeFilter = (country.name.common.toLowerCase()).includes(filter.toLowerCase());
        if (doesNameIncludeFilter) return country;
      }) 
      .filter(val => val)
  }


  if (population) {
    countries = countries.map(country => {
        if (country.population <= population) return country;
      }) 
      .filter(val => val)
  }

  if (sort) {
    countries = countries.sort((a, b) => {
      const nameA = a.name.common.toLowerCase();
      const nameB = b.name.common.toLowerCase();

      if (sort == 'ascend') return nameA.localeCompare(nameB)
      if (sort == 'descend') return nameB.localeCompare(nameA)
    });
  }

  if (limit) {
    countries = countries.splice(0, limit);
  }

  res.status(200).send(countries) 
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
