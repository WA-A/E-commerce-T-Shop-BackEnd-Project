import { Router } from "express";
const router = Router();
import * as CategoryController from './Category.controller.js'
import fileUpload, { FileValue } from "../../../utls/Multer.js";
import { auth } from "../../MiddleWare/auth.js";
import SubCategoriesRouter from './../SubCategory/SubCategory.router.js';
import { EndPoints } from "./Category.Role.js";
import { Validation } from "../../MiddleWare/Validation.js";
import * as schema from './Category.Validation.js'


router.use('/:id/subcategory',SubCategoriesRouter);
router.post('/createcategory',auth(EndPoints.Create),fileUpload(FileValue.image).single('image'),CategoryController.CreateCategory);
router.get('/getAll',auth(EndPoints.GatAll),CategoryController.GetAll);
router.get('/getActive',auth(EndPoints.GetActive),CategoryController.GetActive);
router.get('/getdetails/:id',CategoryController.GetDetails);
router.patch('/updatecategory/:id',auth(),fileUpload(FileValue.image).single('image'),CategoryController.UpdateCategories);
router.delete('/deletecategory/:id',auth(EndPoints.Delete),Validation(schema.DeleteCategorySchema),CategoryController.DeleteCategories);


export default router