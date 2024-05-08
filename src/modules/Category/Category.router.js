import { Router } from "express";
const router = Router();
import * as CategoryController from './Category.controller.js'
import fileUpload, { FileValue } from "../../../utls/Multer.js";
import { auth } from "../../MiddleWare/auth.js";
import SubCategoriesRouter from './../SubCategory/SubCategory.router.js';


router.use('/:id/subcategory',SubCategoriesRouter);
router.post('/createcategory',auth(),fileUpload(FileValue.image).single('image'),CategoryController.CreateCategory);
router.get('/getAll',CategoryController.GetAll);
router.get('/getActive',CategoryController.GetActive);
router.get('/getdetails/:id',CategoryController.GetDetails);
router.patch('/updatecategory/:id',auth(),fileUpload(FileValue.image).single('image'),CategoryController.UpdateCategories);
router.delete('/deletecategory/:id',auth(),CategoryController.DeleteCategories);





export default router