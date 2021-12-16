import React from "react";
import './styles/style-large.css';

/**
 * @dev yarn registry packages
 */
import { Link } from "react-router-dom";

export default function NavbarLarge() {
  return (
    <div className="navbarLarge__container">
      <ul className="navbarLarge__container__links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
      <span className="navbarLarge__container__logo">Thrift My Outfit</span>
      <ul className="navbarLarge__container__utilities">
        <li>
          <button>
            <i className="ri-search-line"></i>
          </button>
        </li>
        <li>
          <Link to="/">
            <i className="ri-heart-line"></i>
          </Link>
        </li>
        <li>
          <Link to="/">
            <i className="ri-shopping-bag-3-line"></i>
          </Link>
        </li>
        <li>
          <Link to="/">Log in</Link>
        </li>
      </ul>
    </div>
  );
}
