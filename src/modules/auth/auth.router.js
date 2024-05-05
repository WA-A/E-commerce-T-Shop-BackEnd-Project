import { Router } from "express";
const router = Router({caseSensitive:true});
import * as AuthController from './auth.controller.js'



router.post('/signin',AuthController.SignIn);
//router.get('/getAll',CategoryController.GetAll);






export default router