import { Router } from "express";
import AuthRoutes from "../routes/auth.routes.js"
import AdminRoutes from "./admin.routes.js";
import ProductRoutes from "../routes/product.routes.js"

const router = Router();

router.use("/auth", AuthRoutes);
router.use("/admin", AdminRoutes);
router.use("/product", ProductRoutes);

export default router;