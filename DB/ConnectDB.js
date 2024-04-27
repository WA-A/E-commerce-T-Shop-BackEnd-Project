import mongoose from'mongoose';

const connectDB = async ()=>{

     mongoose.connect(process.env.DB) // url/name database
    // get url from cmd and write mongosh
     .then( result=>{ // the way same async & await
console.log(`connected DB`);
     })
     .catch(err=>{
        console.log(`not connected to DB ${err}`);
     })
     
}

export default connectDB;