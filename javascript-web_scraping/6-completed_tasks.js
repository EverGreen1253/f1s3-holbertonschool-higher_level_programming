#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, function (error, response, body) {
  if (error) {
    console.error('error:', error); // Print the error if one occurred
  } else {
    const stats = {};

    const data = JSON.parse(body);
    for (const task of data) {
      if (task.completed) {
        const key = task.userId.toString();
        if (!stats[key]) {
          stats[key] = 0;
        }

        stats[key]++;
      }
    }

    console.log(stats);
  }
});
