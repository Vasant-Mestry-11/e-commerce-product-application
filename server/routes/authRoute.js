import { Router } from 'express';
import { registerController } from '../controller/authController.js'

// router

const router = new Router()

// routing

router.post('/register', registerController)

export default router