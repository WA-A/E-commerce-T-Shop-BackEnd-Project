import { Router } from "express";
const router = Router();
import * as CartController from './Cart.controller.js'
import { auth } from "../../MiddleWare/auth.js";
import { EndPoints } from "./Cart.Role.js";


router.post('/createcart',auth(EndPoints.Create),CartController.CreateCart);
router.delete('/removecart/:ProductId',auth(EndPoints.delete),CartController.RemoveCart);

export default router