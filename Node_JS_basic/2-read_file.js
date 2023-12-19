const fs = require('fs');

module.exports = function countStudents(filename) {
  try {
    const data = fs.readFileSync(filename, 'utf-8');
    const rows = data.split('\n');
    let rowCount = 0;
    const sweNames = [];
    const csNames = [];

    for (const row of rows) {
      rowCount += 1;

      if (row.substring(row.length - 3) === 'SWE') {
        sweNames.push(row.toString().split(',')[0].trim());
      }
      if (row.substring(row.length - 2) === 'CS') {
        csNames.push(row.toString().split(',')[0].trim());
      }
    }

    console.log(`Number of students: ${rowCount - 1}`);
    console.log(`Number of students in CS: ${csNames.length}. List: ${csNames.toString().split(',').join(', ')}`);
    console.log(`Number of students in SWE: ${sweNames.length}. List: ${sweNames.toString().split(',').join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
