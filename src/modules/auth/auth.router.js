import { Router } from "express";
const router = Router({caseSensitive:true});
import * as AuthController from './auth.controller.js'
import { CheckEmail } from "../../MiddleWare/CheckEmail.js";
import { AsyncHandler } from "../../../utls/CatchError.js";




router.post('/signup',CheckEmail,AsyncHandler(AuthController.SignUp));
router.post('/signin',AuthController.SignIn);
router.patch('/sendcode',AuthController.SendCode);
router.patch('/forgotpassword',AuthController.ForgotPassword);
router.get('/confirmemail/:token',AuthController.ConfirmEmail);







export default router