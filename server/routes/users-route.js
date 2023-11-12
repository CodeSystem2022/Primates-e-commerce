import { Router } from "express";
import { login, register } from "../controllers/users-controller.js";

const router = Router();

router.post("/login", login);
router.post("/api/users", register);

export default router;
