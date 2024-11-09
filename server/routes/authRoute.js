import { Router } from 'express';
import { registerController, loginController, testController } from '../controller/authController.js'
import { isAdmin, requireSignIn } from '../middleware/authMiddleware.js';

// router

const router = new Router()

// Signup

router.post('/register', registerController)

// Login
router.post('/login', loginController);

// test
router.get('/test', requireSignIn, isAdmin, testController)

export default router