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