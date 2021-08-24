import Product from "../model/productSchema";

export const getProducts = async (req,res) =>{
    try{
        const product = await Product.find({})
        res.json(product);
    }catch(err){
        console.log("Error is ~ ",err.message);
    }
}