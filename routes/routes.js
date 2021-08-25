import express from 'express';
const router = express.Router();
import {userSignup,userLogin} from '../controller/userController';
import {getProducts,getProductByID} from '../controller/productController';

router.post("/signup",userSignup);
router.post("/login",userLogin);

router.get("/products",getProducts);
router.get("/product/:id",getProductByID);

export default router;