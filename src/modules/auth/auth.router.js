import { Router } from "express";
const router = Router({caseSensitive:true});
import * as AuthController from './auth.controller.js'
import { CheckEmail } from "../../MiddleWare/CheckEmail.js";
import { AsyncHandler } from "../../../utls/CatchError.js";
import { Validation } from "../../MiddleWare/Validation.js";
import * as schema from './Auth.Validation.js'
import fileUpload from "../../../utls/Multer.js";





router.post('/signup',Validation(schema.RegisterSchema),CheckEmail,AsyncHandler(AuthController.SignUp));
router.post('/addexcle',fileUpload().single('excle'),AsyncHandler(AuthController.AddUserExcel));
router.post('/signin',Validation(schema.LoginSchema),AuthController.SignIn);
router.patch('/sendcode',Validation(schema.SendCodeSchema),AuthController.SendCode);
router.patch('/forgotpassword',Validation(schema.ForgetPasswordSchema),AuthController.ForgotPassword);
router.get('/confirmemail/:token',AuthController.ConfirmEmail);







export default router