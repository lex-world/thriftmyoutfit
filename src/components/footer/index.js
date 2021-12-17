import React from "react";
import "./styles/style.css";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer__container">
      <div className="divider"></div>

      <div className="items">
        <div>
          <span>Thrift My Outfit</span>
          <p>
            &copy; 2021 Thrift My Outfit
            <br />
            All Rights Reserved.
          </p>
        </div>

        <div>
          <h3>About Us</h3>
          <ul>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Store Location</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/">Order Tracking</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Useful Links</h3>
          <ul>
            <li>
              <Link to="/">Returns</Link>
            </li>
            <li>
              <Link to="/">Support Policy</Link>
            </li>
            <li>
              <Link to="/">Size guide</Link>
            </li>
            <li>
              <Link to="/">FAQs</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Follow us</h3>
          <ul>
            <li>
              <Link to="/">Facebook</Link>
            </li>
            <li>
              <Link to="/">Twitter</Link>
            </li>
            <li>
              <Link to="/">Instagram</Link>
            </li>
            <li>
              <Link to="/">Youtube</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Subscribe</h3>
          <p className="subscriber__detail">Get E-mail updates about our latest shop<br/> and special offers.</p>
          <input type="email" /><br/>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}
