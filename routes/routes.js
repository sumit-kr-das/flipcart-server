import express from 'express';
const router = express.Router();
import {userSignup} from '../controller/userController';

router.post("/signup",userSignup);

export default router;