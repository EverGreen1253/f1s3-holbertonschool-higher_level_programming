const express = require('express');

const app = express();
const port = 1245;

// https://stackoverflow.com/questions/6059246/how-to-include-route-handlers-in-multiple-files-in-express/37309212#37309212
require('./routes')(app);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
