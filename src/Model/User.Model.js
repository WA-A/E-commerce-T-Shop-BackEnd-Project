import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    UserName:{
       required:true,
       min:4,
       max:20
    },
    Email:{
        type:String,
        unique:true
     },
     
     Password:{
        type:String,
        required:true
     },
     Phone:{
      type:String
  },
  Address:{
    type:String
    },
     ConfirmEmail:{
        type:Boolean,
        default:false
     },
     gender:{
        type:String,
        enum:['Male','Female'],
       
     },
     image:{
      type:Object
     },
     Status:{
        type:String,
        default:'Active',
        enum:['Active','NotActive'],
     },
     Role:{
        type:String,
        default:'User',
        enum:['User','Admin'],
     }
    },
    {
     timestamps:true,
    }  
);
 

const UserModel = model('User',UserSchema); // no relation in mongodb [ no sql]
export default UserModel;