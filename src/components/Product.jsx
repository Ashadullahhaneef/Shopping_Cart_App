import React from "react";

const Product = ({ post }) => {
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
        <button>{false ? <p>Remove Item</p> : <p>Add to cart</p>}</button>
      </div>
    </div>
  );
};

export default Product;
