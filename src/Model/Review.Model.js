import { Schema, model ,Types} from 'mongoose';

const ReviewSchema = new Schema({
    Comment:{
        type:String,
       required:true,  
    },
    Rating:{
        type:Number,
        require:true,
        min:1,
        max:5
    },
    UserId:{
type:Types.ObjectId,
ref:'user',
require:true,
    },
     image:{
      type:Object,
     },
    });
 


const ReviewModel = model('Review',ReviewSchema); 
export default ReviewModel;