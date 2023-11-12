import { Router } from "express";
import {
    getCartProducts,
    addProductToCart,
    deleteProductFromCart,
} from "../controllers/carts-controller.js";
import { isAuth } from "../auth/auth.js";

const router = Router();

router.get("/", isAuth, getCartProducts);
router.post("/", isAuth, addProductToCart);
router.delete("/:id", isAuth, deleteProductFromCart);

export default router;
