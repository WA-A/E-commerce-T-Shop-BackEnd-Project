import { Router } from "express";
import * as SubCategoryController from './SubCategory.controller.js'
import fileUpload, { FileValue } from "../../../utls/Multer.js";
import { auth } from "../../MiddleWare/auth.js";


const router = Router({mergeParams:true}); // get id parent

router.post('/createsubcategory',auth(),fileUpload(FileValue.image).single('image'),SubCategoryController.CreateCategory);
router.get('/getAll/:id',SubCategoryController.GetAll);
router.get('/getActive',SubCategoryController.GetActive);
router.get('/getdetails/:id',SubCategoryController.GetDetails);
router.patch('/updatecategory/:id',auth(),fileUpload(FileValue.image).single('image'),SubCategoryController.UpdateCategories);
router.delete('/deletecategory/:id',auth(),SubCategoryController.DeleteCategories);





export default router