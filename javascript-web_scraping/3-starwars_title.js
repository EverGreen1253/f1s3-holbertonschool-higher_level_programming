#!/usr/bin/node

const request = require('request');
const url = 'https://swapi-api.hbtn.io/api/films/' + process.argv[2];

request(url, function (error, response, body) {
  if (error) {
    console.error('error:', error); // Print the error if one occurred
  } else {
    const data = JSON.parse(body);
    console.log(data.title);
  }
});
