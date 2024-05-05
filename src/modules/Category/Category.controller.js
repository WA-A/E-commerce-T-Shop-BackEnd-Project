import CategoryModel from '../../Model/Category.Model.js';
import Cloudinary from '../../../utls/Cloudinary.js';
import slugify from'slugify';


export const CreateCategory = async (req,res)=>{

    req.body.Name = req.body.Name.toLowerCase();

    if(await CategoryModel.findOne({Name:req.body.Name})){
        return res.status(409).json({message:"categoru aleardy exists"});
    }

   req.body.Slug = slugify(req.body.Name);
   
    const {secure_url,public_id} = await Cloudinary.uploader.upload(req.file.path,
    {
        folder:'T-Shop'
    });
    
    req.body.image = {secure_url,public_id}

    req.body.createdBy = req.user._id;
    req.body.updatedBy = req.user._id;
    const Category =  await CategoryModel.create(req.body);
    return res.json({message:Category});
}

export const GetAll = async (req,res) =>{
    const categories = await CategoryModel.find({});
    return res.status(200).json({message:"success",categories});
}

export const GetActive = async (req,res) =>{
    const categories = await CategoryModel.find({Status:'Active'}).select("Name");
    return res.status(200).json({message:"success",categories});
}

export const GetDetails = async (req,res) =>{
    const categories = await CategoryModel.findById(req.params.id);
    return res.status(200).json({message:"success",categories});
}

export const UpdateCategories = async (req,res) =>{
    const category = await CategoryModel.findById(req.params.id);

if(!category){
    return res.status(404).json({message:"category not found"});

}

req.body.Name = req.body.Name.toLowerCase();

if(await CategoryModel.findOne({Name:req.body.Name,_id:{$ne:req.params.id}})){
    return res.status(409).json({message:"Name aleardy exists"});
}

category.Slug = slugify(req.body.Name);

if(req.file){
    const {secure_url,public_id} = await Cloudinary.uploader.upload(req.file.path,
        {
            folder:'T-Shop'
        });

        Cloudinary.uploader.destroy(category.image.public_id);
        category.image = {secure_url,public_id};
    
}

category.Status = req.body.Status;
category.updatedBy = req.user._id;
await category.save(); // to update in DB
return res.status(200).json({message:"success",category});


}

export const DeleteCategories = async (req,res)=>{
    const category = await CategoryModel.findByIdAndDelete(req.params.id);

    if(!category){
        return res.status(404).json({message:"category not found"});
    
    }

    await Cloudinary.uploader.destroy(category.image.public_id);
    return res.status(200).json({message:"success",category});
  
}