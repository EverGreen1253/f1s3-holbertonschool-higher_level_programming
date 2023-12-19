module.exports = function countStudents(filename) {
  const fs = require('fs');

  try {
    const data = fs.readFileSync(filename, 'utf-8');
    // const jsonData = JSON.parse(data);
    const rows = data.split('\n');
    let rowCount = 0;
    let sweNames = [];
    let csNames = [];

    for (const row of rows) {
      rowCount += 1;

      if (row.substring(row.length - 3) === 'SWE') {
        sweNames.push(row.split(',')[0]);
      }
      if (row.substring(row.length - 2) === 'CS') {
        csNames.push(row.split(',')[0]);
      }
    }

    console.log(`Number of students: ${rowCount - 1}`);
    console.log(`Number of students in CS: ${sweNames.length}. List: ${sweNames.join(', ')}`);
    console.log(`Number of students in SWE: ${csNames.length}. List: ${csNames.join(', ')}`);
  } catch (error) {
    console.error('Cannot load the database');
  }
};
