import { Router } from "express";
const router = Router();
import * as CartController from './Cart.controller.js'
import { auth } from "../../MiddleWare/auth.js";
import { EndPoints } from "./Cart.Role.js";


router.post('/createcart',auth(EndPoints.Create),CartController.CreateCategory);

export default router