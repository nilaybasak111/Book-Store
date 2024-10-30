import bcryptjs from "bcryptjs"
import User from "../model/UserModel.js";

// Creating SignUp Function 
export const signup = async (req, res)=>{
    try{
        const {fullname, email, password} = req.body;
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({message: "User is already Exists, Please try another Email"})
        }

        // Hashing our input Password
        const hashPassword = await bcryptjs.hash(password, 10);

        // Creating New User
        const createUser = new User ({
            fullname : fullname,
            email : email,
            password : hashPassword
        })
        await createUser.save()
        res.status(201).json({message: "User Created Successfully", user:{
            _id : createUser._id,
            fullname : createUser.fullname,
            email : createUser.email
        }})
        console.log("User Created Successfully")

    }catch(error){
        console.log("SignUp Error" + error.message)
        res.status(500).json({message: "Internal Server Error"})
    }
}


// Creating Login Function
export const login = async (req,res)=>{
    try{
        const {email, password} = req.body;
        // Finding User Email in Our Database
        const user = await User.findOne({email})
        // Comparing Two Password
        const isMatch = await bcryptjs.compare(password, user.password)
        if(!user || !isMatch){
            return res.status(400).json({message: "Wrong Input, Please Check Email & Password"})
        } else{
            res.status(200).json({message: "Login Successfully", user:{
                _id : user._id,
                fullname : user.fullname,
                email : user.email
            }})
        }

    }catch(error){
        console.log("Login Error" + error.message)
        res.status(500).json({message: "Internal Server Error"})
    }
}