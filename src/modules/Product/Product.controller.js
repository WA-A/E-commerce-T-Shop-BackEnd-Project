import CategoryModel from './../../Model/Category.Model.js';
import SubCategoryModel from './../../Model/SubCategory.js';
import ProductModel from './../../Model/Product.Model.js';
import slugify from'slugify';
import Cloudinary from '../../../utls/Cloudinary.js';

export const CreateProduct = async (req,res) =>{

       
    const {Name,Price,Discount,CategoryId,SubCategoryId} = req.body;

    
    const CheckCategory = await CategoryModel.findById(CategoryId);

       
    if(!CheckCategory){
        return res.status(404).json({message:"category not found"});
    }

    const SubCheckCategory = await SubCategoryModel.findOne({_id:SubCategoryId,CategoryId:CategoryId});
       
    if(!SubCheckCategory){
        return res.status(404).json({message:"subcategory not found"});
    }

    
   req.body.Slug = slugify(Name);
   
   req.body.FinalPrice = Price - ((Price * (Discount || 0)) /100);
   

    const {secure_url,public_id} = await Cloudinary.uploader.upload(req.files.MainImage[0].path,
    {
        folder:'T-Shop/Product'
    });

   // return res.json({secure_url,public_id});
    
    req.body.MainImage = {secure_url,public_id};
    req.body.SubImage = [];

    for (const file of req.files.SubImage){
        const {secure_url,public_id} = await Cloudinary.uploader.upload(file.path,
            {
                folder:'T-Shop/Product/SubImage'
            });
            req.body.SubImage.push({secure_url,public_id}) ;
    }


    const Product =  await ProductModel.create(req.body);
    return res.status(201).json({message:"success",Product});
}