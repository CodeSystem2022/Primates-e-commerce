import { Router } from "express";
import {
    createProduct,
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct,
} from "../controllers/products-controller.js";
import { isAuth } from "../auth/auth.js";
import { isAdmin } from "../auth/admin.js";

const router = Router();

router.post("/", isAuth, isAdmin, createProduct);
router.get("/", getProducts);
router.get("/:id", getProduct);
router.put("/:id", isAuth, isAdmin, updateProduct);
router.delete("/:id", isAuth, isAdmin, deleteProduct);

export default router;
