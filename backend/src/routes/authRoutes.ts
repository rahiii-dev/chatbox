import express from 'express';
import AuthController from '../controllers/authController';

const router = express.Router();

router.post('/register', AuthController.register);

router.post('/login', AuthController.login);

router.get('/refresh-token', AuthController.refreshToken)

router.post('/logout', AuthController.logout);

export default router;
