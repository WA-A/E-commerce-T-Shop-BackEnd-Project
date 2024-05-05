import connectDB from '../DB/ConnectDb.js';
import CategoriesRouter from './modules/Category/Category.router.js';
import ProductRouter from './modules/Product/Product.router.js';
import AuthRouter from './modules/auth/auth.router.js';
import cors from 'cors';


const Appinit = (app,express)=>{
    app.use(express.json());
    app.use(cors())
    connectDB();
    app.use('/categories',CategoriesRouter);
    app.use('/product',ProductRouter);
    app.use('/auth',AuthRouter);
    
    app.use('*',(req,res)=>{
        return res.status(404).json({message:"Page not Found"});
    })
 
}
export default Appinit ;