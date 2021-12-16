import React from "react";
import "././styles/style.css";

import { Link } from "react-router-dom";

export default function ProductCard() {
  return (
    <div className="productCard__container">
      <Link to="/success">
      <img
        src="https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1972&q=80"
        alt="tshirt"
      />
      </Link>

      <div className="productCard__container__details">
        <h3 className="productName"><Link to="/">Adidas white hoodie</Link></h3>

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
