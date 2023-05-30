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


  //  'ascend' 'descend' 


   console.log('sort', sort)
  }
  

 console.log(filter, limit, sort, population);


  let countries = (await axioshttps.get(`https://restcountries.com/v3.1/name/${filter}?fields=name,capital,population,capital,altSpellings,region,languages,latlng,area,landlocked,flag,maps,timezones,flags,coatOfArms`)).data;

  countries = countries
    .map(country => {
      const isPopulationLess = country.population <= population;
      const doesNameInclude = (country.name.common.toLowerCase()).includes(filter.toLowerCase());

       if (isPopulationLess && doesNameInclude ){
        return country
       }
    })
    .filter(val => val)


  countries = countries.sort((a, b) => {
    const nameA = a.name.common.toLowerCase();
    const nameB = b.name.common.toLowerCase();

    if (sort == 'ascend') return nameA.localeCompare(nameB)
    if (sort == 'descend') return nameB.localeCompare(nameA)
  });


  console.log(countries);



  const body = req.query;
  res.status(200).send(body) 
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
