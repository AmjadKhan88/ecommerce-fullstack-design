import express from "express";

import {

createProduct,
getProducts,
getProduct,
updateProduct,
deleteProduct

} from "../controllers/product.controller.js";

import {protect,admin} from "../middlewares/protect.middleware.js";

const router = express.Router();

router.get("/",getProducts);

router.get("/:id",getProduct);

router.post("/",protect,admin,createProduct);

router.put("/:id",protect,admin,updateProduct);

router.delete("/:id",protect,admin,deleteProduct);

export default router;
