import { Router } from "express";
const router = Router({caseSensitive:true});
import * as CategoryController from './Category.controller.js'
import fileUpload, { FileValue } from "../../../utls/Multer.js";


router.post('/createcategory',fileUpload(FileValue.image).single('image'),CategoryController.CreateCategory);





export default router