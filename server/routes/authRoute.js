import { Router } from 'express';
import { registerController, loginController } from '../controller/authController.js'

// router

const router = new Router()

// Signup

router.post('/register', registerController)

// Login
router.post('/login', loginController);

export default router