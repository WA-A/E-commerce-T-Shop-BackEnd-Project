import { Router } from "express";
import * as ProductController from './Product.controller.js'
import fileUpload, { FileValue } from "../../../utls/Multer.js";
import { auth } from "../../MiddleWare/auth.js";
import { EndPoints } from "./Product.Role.js";
import ReviewRouter from './../Review/Review.router.js';


const router = Router();


router.use('/:ProductId/review',ReviewRouter);
router.post('/createproduct',auth(EndPoints.Create),fileUpload(FileValue.image).fields([
    {name:'Mainimage',maxCount:1},
    {name:'SubImage',maxCount:5}
]),ProductController.CreateProduct);

router.get("/getproducts",ProductController.GetProducts);
export default router