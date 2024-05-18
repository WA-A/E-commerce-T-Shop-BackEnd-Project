import CartModel from './../../Model/Cart.Model.js';


export const CreateCategory = async (req,res)=>{
const {ProductId} = req.body;

const cart =  await CartModel.findOne({UserId:req.user._id});

    if(!cart){
        const newcart = await CartModel.create({
            UserId:req.user._id,
            ProductS:{ProductId}
        });
        return res.json({message:"success",cart:newcart});
    }

   for (let i=0;i<cart.Products.length;i++){
    if(cart.Products[i].ProductId == ProductId){
        return res.json({message:"product already exits"});

    }
   }

   cart.Products.push({ProductId:ProductId});
   await cart.save();
    return res.json({message:"success",cart});
}

