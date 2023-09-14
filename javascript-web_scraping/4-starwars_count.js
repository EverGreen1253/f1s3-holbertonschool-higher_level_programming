#!/usr/bin/node

const request = require('request');
const url = process.argv[2];
const charId = 18;

request(url, function (error, response, body) {
  if (error) {
    console.error('error:', error); // Print the error if one occurred
  } else {
    let count = 0;

    const data = JSON.parse(body);
    for (const film of data.results) {
      if (film.characters.includes('https://swapi-api.hbtn.io/api/people/' + charId + '/')) {
        count++;
      }
    }

    console.log(count);
  }
});
