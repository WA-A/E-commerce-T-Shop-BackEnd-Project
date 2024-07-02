import mongoose, { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    UserName:{
      type: String,
       required:true,
       min:4,
       max:20
    },
    Email:{
        type:String,
        unique:true
     },
     IsDeleted:{ // delete user and may retuen after delete
type:Boolean,
default:false,
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
     },
     SendCode:{
      type:String,
        default:null,
     }
    },
    {
     timestamps:true,
    }  
);
 

const UserModel = model('User',UserSchema); // no relation in mongodb [ no sql]
export default UserModel;