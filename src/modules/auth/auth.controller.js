import bcrypt from'bcryptjs';
import jwt from 'jsonwebtoken';
import { SendEmail } from "../../../utls/SendEmail.js";
import { customAlphabet, nanoid } from 'nanoid';
import UserModel from '../../Model/User.Model.js';
//import { read, writeFileXLSX } from "xlsx";
import xlsx from "xlsx";



export const SignUp = async (req,res)=>{
   
   
    const {UserName,Email,Password} = req.body;

    const HashedPassword = bcrypt.hashSync(Password,parseInt(process.env.SALTROUND));
     
    const CreateUser = await UserModel.create({UserName,Email,Password:HashedPassword});
    const decoded = jwt.sign(token,process.env.CONFIRM_EMAILTOKEN);
   await SendEmail(Email,`Welcom`,`<h2>hello ${UserName}</h2>`,decoded);
    return res.status(201).json({message:" success",user:CreateUser});

}

export const ConfirmEmail = async(req,res)=>{
const token = req.params.token;
const decoded = jwt.verify(token,process.env.CONFIRM_EMAILTOKEN);
await UserModel.findOneAndUpdate({Email:decoded.Email},{ConfirmEmail:true});
return res.status(200).json({message:"success"});

}
export const SignIn = async (req,res)=>{
    const {Email,Password} = req.body;

    const user = await UserModel.findOne({Email});

    if(!user){
        return res.status(400).json({message:" Invalid data"});

    }
        
    const Match = bcrypt.compare(Password,user.Password);
     

    if(user.Status == "Not Active"){
        return res.status(400).json({message:" The account is blocked"});

    }

    if(!Match){
        return res.status(400).json({message:" Invalid data"});

    }

    const Token = jwt.sign({id:user._id,role:user.Role},process.env.LOGINSIG);
    return res.status(200).json({message:" success",Token});

}


export const SendCode = async(req,res)=>{
    const {Email} = req.body;
    const Code = customAlphabet('1234567890abcdef', 4)();
    const user = await UserModel.findOneAndUpdate({Email},{SendCode:Code},{new:true});

    if(!user){
        return res.status(400).json({message:" email not found"});
    }
    
    //await SendEmail(Email,`Reset Password`,`<h2> code is ${code}</h2>`)
    
    return res.status(200).json({message:" success",user});

     }


     export const ForgotPassword = async(req,res)=>{
        const {Email,Password,code} = req.body;
        const user = await UserModel.findOne({Email});
        if(!user){
            return res.status(404).json({message:"user not found"});

        }

        if(user.SendCode != code){
            return res.status(404).json({message:"invalid code"});
        }

        const password = bcrypt.hash(Password,parseInt(process.env.SALTROUND));

        await user.save();

        return res.status(200).json({message:" success"});

         
     }


     export const AddUserExcel = async(req,res)=>{
            const WorkBook = xlsx.readFile(req.file.path);
            const worksheet= WorkBook.Sheet[WorkBook.SheetNames[0]];
            const users= xlsx.utils.sheet_to_json(worksheet);

            await UserModel.insertMany(users);

            return res.json({message:"sucess"});
     }
    
  