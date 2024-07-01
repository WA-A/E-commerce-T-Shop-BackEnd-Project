
export const Validation = (schema)=>{
    //const errorsMessage = [];
   return (req,res,next)=>{
    const {error}= schema.validate(req.body,{abortEarly:false});
    // if(error){
    //     error.details.forEach( err=> {
    //         const key = err.context.key;
    //         errorsMessage.push({[key]:err.massege});
    //     })
     return res.status(400).json({message:"validate error",error});//errors:errorsMessage
    } 
    next(); 
}
//}
