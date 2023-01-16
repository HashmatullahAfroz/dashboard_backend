import express from 'express';
import { Login } from '../controller/login/login.js';

const router = express.Router();
const login = new Login();

router.post('/login', login.signIn);




export { router };
