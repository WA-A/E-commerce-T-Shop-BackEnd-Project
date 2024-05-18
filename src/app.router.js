import connectDB from '../DB/ConnectDB.js';
import CategoriesRouter from './modules/Category/Category.router.js';
import SubCategoriesRouter from './modules/SubCategory/SubCategory.router.js';
import ProductRouter from './modules/Product/Product.router.js';
import AuthRouter from './modules/auth/auth.router.js';
import CartRouter from './modules/Cart/Cart.router.js';

import cors from 'cors';


const Appinit = (app,express)=>{
    app.use(express.json());
    app.use(cors())
    connectDB();
    app.use('/categories',CategoriesRouter);
    app.use('/subcategories',SubCategoriesRouter);
    app.use('/product',ProductRouter);
    app.use('/cart',CartRouter);
    app.use('/auth',AuthRouter);
    
    app.use('*',(req,res)=>{
        return res.status(404).json({message:"Page not Found"});
    })
 
}
export default Appinit ;