import ReviewModel from './../../Model/Review.Model.js';
import OrderModel from './../../Model/Order.model.js';


export const CreateReview = async (req,res)=>{
    const { ProductId} = req.params;
    const { Comment,Rating} = req.body;

    const order = await OrderModel.findOne({
        UserId:req.user._id,
        Status:"Delivered",
       " Products.ProductId":ProductId
    });

    if(!order){
        return res.status(400).json({message:"can't review this order"})
    }

    const CheckReview = await ReviewModel.findOne({
        UserId:req.user._id,
        ProductId:ProductId,
    });

    if(!CheckReview){
        return res.status(400).json({message:"aleardy reviewed this order"})
    }

    if(req.file){
        const {secure_url,public_id} = await Cloudinary.uploader.upload(req.file.path,
            {
                folder:'T-Shop'
            });
    
            Cloudinary.uploader.destroy(category.image.public_id);
            category.image = {secure_url,public_id};
        
    }


    const review = await ReviewModel.create({
        Comment,Rating,
        ProductId,UserId:req.user._id,
        image:req.body.image
    });

    return res.status(201).json({message:"sucess",review});

}