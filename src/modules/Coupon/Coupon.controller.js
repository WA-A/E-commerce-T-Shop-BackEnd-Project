import CouponModel from '../../Model/Coupon.model.js';



export const CreateCoupon = async (req,res)=>{


    if(await CouponModel.findOne({Name:req.body.Name})){
        return res.status(409).json({message:"coupon aleardy exists"});
    }

   req.body.ExpireDate = new Date(req.body.ExpireDate);

    

    const Coupon =  await CouponModel.create(req.body);
    return res.status(201).json({message:"success",Coupon});
}

