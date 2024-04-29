import CategoryModel from '../../Model/Category.Model.js';
import Cloudinary from '../../../utls/Cloudinary.js';
import slugify from'slugify';


export const CreateCategory = async (req,res)=>{

    req.body.name = req.body.name;
   
    if(await CategoryModel.findOne({name:req.body.name})){
        return res.status(409).json({message:"categoru aleardy exists"});
    }
   req.body.slug = slugify(req.body.name);
    const {secure_url,public_id} = await Cloudinary.uploader.upload(req.file.path,
    {
        folder:'T-Shop'
    });
    req.body.image = {secure_url,public_id}
    const Category =  await CategoryModel.create(req.body);
    return res.json({message:Category});
}