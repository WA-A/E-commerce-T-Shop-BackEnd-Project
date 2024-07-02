import CartModel from './../../Model/Cart.Model.js';
import CouponModel from '../../Model/Coupon.model.js';
import ProductModel from './../../Model/Product.Model.js';
import UserModel from './../../Model/User.Model.js';
import OrderModel from '../../Model/Order.model.js';
//import { createInvoice } from "./createInvoice.js";

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


// if(order){
   

// const invoice = {
//   shipping: {
//     name: "John Doe",
//     address: "1234 Main Street",
//     city: "San Francisco",
//     state: "CA",
//     country: "US",
//     postal_code: 94111
//   },
//   items: [
//     {
//       item: "TC 100",
//       description: "Toner Cartridge",
//       quantity: 2,
//       amount: 6000
//     },
//     {
//       item: "USB_EXT",
//       description: "USB Cable Extender",
//       quantity: 1,
//       amount: 2000
//     }
//   ],
//   subtotal: 8000,
//   paid: 0,
//   invoice_nr: 1234
// };

// createInvoice(invoice, "invoice.pdf");
// }

export const GetOrder = async (req,res)=>{

    const orders = await OrderModel.find({$or:[
        {
            status:'Pending ',
        },
        {
            status:'Confirmed', 
        }
    ]});

    return res.json({message:"sucess",orders});
}

export const GetUserOrder = async (req,res)=>{

    const userorders = await OrderModel.find({UserId:req.user._id});

    return res.json({message:"sucess",userorders});
}

export const ChangeStatus = async (req,res)=>{

    const {OrderId}  = req.params
    const {status}  = req.body;
    const order = await OrderModel.findById(OrderId);

    if(!order){
        return res.json({message:"order not found"});

    }

     order.Status = status;
     await order.save();

     return res.json({message:"sucess",order});

}

