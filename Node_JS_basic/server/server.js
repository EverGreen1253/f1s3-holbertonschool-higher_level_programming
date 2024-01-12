const express = require('express');

const indexRouter = require('./routes/index');

const app = express();
const port = 1245;

app.use('/', indexRouter);
app.use('/students', indexRouter);
app.use('/students:major', indexRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
