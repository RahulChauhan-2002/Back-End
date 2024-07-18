import express from 'express';
import auth from '../middleware/auth.js';
import { dashboard, login } from '../controllers/userControllers.js';

const userRoutes=express.Router();

userRoutes.route('/login').post(login);
userRoutes.route('/dashboard').get(auth,dashboard);

export default userRoutes;
