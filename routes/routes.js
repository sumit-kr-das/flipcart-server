import express from 'express';
const router = express.Router();
import {userSignup,userLogin} from '../controller/userController';
import {getProducts} from '../controller/productController';

router.post("/signup",userSignup);
router.post("/login",userLogin);

router.get("/products",getProducts);

export default router;