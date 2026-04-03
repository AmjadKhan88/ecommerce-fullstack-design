import express from "express";

import {

createOrder,
getMyOrders,
getOrderById,
getOrders,
updateOrderToPaid,
updateOrderStatus,
deleteOrder

} from "../controllers/order.controller.js";

import {protect,admin} from "../middlewares/protect.middleware.js";

const router = express.Router();

router.post("/",protect,createOrder);

router.get("/myorders",protect,getMyOrders);

router.get("/:id",protect,getOrderById);

router.get("/",protect,admin,getOrders);

router.put("/:id/pay",protect,updateOrderToPaid);

router.put("/:id/status",protect,admin,updateOrderStatus);

router.delete("/:id",protect,admin,deleteOrder);

export default router;
