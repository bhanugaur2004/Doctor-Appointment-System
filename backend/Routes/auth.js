import express from "express";
import { register, login } from "../Controllers/authController.js";
import { sendEmail, registerEmail } from "../Controllers/emailController.js"

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.post('/sendemail', sendEmail)
router.post('/registeremail', registerEmail)

export default router;