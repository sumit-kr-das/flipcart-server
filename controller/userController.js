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

export const userLogin = async(req,res) =>{
    try{
        let user = await User.findOne({username:req.body.username, password:req.body.password});
        if(user){
            res.status(200).json(`${req.body.username} login successful`);
        }else{
            res.status(400).json(`Invali password/username`);
        }
    }catch(err){
        console.log(`Error is: ${err.message}`);
    }
}