import { Router } from "express";
import * as ProductController from './Product.controller.js'
import fileUpload, { FileValue } from "../../../utls/Multer.js";
import { auth } from "../../MiddleWare/auth.js";
import { EndPoints } from "./Product.Role.js";


const router = Router();

router.post('/createproduct',auth(EndPoints.Create),fileUpload(FileValue.image).fields([
    {name:'Mainimage',maxCount:1},
    {name:'SubImage',maxCount:5}
]),ProductController.CreateProduct);


export default router