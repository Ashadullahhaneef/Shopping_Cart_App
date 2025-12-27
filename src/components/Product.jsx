import React from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { remove, add } from "../redux/Slices/CartSlice";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item Removed Form Cart");
  };
  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item Added To Cart");
  };

  return (
    <div>
      <div>
        <p>{post.title}</p>
      </div>
      <div>
        <p>{post.discription}</p>
      </div>
      <div>
        <img src={post.image} alt="image" />
      </div>
      <div>
        <p>{post.price}</p>
      </div>
      <div>
        {cart.some((p) => p.id == post.id) ? (
          <button onClick={removeFromCart}>Remove Item</button>
        ) : (
          <button onClick={addToCart}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};

export default Product;
