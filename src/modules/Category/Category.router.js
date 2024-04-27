import { Router } from "express";
const router = Router({caseSensitive:true});

router.get('/',(req,res)=>{
    return res.json({message:"sucesss"})
})



export default router