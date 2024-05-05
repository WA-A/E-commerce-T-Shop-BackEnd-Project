import UserModel from "../../Model/User.Model.js";
import bcrypt from'bcryptjs';
export const SignIn = async (req,res)=>{
    const {UserName,Email,Password} = req.body;

    const user = await UserModel.findOne({Email});

    if(user){
        return res.status(409).json({message:" email already exists"});

    }

    const HashedPassword = bcrypt.hashSync(Password,parseInt(process.env.SALTROUND));
     
    const CreateUser = await UserModel.create({UserName,Email,Password:HashedPassword});
    return res.status(201).json({message:" success",user:CreateUser});

}