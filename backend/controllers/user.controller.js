import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


// GENERATE TOKEN
const generateToken = (id)=>{

    return jwt.sign(
        {id},
        process.env.JWT_SECRET,
        {expiresIn:"30d"}
    );

};



// REGISTER USER
export const registerUser = async (req,res)=>{

    try{

        const {name,email,password} = req.body;

        const userExist = await User.findOne({email});

        if(userExist){
            return res.status(400).json({
                message:"User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const user = await User.create({

            name,
            email,
            password:hashedPassword

        });

        res.status(201).json({

            _id:user._id,
            name:user.name,
            email:user.email,
            role:user.role,
            token:generateToken(user._id)

        });

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};



// LOGIN USER
export const loginUser = async (req,res)=>{

    try{

        const {email,password} = req.body;

        const user = await User.findOne({email});

        if(!user){
            return res.status(401).json({
                message:"Invalid email or password"
            });
        }

        const match = await bcrypt.compare(password,user.password);

        if(!match){
            return res.status(401).json({
                message:"Invalid email or password"
            });
        }

        res.json({

            _id:user._id,
            name:user.name,
            email:user.email,
            role:user.role,
            token:generateToken(user._id)

        });

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};



// GET USER PROFILE
export const getUserProfile = async (req,res)=>{

    try{

        const user = await User
        .findById(req.user.id)
        .select("-password")
        .populate("wishlist")
        .populate("cart.product");

        if(!user){
            return res.status(404).json({
                message:"User not found"
            });
        }

        res.json(user);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};



// UPDATE USER PROFILE
export const updateUserProfile = async (req,res)=>{

    try{

        const user = await User.findById(req.user.id);

        if(!user){
            return res.status(404).json({
                message:"User not found"
            });
        }

        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.image = req.body.image || user.image;

        if(req.body.password){

            user.password = await bcrypt.hash(req.body.password,10);

        }

        const updatedUser = await user.save();

        res.json({

            _id:updatedUser._id,
            name:updatedUser.name,
            email:updatedUser.email,
            role:updatedUser.role,
            token:generateToken(updatedUser._id)

        });

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};



// GET ALL USERS (ADMIN)
export const getUsers = async (req,res)=>{

    try{

        const users = await User
        .find()
        .select("-password")
        .sort({createdAt:-1});

        res.json(users);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};



// DELETE USER
export const deleteUser = async (req,res)=>{

    try{

        const user = await User.findById(req.params.id);

        if(!user){
            return res.status(404).json({
                message:"User not found"
            });
        }

        await user.deleteOne();

        res.json({
            message:"User removed"
        });

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};
