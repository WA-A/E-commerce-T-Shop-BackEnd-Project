import { Schema, model ,Types} from 'mongoose';

const CouponSchema = new Schema({
    Name:{
        type:Types.ObjectId,
      ref:'User',
      required:true,
    },
    Amount:{
        type:Number,
       required:true,
     },
     UsedBy:[{
       UserId:{
        type:Types.ObjectId,
      ref:'User',
      required:true,
    },
       }],

       ExpireDate:{
        type:Date,
        required:true,
       }
    
    },
    {
     timestamps:true,
    });
 

const CouponModel = model('Coupon',CouponSchema); 
export default CouponModel;