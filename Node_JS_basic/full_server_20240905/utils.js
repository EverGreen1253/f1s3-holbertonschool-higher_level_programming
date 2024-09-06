const fs = require('fs');

module.exports = async function readDatabase(filepath) {
  try {
    const data = fs.readFileSync(filepath, 'utf-8');
    const rows = data.split('\n').slice(1);

    const studentsCS = [];
    const studentsSWE = [];

    for (const row of rows) {
      const data = row.split(',');

      if (data[3] === 'CS') { // hardcode
        studentsCS.push(data[0]);
      }

      if (data[3] === 'SWE') { // hardcode
        studentsSWE.push(data[0]);
      }
    }

    return {
      CS: studentsCS,
      SWE: studentsSWE,
    };
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
