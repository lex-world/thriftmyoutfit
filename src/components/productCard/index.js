import React from "react";
import "./styles/style.css";

import { Link } from "react-router-dom";

import HeartButton from "./components/heartButton";

export default function ProductCard() {
  return (
    <div className="productCard__container">
      <div className="imageContainer">
      <Link to="/success">
      <img
        src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        alt="heel"
      />
      </Link>
      <HeartButton/>
      </div>

      <div className="productCard__container__details">
        <h3 className="productName"><Link to="/">Floral High Pencil Heel</Link></h3>

        <div className="productPrice">
          <span>NRs. 500</span>
          <span className="discounted">799</span>
        </div>

        <div className="actionButtons">
          <button className="cartBtn">
            <span>Add to Cart</span> <i className="ri-shopping-cart-2-line"></i>
          </button>
          <button className="saveBtn">
            <i className="ri-bookmark-line"></i> <span>Save</span>
          </button>
        </div>
      </div>
    </div>
  );
}
