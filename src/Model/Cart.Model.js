import { Schema, model ,Types} from 'mongoose';

const CartSchema = new Schema({
    UserId:{
        type:Types.ObjectId,
      ref:'User',
      required:true,
       unique:true
    },
    Products:[{
        ProductId:{ 
            type:Types.ObjectId,
            ref:'Product',
            required:true,
            },
            Quantity:{
                type:Number,
                default:1
            },
    }]
},
    {
     timestamps:true,
    });
 



const CartModel = model('Cart',CartSchema); 
export default CartModel;