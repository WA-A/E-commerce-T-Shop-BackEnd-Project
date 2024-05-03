import { Router } from "express";
const router = Router({caseSensitive:true});
import * as CategoryController from './Category.controller.js'
import fileUpload, { FileValue } from "../../../utls/Multer.js";


router.post('/createcategory',fileUpload(FileValue.image).single('image'),CategoryController.CreateCategory);
router.get('/getAll',CategoryController.GetAll);
router.get('/getActive',CategoryController.GetActive);
router.get('/getdetails/:id',CategoryController.GetDetails);
router.patch('/updatecategory/:id',fileUpload(FileValue.image).single('image'),CategoryController.UpdateCategories);
router.delete('/deletecategory/:id',fileUpload(FileValue.image).single('image'),CategoryController.DeleteCategories);





export default router