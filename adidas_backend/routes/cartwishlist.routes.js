import { Router } from "express";
import {
  AddToCart,
  AddToWishlist,
  buyProducts,
  DeleteCartProduct,
  GetAllCartProducts,
  GetAllWishlistProducts,
  getOrderDetails,
} from "../controllers/cartwishlist.controller.js";
import { checkIsUserValid } from "../middlewares/all.middlewares.js";

const router = Router();

// 🛒 Cart Routes
router.get("/get-all-cart-products", checkIsUserValid, GetAllCartProducts);
router.post("/add-to-cart", checkIsUserValid, AddToCart);
router.post("/delete-cart-product", checkIsUserValid, DeleteCartProduct);
router.post("/buy-products", checkIsUserValid, buyProducts);

// 📦 Orders
router.get("/get-order-details", checkIsUserValid, getOrderDetails);

// 💖 Wishlist Routes
router.get("/get-all-wishlist-products", checkIsUserValid, GetAllWishlistProducts);
router.post("/add-to-wishlist", checkIsUserValid, AddToWishlist);

export default router;
