import { Schema, model ,Types} from 'mongoose';

const CategorySchema = new Schema({
    Name:{
        type:String,
       required:true,  
    },
    Slug:{ // same name category + / 
        type:String,
        unique:true
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
     
     createdBy:{type:Types.ObjectId,ref:'User',required:true},
     updatedBy:{type:Types.ObjectId,ref:'User',required:true},
    },
    {
     timestamps:true,
    }  
);
 

const CategoryModel = model('Category',CategorySchema); // no relation in mongodb [ no sql]
export default CategoryModel;