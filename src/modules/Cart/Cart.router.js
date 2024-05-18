import { Router } from "express";
const router = Router();
import * as CartController from './Cart.controller.js'
import { auth } from "../../MiddleWare/auth.js";
import { EndPoints } from "./Cart.Role.js";


router.post('/createcart',auth(EndPoints.Create),CartController.CreateCart);
router.delete('/removecart/:ProductId',auth(EndPoints.delete),CartController.RemoveCart);
router.delete('/clearcart/:ProductId',auth(EndPoints.delete),CartController.ClearCart);
router.get('/getcart',auth(EndPoints.Create),CartController.GetCart);
//router.put('/increasequantity/:ProductId',auth(EndPoints.Create),CartController.IncreaseQuantity);
//router.put('/decreasequantity/:ProductId',auth(EndPoints.Create),CartController.DecreaseQuantity);
router.put('/updateequantity/:ProductId',auth(EndPoints.Create),CartController.UpdateQuantity); // replacement IncreaseQuantity && DecreaseQuantity


export default router