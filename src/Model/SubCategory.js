import { Schema, model ,Types} from 'mongoose';

const SubCategorySchema = new Schema({
    Name:{
        type:String,
        unique:true,
       required:true,  
    },
    Slug:{ // same name category + / 
        type:String,
        required:true,  
     },
     image:{
      type:Object,
      required:true,
     },
     Status:{
        type:String,
        default:'Active',
        enum:['Active','NotActive'],
     },
     CategoryId:{
        type:Types.ObjectId,
        ref:'Category',
        required:true,
     },
     createdBy:{type:Types.ObjectId,ref:'User'},
     updatedBy:{type:Types.ObjectId,ref:'User'},
    },
    {
     timestamps:true,
    }  
);
 

const SubCategoryModel = model('SubCategory',SubCategorySchema); // no relation in mongodb [ no sql]
export default SubCategoryModel;