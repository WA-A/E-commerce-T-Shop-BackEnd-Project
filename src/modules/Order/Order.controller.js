import CartModel from './../../Model/Cart.Model.js';
import CouponModel from '../../Model/Coupon.model.js';


export const CreateOrder = async (req,res)=>{

     const cart = await CartModel.findOne({UserId:req.user._id});
    if(cart){
        return res.status(400).json({message:"cart is empty"});
    }

  if (req.body.CouponId ){
    const coupon = await CouponModel.findById(req.body.CouponId);
    if(!coupon){
        return res.status(400).json({message:"coupon not found "});

    }

    if(coupon.ExpireDate < new Date()){
        return res.status(400).json({message:"coupon expired"});

    } 

    if(coupon.UsedBy.includes(req.user._id )){
        return res.status(400).json({message:"coupon aleardy used"});

    } 

    req.body.coupon = coupon;

}
    
    return res.json(cart);
}

