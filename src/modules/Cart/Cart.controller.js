import CartModel from './../../Model/Cart.Model.js';


export const CreateCart = async (req,res)=>{
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

export const RemoveCart = async (req,res)=>{
    const {ProductId} = req.params;

    const cart = await CartModel.findByIdAndUpdate({UserId:req.user._id,
        $pull:{
            Products:{
                ProductId:ProductId
            }
        }
    },{new:true});

    return res.json({message:"success",cart});

    
}


export const ClearCart = async (req,res)=>{
   

    const cart = await CartModel.findByIdAndUpdate({UserId:req.user._id,
        
    },{
        Products:[],
    },{new:true});

    return res.json({message:"success",cart});

    
}

