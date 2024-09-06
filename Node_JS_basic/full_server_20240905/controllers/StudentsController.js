const readDatabase = require('../utils');

export default class StudentsController {
  static getAllStudents(request, response) {
    const filename = process.argv[process.argv.length - 1];
    // console.log(filename);

    readDatabase(filename)
      .then((data) => {
        let outputString = '';
        outputString += 'This is the list of our students\n';

        let students = data.CS;
        outputString += `Number of students in CS: ${students.length}. `;
        outputString += `List: ${students.join(', ')}\n`;

        students = data.SWE;
        outputString += `Number of students in SWE: ${students.length}. `;
        outputString += `List: ${students.join(', ')}\n`;

        response.status(200).end(outputString);
      })
      .catch((error) => {
        response.status(500).end(error.message);
      });
  }

  static getAllStudentsByMajor(request, response) {
    // let major = request.params.major

    // https://stackoverflow.com/questions/47395070/how-to-fix-eslint-error-prefer-destructuring
    const { major } = request.params; // follows eslint destructuring recommendation

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).end('Major parameter must be CS or SWE');
    }

    const filename = process.argv[process.argv.length - 1];
    // console.log(filename);

    readDatabase(filename)
      .then((data) => {
        let outputString = '';

        const students = data[major];
        outputString += `List: ${students.join(', ')}\n`;

        response.status(200).end(outputString);
      })
      .catch((error) => {
        response.status(500).end(error.message);
      });
  }
}
