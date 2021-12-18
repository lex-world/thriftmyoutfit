import React from "react";
import "./styles/style-small.css";

/** @package yarn registry packages */
import { Link } from "react-router-dom";

/** @components custom components */
import NavDrawer from "./components/navdrawer";

export default function NavbarSmall() {
  return (
    <div className="navbarSmall__container">
      <NavDrawer />

      <span className="navbarSmall__container__logo">Thrift My Outfit</span>

      <ul className="navbarSmall__container__utilities">
        <li>
          <button>
            <i className="ri-search-line"></i>
          </button>
        </li>
        <li>
          <Link to="/">
            <i className="ri-shopping-bag-3-line"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
}
