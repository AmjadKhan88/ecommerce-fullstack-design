import express from "express";

import {
	registerUser,
	loginUser,
	getUserProfile,
	updateUserProfile,
	getUsers,
	deleteUser,
	addToCart,
	removeFromCart,
	oauthGoogleInit,
	oauthGoogleCallback
} from "../controllers/user.controller.js";

import {protect,admin} from "../middlewares/protect.middleware.js";
import { registerValidation } from "../validations/authValidation.js";
import { validate } from "../middlewares/validation.middleware.js";

const router = express.Router();

router.post("/register",registerValidation,validate, registerUser);

router.post("/login",loginUser);

router.get("/profile",protect,getUserProfile);

router.put("/profile",protect,updateUserProfile);

// CART
router.post("/cart", protect, addToCart);
router.delete("/cart/:productId", protect, removeFromCart);

// OAUTH
router.get('/auth/google', oauthGoogleInit);
router.get('/auth/google/callback', oauthGoogleCallback);

router.get("/",protect,admin,getUsers);

router.delete("/:id",protect,admin,deleteUser);

export default router;
