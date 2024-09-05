const { default: AppController } = require('../controllers/AppController');
const { default: StudentsController } = require('../controllers/StudentsController');

// https://stackoverflow.com/questions/6059246/how-to-include-route-handlers-in-multiple-files-in-express/37309212#37309212
module.exports = (app) => {
  app.get('/', (request, response) => {
    AppController.getHomepage(request, response);
  });

  app.get('/students', (request, response) => {
    StudentsController.getAllStudents(request, response);
  });

  app.get('/students/:major', (request, response) => {
    StudentsController.getAllStudentsByMajor(request, response);
  });
};
