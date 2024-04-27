import { Router } from "express";
const router = Router();

router.get('/',(req,res)=>{
    return res.json({message:"sucesss"})
})



export default router