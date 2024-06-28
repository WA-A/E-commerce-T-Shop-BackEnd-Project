import { Router } from "express";
import * as ReviewController from './Review.controller.js'
import fileUpload, { FileValue } from "../../../utls/Multer.js";
import { auth } from "../../MiddleWare/auth.js";
import { EndPoints } from "./Review.Role.js";


const router = Router({mergeParams:true});

router.post('/createreview',auth(EndPoints.Create),ReviewController.CreateReview);




export default router