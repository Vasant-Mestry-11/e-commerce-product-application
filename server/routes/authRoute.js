import { Router } from 'express';
import { registerController, loginController, forgotPasswordController } from '../controller/authController.js'
import { isAdmin, requireSignIn } from '../middleware/authMiddleware.js';

// router

const router = new Router()

// Signup

router.post('/register', registerController)

// Login
router.post('/login', loginController);

// Forgot password
router.post('/forgot-password', forgotPasswordController);

// protected route auth

router.get('/user-auth', requireSignIn, (req, res) => res.status(200).send({
  ok: true
}))

export default router