import User from "../models/user.js"

export const createAdmin=async(req,res)=>{
    try {
        const {name,email,password}=req.body;
        const user=new User({
        name,
        email,
        password,
        role:"Admin"
    })
    const savedUser=await user.save();
    res.json({
        savedUser,
        message:"Admin Created Successfully"
    })
    } catch (error) {
        error:"Error Occured"
    }
};

export const createAlumni=async(req,res)=>{
    try {
        const {name,email,password}=req.body;
        const user=new User({
        name,
        email,
        password,
        role:"Alumni"
    })
    const savedUser=await user.save();
    res.json({
        savedUser,
        message:"Alumni Created Successfully"
    })
    } catch (error) {
        error:"Error Occured"
    }
};

export const createStudent=async(req,res)=>{
    try {
        const {name,email,password}=req.body;
        const user=new User({
        name,
        email,
        password,
        role:"Student"
    })
    const savedUser=await user.save();
    res.json({
        savedUser,
        message:"Student Created Successfully"
    })
    } catch (error) {
        error:"Error Occured"
    }
};

export const getAllUsers=async(req,res)=>{
    try {
       const getusers= await User.find() 
       res.json({
        getusers
       })
    } catch (error) {
        res.json({
            error:"cannot fetch data"
           })
           console.log(error);
    }
}
