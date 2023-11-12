import { Router } from "express";
import { isAuth } from "../auth/auth.js";
import { createOrder, getOrders } from "../controllers/orders-controller.js";
const router = Router();

router.post("/", isAuth, createOrder);
router.get("/", isAuth, getOrders);

export default router;
