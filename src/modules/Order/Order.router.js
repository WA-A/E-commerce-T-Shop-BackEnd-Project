import { Router } from "express";
const router = Router();
import * as OrderController from './Order.controller.js'
import { auth } from "../../MiddleWare/auth.js";
import { EndPoints } from "./Order.Role.js";


router.post('/createorder',auth(EndPoints.Create),OrderController.CreateOrder);
router.get('/getorder',auth(EndPoints.all),OrderController.GetOrder);
router.get('/getuserorder',auth(EndPoints.UserOrder),OrderController.GetUserOrder);
router.patch('/changestatus/:OrderId',auth(EndPoints.changestatus),OrderController.ChangeStatus);



export default router