import { Router } from "express";
const router = Router({caseSensitive:true});
import * as AuthController from './auth.controller.js'
import { CheckEmail } from "../../MiddleWare/CheckEmail.js";




router.post('/signup',CheckEmail,AuthController.SignUp);
router.post('/signin',AuthController.SignIn);
router.patch('/sendcode',AuthController.SendCode);
router.patch('/forgotpassword',AuthController.ForgotPassword);







export default router