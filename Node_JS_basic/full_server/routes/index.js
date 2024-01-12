import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const express = require('express');

const router = express.Router();

// Main route
router.get('/', AppController.getHomepage);

// Students routes
// router.get('/students', StudentsController.getAllStudents);
// router.get('/students/:major', StudentsController.getAllStudentsByMajor);

router.get('/students', (req, res) => {
  StudentsController.getAllStudents(req, res, process.argv[2]);
});

router.get('/students/:major', (req, res) => {
  StudentsController.getAllStudentsByMajor(req, res, process.argv[2]);
});

module.exports = router;
