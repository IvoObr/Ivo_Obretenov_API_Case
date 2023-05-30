
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

GET: 

http://localhost:3000/countries
http://localhost:3000/countries?filter=Bu
http://localhost:3000/countries?sort=descend
http://localhost:3000/countries?limit=40
http://localhost:3000/countries?population=8
http://localhost:3000/countries?filter=Bu&population=8
http://localhost:3000/countries?sort=ascend
http://localhost:3000/countries?limit=80&sort=ascend
http://localhost:3000/countries?population=88&limit=20
http://localhost:3000/countries?filter=Am&limit=20


Running Tests
To run the tests, execute the following command:

npm run test
The test results will be displayed in the console.

