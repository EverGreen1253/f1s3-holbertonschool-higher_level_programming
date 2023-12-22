const fs = require('fs');

module.exports = function countStudents(filename) {
  try {
    // const data = fs.readFileSync(filename, 'utf-8');
    // const rows = data.split('\n');
    // let rowCount = 0;
    // const sweNames = [];
    // const csNames = [];

    // for (const row of rows) {
    //   rowCount += 1;

    //   if (row.substring(row.length - 3) === 'SWE') {
    //     sweNames.push(row.split(',')[0]);
    //   }
    //   if (row.substring(row.length - 2) === 'CS') {
    //     csNames.push(row.split(',')[0]);
    //   }
    // }

    // console.log(`Number of students: ${rowCount - 1}`);
    // console.log(`Number of students in CS: ${csNames.length}. List: ${csNames.join(', ')}`);
    // console.log(`Number of students in SWE: ${sweNames.length}. List: ${sweNames.join(', ')}`);

    const data = fs.readFileSync(filename, 'utf-8');
    // const headers = data.split('\n', 1)[0].split(',');
    const noHeaderArray = data.split('\n').slice(1);

    let countCS = 0;
    let countSWE = 0;
    const studentsCS = [];
    const studentsSWE = [];

    for (const row of noHeaderArray) {
      const data = row.split(',');

      if (data[3] === 'CS') { // hardcode
        countCS += 1;
        studentsCS.push(data[0]);
      }

      if (data[3] === 'SWE') { // hardcode
        countSWE += 1;
        studentsSWE.push(data[0]);
      }
    }

    const countStudents = countCS + countSWE;

    // print statements
    console.log(`Number of students: ${countStudents}`);
    console.log(`Number of students in CS: ${studentsCS.length}. List: ${studentsCS.toString().split(',').join(', ')}`);
    console.log(`Number of students in SWE: ${studentsSWE.length}. List: ${studentsSWE.toString().split(',').join(', ')}`);

  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
