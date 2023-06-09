import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewIteam from "../ReviewIteam/ReviewIteam";
import "./Order.css";

const Orders = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);

  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);

    removeFromDb(id);
  };

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop-container">
      <div className="review-container">
        {cart.map((product) => (
          <ReviewIteam
            key={product.id}
            product={product}
            handleRemoveFromCart={handleRemoveFromCart}
          ></ReviewIteam>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link className="proceed-link" to="/cheakout">
            <button className="btn-proceed">Proceed Cheakout</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
