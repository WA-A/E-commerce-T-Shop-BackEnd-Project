import UserModel from "../../Model/User.Model.js";


export const GetUsers = async (req,res) =>{
    const users = await UserModel.find({});
    return res.status(200).json({message:"success",users});
}

