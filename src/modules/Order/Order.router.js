import { Router } from "express";
const router = Router();
import * as OrderController from './Order.controller.js'
import { auth } from "../../MiddleWare/auth.js";
import { EndPoints } from "./Order.Role.js";


router.post('/createorder',auth(EndPoints.Create),OrderController.CreateOrder);



export default router