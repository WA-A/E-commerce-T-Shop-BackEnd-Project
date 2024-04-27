import connectDB from '../DB/ConnectDb.js';
import CategoriesRouter from './modules/Category/Category.router.js';
import ProductRouter from './modules/Product/Product.router.js';

const Appinit = (app,express)=>{
    app.use(express.json());
    connectDB();
    app.use('/categories',CategoriesRouter);
    app.use('/product',ProductRouter);

    app.use('*',(req,res)=>{
        return res.status(404).json({message:"Page not Found"});
    })
 
}
export default Appinit ;