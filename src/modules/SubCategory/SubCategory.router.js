import { Router } from "express";
const router = Router({caseSensitive:true});
import * as SubCategoryController from './SubCategory.controller.js'
import fileUpload, { FileValue } from "../../../utls/Multer.js";
import { auth } from "../../MiddleWare/auth.js";



router.post('/createsubcategory',auth(),fileUpload(FileValue.image).single('image'),SubCategoryController.CreateCategory);
router.get('/getAll',SubCategoryController.GetAll);
router.get('/getActive',SubCategoryController.GetActive);
router.get('/getdetails/:id',SubCategoryController.GetDetails);
router.patch('/updatecategory/:id',auth(),fileUpload(FileValue.image).single('image'),SubCategoryController.UpdateCategories);
router.delete('/deletecategory/:id',auth(),SubCategoryController.DeleteCategories);





export default router