const fs = require('fs');

module.exports = function countStudents(filename) {
  // try {
  //   const data = fs.readFileSync(filename, 'utf-8');
  //   const rows = data.split('\n');
  //   let rowCount = 0;
  //   const sweNames = [];
  //   const csNames = [];

  //   for (const row of rows) {
  //     rowCount += 1;

  //     if (row.substring(row.length - 3) === 'SWE') {
  //       sweNames.push(row.split(',')[0]);
  //     }
  //     if (row.substring(row.length - 2) === 'CS') {
  //       csNames.push(row.split(',')[0]);
  //     }
  //   }

  //   console.log(`Number of students: ${rowCount - 1}`);
  //   console.log(`Number of students in CS: ${csNames.length}. List: ${csNames.join(', ')}`);
  //   console.log(`Number of students in SWE: ${sweNames.length}. List: ${sweNames.join(', ')}`);
  // } catch (error) {
  //   throw new Error('Cannot load the database');
  // }

  try {
    const csv = fs.readFileSync(filename, { encoding: 'utf8' });
    const headerArray = csv.split(/\r?\n|\n/);
    const headers = headerArray[0].split(',');

    // strip headers and convert to list of dicts
    const dictList = [];
    const noHeaderArray = headerArray.slice(1);
    for (let i = 0; i < noHeaderArray.length; i += 1) {
      const data = noHeaderArray[i].split(',');
      if (data.length === headers.length) {
        const row = {};
        for (let j = 0; j < headers.length; j += 1) {
          row[headers[j].trim()] = data[j].trim();
        }
        dictList.push(row);
      }
    }

    // count and collect first names of students per field
    let countCS = 0;
    let countSWE = 0;
    const studentsCS = [];
    const studentsSWE = [];

    dictList.forEach((element) => {
      if (element.field === 'CS') {
        countCS += 1;
        studentsCS.push(element.firstname);
      } else if (element.field === 'SWE') {
        countSWE += 1;
        studentsSWE.push(element.firstname);
      }
    });

    const countStudents = countCS + countSWE;

    const data = fs.readFileSync(filename, 'utf-8');
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
    console.log(`Number of students in CS: ${csNames.length}. List: ${csNames.join(', ').trim()}`);
    console.log(`Number of students in SWE: ${sweNames.length}. List: ${sweNames.join(', ').trim()}`);

    // print statements
    // console.log(`Number of students: ${countStudents}`);
    // console.log(`Number of students in CS: ${countCS}. List: ${studentsCS.toString().split(',').join(', ')}`);
    // console.log(`Number of students in SWE: ${countSWE}. List: ${studentsSWE.toString().split(',').join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};
