import React from "react";
import "./Cart.css";

const Cart = (props) => {
  //   const { cart } = props;
  const cart = props.cart;

  let total = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    product.quantity = product.quantity || 1;
    total = total + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = (total * 7) / 100;

  const grandTotal = total + totalShipping + tax;
  return (
    <div className="cart">
      <h2>Order summary</h2>
      <h4>Selected iteams: {quantity}</h4>
      <p>Total Price: ${total}</p>
      <p>Total Shipping: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h6>Grand Total: {grandTotal.toFixed(2)}</h6>
    </div>
  );
};

export default Cart;
