import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// GENERATE TOKEN
const generateToken = (id) => {
    return jwt.sign(
        { id },
        process.env.JWT_SECRET,
        { expiresIn: "30d" }
    );
};


// REGISTER USER
export const registerUser = async (req, res) => {

    try {
        const { name, email, password } = req.body;

        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({
                success:false,
                errors: {email: "user already exists"},
                message: "User already exists"
            });
        }


        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        const token = generateToken(user._id);
        res.status(201).json({
            success: true,
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                image: user.image
            }
        });

    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};



// LOGIN USER
export const loginUser = async (req, res) => {

    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const token = generateToken(user._id);
        res.json({
            success: true,
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                image: user.image
            }
        });

    }
    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};



// GET USER PROFILE
export const getUserProfile = async (req, res) => {

    try {

        const user = await User
            .findById(req.user.id)
            .select("-password")
            .populate("wishlist")
            .populate("cart.product");

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.json(user);

    }
    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};



// UPDATE USER PROFILE
export const updateUserProfile = async (req, res) => {

    try {

        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.image = req.body.image || user.image;

        if (req.body.password) {

            user.password = await bcrypt.hash(req.body.password, 10);

        }

        const updatedUser = await user.save();

        res.json({

            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            role: updatedUser.role,
            token: generateToken(updatedUser._id)

        });

    }
    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};



// GET ALL USERS (ADMIN)
export const getUsers = async (req, res) => {

    try {

        const users = await User
            .find()
            .select("-password")
            .sort({ createdAt: -1 });

        res.json(users);

    }
    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};



// DELETE USER
export const deleteUser = async (req, res) => {

    try {

        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        await user.deleteOne();

        res.json({
            message: "User removed"
        });

    }
    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


// ADD TO CART
export const addToCart = async (req, res) => {
    try {
        const { productId, quantity = 1 } = req.body;

        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const itemIndex = user.cart.findIndex(c => c.product.toString() === productId);

        if (itemIndex > -1) {
            // already in cart -> increment quantity
            user.cart[itemIndex].quantity = user.cart[itemIndex].quantity + Number(quantity);
        } else {
            user.cart.push({ product: productId, quantity: Number(quantity) });
        }

        await user.save();

        const populated = await User.findById(user._id).select("-password").populate("cart.product");

        res.json({ success: true, user: populated });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// REMOVE FROM CART
export const removeFromCart = async (req, res) => {
    try {
        const { productId } = req.params;

        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        user.cart = user.cart.filter(c => c.product.toString() !== productId);

        await user.save();

        const populated = await User.findById(user._id).select("-password").populate("cart.product");

        res.json({ success: true, user: populated });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// GOOGLE OAUTH INIT
export const oauthGoogleInit = async (req, res) => {
    try {
        const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
        const params = new URLSearchParams({
            client_id: process.env.GOOGLE_CLIENT_ID,
            redirect_uri: process.env.GOOGLE_REDIRECT_URI,
            response_type: 'code',
            scope: 'openid profile email',
            access_type: 'offline',
            prompt: 'consent'
        });

        const authUrl = `${rootUrl}?${params.toString()}`;

        res.redirect(authUrl);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// GOOGLE OAUTH CALLBACK
export const oauthGoogleCallback = async (req, res) => {
    try {
        const code = req.query.code;
        if (!code) return res.status(400).json({ message: 'No code' });

        // exchange code for tokens
        const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                code,
                client_id: process.env.GOOGLE_CLIENT_ID,
                client_secret: process.env.GOOGLE_CLIENT_SECRET,
                redirect_uri: process.env.GOOGLE_REDIRECT_URI,
                grant_type: 'authorization_code'
            })
        });

        const tokenData = await tokenRes.json();

        const accessToken = tokenData.access_token;

        // fetch user info
        const userInfoRes = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
            headers: { Authorization: `Bearer ${accessToken}` }
        });

        const profile = await userInfoRes.json();

        // profile contains { id, email, name, picture }
        let user = await User.findOne({ email: profile.email });

        if (!user) {
            user = await User.create({
                name: profile.name,
                email: profile.email,
                password: Math.random().toString(36).slice(2),
                image: profile.picture
            });
        }

        const token = generateToken(user._id);

        // redirect to frontend with token
        const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173';
        return res.redirect(`${frontendUrl}/auth/login?token=${token}`);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
