import UserModel from "../../Model/User.Model.js";


export const GetUsers = async (req,res) =>{
    const users = await UserModel.find({});
    return res.status(200).json({message:"success",users});
}


export const GetDataUser = async (req,res) =>{
    const users = await UserModel.findById(req.user._id); // Get user information based on who is logged in 
    return res.status(200).json({message:"success",users});
}

