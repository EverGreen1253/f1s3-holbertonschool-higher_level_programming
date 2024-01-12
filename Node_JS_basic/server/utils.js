const fs = require('fs');

export default async function readDatabase(filename) {
  const studentData = {};

  try {
    const data = await fs.readFileSync(filename, 'utf-8');
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

    studentData.CS = studentsCS;
    studentData.SWE = studentsSWE;

    return Promise.resolve(studentData);
  } catch (error) {
    return Promise.reject(
      Error(),
    );
  }
}
