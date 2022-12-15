import express from 'express';
import AddressControler from './controllers/AddressControler';
import UsersController from './controllers/UsersController';
import EmployerController from './controllers/EmployerController';
import ScheduleController from './controllers/ScheduleController';

const routes = express.Router();

const usersController = new UsersController();
const employerController = new EmployerController();
const scheduleController = new ScheduleController();

routes.get('/users', usersController.getUsers);
routes.post('/users', usersController.createUser);
routes.post('/login', usersController.loginUser);
routes.post('/users/employer', usersController.createUserEmployer);

routes.get('/employer', employerController.getEmployer);
routes.get('/patient', usersController.getPatient);
routes.get('/schedule', scheduleController.getSchedule);
routes.get('/schedule/:id', scheduleController.getScheduleByEmployer);
routes.post('/schedule', scheduleController.createSchedule);

export default routes;