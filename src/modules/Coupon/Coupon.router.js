import { Router } from "express";
const router = Router();
import * as CouponController from './Coupon.controller.js'
import { auth } from "../../MiddleWare/auth.js";
import { EndPoints } from "./Coupon.Role.js";


router.post('/createcoupon',auth(EndPoints.Create),CouponController.CreateCoupon);

export default router