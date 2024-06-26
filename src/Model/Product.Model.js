import { Schema, model ,Types} from 'mongoose';

const ProductSchema = new Schema({
    Name:{
        type:String,
       required:true,  
       unique:true,
       trim:true
    },
    Slug:{ // same name category + / 
        type:String,
        required:true, 
     },
     Discription:{ 
        type:String,
        required:true, 
     },
     Stock:{  
        type:String,
        default:1, 
     },
     Price:{
        type:Number,
        required:true, 
     },
     Discount:{ 
        type:Number,
        required:0, 
     },
     FinalDiscount:{
        type:Number,
     },
     MainImage:{
      type:Object,
      required:true,
     },
     SubImages:[{
        type:Object,
        required:true,
       }],
     Status:{
        type:String,
        default:'Active',
        enum:['Active','NotActive'],
     },
     Sizes:[{
        type:String,
        enum:['s','m','lg','xl'],
     }],
     Colors:[String],
     CategoryId:{
      type:Types.ObjectId,
      ref:'Category',
      required:true,
     },
     SubCategoryId:{
        type:Types.ObjectId,
      ref:'SubCategory',
      required:true,
     },
     createdBy:{type:Types.ObjectId,ref:'User'},
     updatedBy:{type:Types.ObjectId,ref:'User'},
    },
    {
     timestamps:true,
    });
 



const ProductModel = model('Product',ProductSchema); 
export default ProductModel;