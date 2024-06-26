import CartModel from './../../Model/Cart.Model.js';
import CouponModel from '../../Model/Coupon.model.js';
import ProductModel from './../../Model/Product.Model.js';
import UserModel from './../../Model/User.Model.js';
import OrderModel from '../../Model/Order.model.js';


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
    let FinalProductList = [];
for (let product of req.body.Products){
  const checkproduct = await ProductModel.findOne({
    _id:product.ProductId,
    stock:{$gta:product.Quantity}
  });

  if(!checkproduct){
    return res.status(400).json({message:'product quantity not available'});
  }

  product.Name=checkproduct.Name;
  product.Discount = checkproduct.Discount;
  product.FinalPrice = product.Quantity *checkproduct.FinalPrice;
  product.UnitPrice = checkproduct.Price;

  FinalProductList.push(product);  
}

const user = await UserModel.findById(req.user._id);
if(!req.body.Address){
    req.body.Address=user.Address;
}
if(!req.body.PhoneNumber){
    req.body.Address=user.PhoneNumber;
}

const order = await OrderModel.create({
    UserId:user._id,
    Products:FinalProductList,
    FinalPrice:SubTotal- (SubTotal *((req.body.Copun.Amount || 0))/100),
    Address:req.body.Address,
    PhoneNumber:req.body.PhoneNumber,
    updatedBy:req.user._id
});

if(order){
    for(const product of req.body.Products){
        await ProductModel.findOneAndUpdate({_id:product.ProductId}),
        {
            $inc:{
                stock:-product.Quantity
            }
        }
    }

    if(req.body.Coupon){
        await CouponModel.findByIdAndUpdate({UserId:req.user._id },{
           Products : [],
        });
    }
}

return res.json({message:'sucess',order});

}

