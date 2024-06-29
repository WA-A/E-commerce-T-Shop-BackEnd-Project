import UserModel from "../Model/User.Model.js";

export const CheckEmail = async(req,res,next)=>{
    const {Email}=req.body;
    const user = await UserModel.findOne({Email});

    if(user){
        return res.status(400).json({message:" email already exits"});

    }
    next();
}