import express from 'express';
import { loginUser, registerUser, loginAdmin } from '../controllers/userController.js';

const router = express.Router();

//Define routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/admin/login', loginAdmin);

export default router;
