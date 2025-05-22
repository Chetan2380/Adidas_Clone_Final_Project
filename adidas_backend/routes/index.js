import { Router } from "express";
import AuthRoutes from "../routes/auth.routes.js"
import AdminRoutes from "./admin.routes.js";

const router = Router();

router.use("/auth", AuthRoutes);
router.use("/admin", AdminRoutes);

export default router;