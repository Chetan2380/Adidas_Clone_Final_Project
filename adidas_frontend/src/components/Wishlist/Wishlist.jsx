import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import toast from "react-hot-toast";
import { PiHeartStraightFill } from "react-icons/pi";
import "./Wishlist.css"; // NEW CSS
import Api from "../../axiosconfig";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    try {
      const res = await Api.get("/cart-wishlist/get-all-wishlist-products");
      if (res.data.success) {
        setWishlistItems(res.data.wishlistProducts);
      }
    } catch (error) {
      toast.error("Failed to fetch wishlist");
    }
  };

  const removeFromWishlist = async (productId) => {
    setWishlistItems((prev) => prev.filter((p) => p._id !== productId));
    try {
      const res = await Api.post("/cart-wishlist/delete-wishlist-product", { productId });
      if (!res.data.success) {
        toast.error("Failed to remove");
        fetchWishlist(); // restore
      } else {
        toast.success("Removed from wishlist");
      }
    } catch (error) {
      toast.error("Error removing");
      fetchWishlist();
    }
  };

  return (
    <div>
      <Navbar />
        <div className="wishlist-container">
        <div className="wishlist-header">
            <h2 className="wishlist-title">MY WISHLIST</h2>
            <p className="wishlist-count">{wishlistItems.length} ITEM{wishlistItems.length > 1 && 'S'}</p>
        </div>

        <div className="wishlist-content">
            {wishlistItems.length === 1 ? (
                // Layout for a single item
                <>
                <div className="wishlist-left">
                    {wishlistItems.map((product) => (
                    <div className="wishlist-item" key={product._id}>
                        <div className="wishlist-item-img">
                        <img src={product.image} alt="wishlist product" />
                        <button className="wishlist-remove-btn" onClick={() => removeFromWishlist(product._id)}>
                            <PiHeartStraightFill />
                        </button>
                        <div className="wishlist-price">₹{product.price}</div>
                        </div>
                        <div className="wishlist-product-name">{product.title}</div>
                    </div>
                    ))}
                </div>
                <div className="wishlist-right">
                    <div className="wishlist-info-box">
                    <h3>Get more from your wishlist through the app</h3>
                    <ul>
                        <li>Instant notifications on items on sale or low in stock</li>
                        <li>Share your wishlist with friends and family</li>
                        <li>See which wishlist items are eligible for a voucher</li>
                    </ul>
                    <div className="scantodownload">
                        <p>Scan to download the adidas app</p>
                        <img src="..." alt="qr" />
                        <img src="..." alt="qr" />
                    </div>
                    </div>
                </div>
                </>
            ) : (
                // Layout for 2 or more items
                <>
                <div className="wishlist-right-full">
                    <div className="wishlist-info-box">
                    <h3>Get more from your wishlist through the app</h3>
                    <ul>
                        <li>Instant notifications on items on sale or low in stock</li>
                        <li>Share your wishlist with friends and family</li>
                        <li>See which wishlist items are eligible for a voucher</li>
                    </ul>
                    <div className="scantodownload">
                        <p>Scan to download the adidas app</p>
                        <img src="..." alt="qr" />
                        <img src="..." alt="qr" />
                    </div>
                    </div>
                </div>
                <div className="wishlist-grid">
                    {wishlistItems.map((product) => (
                    <div className="wishlist-item" key={product._id}>
                        <div className="wishlist-item-img">
                        <img src={product.image} alt="wishlist product" />
                        <button className="wishlist-remove-btn" onClick={() => removeFromWishlist(product._id)}>
                            <PiHeartStraightFill />
                        </button>
                        <div className="wishlist-price">₹{product.price}</div>
                        </div>
                        <div className="wishlist-product-name">{product.title}</div>
                    </div>
                    ))}
                </div>
                </>
            )}
            </div>

        </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
