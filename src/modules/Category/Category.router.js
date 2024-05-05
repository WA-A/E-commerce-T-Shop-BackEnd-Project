import { Router } from "express";
const router = Router({caseSensitive:true});
import * as CategoryController from './Category.controller.js'
import fileUpload, { FileValue } from "../../../utls/Multer.js";
import { auth } from "../../MiddleWare/auth.js";



router.post('/createcategory',auth(),fileUpload(FileValue.image).single('image'),CategoryController.CreateCategory);
router.get('/getAll',CategoryController.GetAll);
router.get('/getActive',CategoryController.GetActive);
router.get('/getdetails/:id',CategoryController.GetDetails);
router.patch('/updatecategory/:id',auth(),fileUpload(FileValue.image).single('image'),CategoryController.UpdateCategories);
router.delete('/deletecategory/:id',auth(),CategoryController.DeleteCategories);





export default router