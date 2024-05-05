import jwt from 'jsonwebtoken';
import UserModel from './../Model/User.Model.js';


export const auth = () =>{

    return async (req,res,next)=>{
        const {authorization} = req.headers;
        
        if(!authorization.startsWith(process.env.BEARERKEY)){ // bearer token the before is named basic token
            return res.json({message:"Invalid authorization"});
        }
        
        
        const token = authorization.split(process.env.BEARERKEY)[1]; // [1] means after Wasan__
        
        const decoded =  jwt.verify(token,process.env.LOGINSIG)
        
        if(!decoded){ 
            return res.status(400).json({message:"Invalid authorization"});
        }
        
        const authUser = await UserModel.findById(decoded.id).select('UserName');
        
        if(!authUser){ 
            return res.status(404).json({message:" User Not found"});
        }
        
        req.user=authUser;
        
        next();
       
    }
}
 