import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Review.css";

const ReviewIteam = ({ product, handleRemoveFromCart }) => {
  const { id, name, price, img, quantity } = product;
  return (
    <div className="review-iteam">
      <img src={img} alt="" />
      <div className="review-details">
        <p className="products-title">{name}</p>
        <p>
          Price: <span className="orange-text">{price}</span>
        </p>
        <p>
          Price: <span className="orange-text">{quantity}</span>
        </p>
      </div>
      <button onClick={() => handleRemoveFromCart(id)} className="btn-delete">
        <FontAwesomeIcon className="delete-icon" icon={faTrashAlt} />
      </button>
    </div>
  );
};

export default ReviewIteam;
