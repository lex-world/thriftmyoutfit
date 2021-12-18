import React from "react";
import "./styles/style.css";

import { Link } from "react-router-dom";

import HeartButton from "./components/heartButton";

export default function ProductCard(item) {
  const { image, productName, productPrice, discount, isHearted } = item?.item;
  return (
    <div className="productCard__container">
      <div className="imageContainer">
        <Link to="/success">
          <img src={image} alt={productName} />
        </Link>
        <HeartButton isHearted={isHearted}/>
      </div>

      <div className="productCard__container__details">
        <h3 className="productName">
          <Link to="/">{productName}</Link>
        </h3>

        <div className="productPrice">
          <span>NRs. {productPrice}</span>
          <span className="discounted">{discount?.status === true && discount?.productPrice}</span>
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
