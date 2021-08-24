import express from 'express';
const router = express.Router();
import {userSignup,userLogin} from '../controller/userController';

router.post("/signup",userSignup);
router.post("/login",userLogin);

export default router;