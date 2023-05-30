
Countries API
This code provides an API to retrieve information about countries based on various parameters such as filters, sorting, limiting results, and population.

Installation
To run this code, ensure you have Node.js and npm installed. Then follow these steps:

Clone the repository or download the code.
Navigate to the project directory in your terminal.
Install the required dependencies by running the following command:


npm install
Usage
To start the server, run the following command:

npm run start

The server will start running on port 3000.

API Endpoints
The following endpoints are available:

GET /countries
This endpoint retrieves a list of countries based on the specified parameters.

Query Parameters:

filter (optional): Filters the countries based on the provided string.
limit (optional): Limits the number of countries returned.
sort (optional): Sorts the countries in ascending or descending order. Possible values: "ascend" or "descend".
population (optional): Filters the countries based on population (in millions).
Example usage:

http
GET http://localhost:3000/countries?filter=Germany&sort=descend&limit=5&population=8

Response:

json
[
  {
    "name": "Germany",
    "capital": "Berlin",
    "population": 83149300,
    "altSpellings": ["DE", "Federal Republic of Germany", "Bundesrepublik Deutschland"],
    "region": "Europe",
    "languages": {
      "deu": "German"
    },
    "latlng": [51, 9],
    "area": 357114,
    "landlocked": false,
    "flag": "🇩🇪",
    "maps": {
      "googleMaps": "https://goo.gl/maps/DE",
      "openStreetMaps": "https://www.openstreetmap.org/relation/DE"
    },
    "timezones": ["UTC+01:00"],
    "flags": {
      "svg": "https://restcountries.com/data/deu.svg",
      "png": "https://restcountries.com/data/deu.png"
    },
    "coatOfArms": "https://restcountries.com/data/deu_coa.png"
  },
  // ...
]

Running Tests
To run the tests, execute the following command:

npm run test
The test results will be displayed in the console.

