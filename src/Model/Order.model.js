import { Schema, model ,Types} from 'mongoose';

const OrderSchema = new Schema({
    UserId:{
        type:Types.ObjectId,
      ref:'User',
      required:true,
    },
    PaymentType:{
        type:String,
        default:'Cash',
        enum:['Cash','Cart'],
     },
     FinalPrice:{
        type:Number,
        required:true, 
     },
     Address:{
      type:String,
      required:true,
     },
     PhoneNumber:{
        type:Object,
        required:true,
       },
       CouponId:{
        type:Types.ObjectId,
      ref:'Coupon',
    },
     Status:{
        type:String,
        default:'Pending',
        enum:['Pending','Cancelled','Confirmed','Onway','Delivered'],
     },
     Products:[{
        ProductId:{ 
            type:Types.ObjectId,
            ref:'Product',
            required:true,
            },
            Quantity:{
                type:Number,
                default:1,
                required:true,
            },
            unitPrice:{
                type:Number,
                required:true,
            },
            FinalPrice:{
            type:Number,
           required:true,
       },

     }],
     Notes:{
        type:String,
     },
     RejectedReason:{
        type:String,
     },
     updatedBy:{type:Types.ObjectId,
        ref:'User',
        required:true,
    },
    },
    {
     timestamps:true,
    });
 



const OrderModel = model('Order',OrderSchema); 
export default OrderModel;