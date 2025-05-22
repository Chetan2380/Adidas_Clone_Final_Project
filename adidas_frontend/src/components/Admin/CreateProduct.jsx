import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Api from '../axiosconfig';
import { AuthContext } from '../context/auth.context';

const CreateNewProduct = () => {
  const { state } = useContext(AuthContext);
  const router = useNavigate();

  const [productData, setProductData] = useState({
    name: "",
    price: "",
    category: "",
    event: "",
    image: "",
  });

  const [errors, setErrors] = useState([]);
  const [disable, setDisable] = useState(true);

  // Handle field changes
  function handleChange(event) {
    setProductData({ ...productData, [event.target.name]: event.target.value });
  }

  // Form submission
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (productData.name && productData.price && productData.category && productData.event && productData.image) {
        const response = await Api.post("/product/create-new-product", {
          productData,
          userId: state?.user?.userId,
        });
        if (response.data.success) {
          setProductData({
            name: "",
            price: "",
            category: "",
            event: "",
            image: "",
          });
          router("/allproducts1");
          toast.success(response.data.message);
        }
      } else {
        toast.error("All fields are mandatory.");
      }
    } catch (error) {
      toast.error(error?.response?.data?.error || "Something went wrong.");
    }
  }

  // Admin check
  useEffect(() => {
    if (state?.user) {
      if (state.user.role !== "admin") {
        toast.error("You are not allowed to access this page.");
        router("/");
      }
    } else {
      toast.error("Please login to access this page.");
      router("/login");
    }
  }, [state, router]);

  // Basic form validation
  useEffect(() => {
    const errorsArray = [];

    if (!productData.name) errorsArray.push("Name is required.");
    if (!productData.price) errorsArray.push("Price is required.");
    if (!productData.category) errorsArray.push("Category is required.");
    if (!productData.event) errorsArray.push("Event is required.");
    if (!productData.image) errorsArray.push("Image URL is required.");

    setErrors(errorsArray);
    setDisable(errorsArray.length > 0);
  }, [productData]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Create New Product</h1>

        <label>Name:</label><br />
        <input type='text' name='name' onChange={handleChange} value={productData.name} /><br />

        <label>Price:</label><br />
        <input type='text' name='price' onChange={handleChange} value={productData.price} /><br />

        <label>Category:</label><br />
        <input type='text' name='category' onChange={handleChange} value={productData.category} /><br />

        <label>Event:</label><br />
        <input type='text' name='event' onChange={handleChange} value={productData.event} /><br />

        <label>Image URL:</label><br />
        <input type='text' name='image' onChange={handleChange} value={productData.image} /><br />

        {errors.length > 0 && (
          <div>
            {errors.map((error, i) => (
              <p key={i} style={{ color: "red", fontSize: "14px" }}>{error}</p>
            ))}
          </div>
        )}

        <input disabled={disable} type="submit" value="ADD" />
      </form>
    </div>
  );
};

export default CreateNewProduct;
