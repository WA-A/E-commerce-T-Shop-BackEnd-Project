import { Router } from "express";
const router = Router({caseSensitive:true});
import * as AuthController from './auth.controller.js'




router.post('/signup',AuthController.SignUp);
router.post('/signin',AuthController.SignIn);
router.patch('/sendcode',AuthController.SendCode);
router.patch('/forgotpassword',AuthController.ForgotPassword);







export default router