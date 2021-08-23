import User from "../model/usersSchema";

export const userSignup = async (req,res) =>{
    try{
        const exist = await User.findOne({username:req.body.username});
        if(exist){
            return res.status(401).json("Username is already exist");
        }
        const user = req.body;
        const newUser = new User(user);
        await newUser.save();
        res.status(200).json("user is successfully registered");
    }catch(err){
        console.log(`Error is: ${err.message}`);
    }
};