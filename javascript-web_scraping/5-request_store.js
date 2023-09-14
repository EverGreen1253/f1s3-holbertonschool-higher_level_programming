#!/usr/bin/node

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const fileName = process.argv[3];

request(url, function (error, response, body) {
  if (error) {
    console.error('error:', error); // Print the error if one occurred
  } else {
    fs.writeFile(fileName, body, error => {
      if (error) {
        console.error('error:', error);
      }
    });
  }
});
