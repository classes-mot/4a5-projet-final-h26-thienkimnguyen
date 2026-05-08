import express from 'express';
import usersController from '../controller/users-controller.js';

const router = express.Router();

router.post('/register', usersController.registerUser);

router.post('/login', usersController.connexionUser);

export default router;