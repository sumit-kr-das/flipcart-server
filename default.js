import {products} from './constants/product';
import product from './model/productSchema';

const defaultData = async () =>{
    try{
        await product.deleteMany({});
        await product.insertMany(products);
        console.log("Data imported successfully");
    }catch(err){
        console.log(`Error is: ${err.message}`);
    }
}

export default defaultData;