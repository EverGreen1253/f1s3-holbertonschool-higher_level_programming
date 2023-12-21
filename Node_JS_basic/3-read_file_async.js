const fs = require('fs');

module.exports = async function countStudents(filename) {
  try {
    const data = await fs.readFileSync(filename, 'utf-8');
    const rows = data.split('\n');
    let rowCount = 0;
    const sweNames = [];
    const csNames = [];

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
    console.log(`Number of students in CS: ${csNames.length}. List: ${csNames.join(', ')}`);
    console.log(`Number of students in SWE: ${sweNames.length}. List: ${sweNames.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
