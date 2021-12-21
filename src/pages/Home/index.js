import React from "react";
import "./styles/style.css";

/** @components custom components */
import ProductCard from "../../components/productCard";
import { Helmet } from "react-helmet";

/** @helpers static data */
import MostLovedItems from "./helpers/MostLovedItems.json";
import NewArrivals from "./helpers/NewArrivals.json";

export default function Home() {
  /** @dev on page load scroll to top */
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home__container">
      <Helmet>
        <title>Home | Thrift My Outfit | Normalizing Thrifted Cloths</title>
      </Helmet>
      {/** @section landing */}
      <div className="home__container__landing">
        <h1>normalizing thrifted outfits.</h1>

        <p>
          It's normal to utilize thrifted gadgets, vehicles, books, digital
          goods. So, why not clothes?
        </p>
      </div>

      {/** @section most loved items */}
      <div className="home__container__mostLovedItems">
        <div className="title">
          <div className="blob"></div>
          <h2>most loved items</h2>
          <div className="blob"></div>
        </div>

        <div className="items">
          {MostLovedItems.map((item, index) => (
            <ProductCard item={item} key={index} />
          ))}
        </div>
      </div>

      {/** @section New Arrivals */}
      <div className="home__container__newArrivals">
        <div className="title">
          <div className="blob"></div>
          <h2>new arrivals</h2>
          <div className="blob"></div>
        </div>

        <div className="items">
          {NewArrivals.map((item, index) => (
            <ProductCard item={item} key={index} />
          ))}
        </div>
      </div>

      {/** @section how thrift is delivered */}
      <div className="home__container__howThriftIsDelivered">
        <div className="title">
          <div className="blob"></div>
          <h2>How Thrift Items are Delivered</h2>
          <div className="blob"></div>
        </div>
        <div className="items">
          <div>
            <img
              src="https://thriftmyoutfit.s3.ap-south-1.amazonaws.com/ship.gif"
              alt="shipping"
            />
            <h3>Thrifts are shipped to us.</h3>
            <p>
              We ship thrifts to us after quality checks. And, primarily we make
              sure the owner of item has no transdferrable diseases that
              transmits through shared items.
            </p>
          </div>

          <div>
            <img
              src="https://thriftmyoutfit.s3.ap-south-1.amazonaws.com/wash.gif"
              alt="wash"
            />
            <h3>Washed deeply.</h3>
            <p>
              The items are deeply washed according to the type of materials
              used to make the outfits. Also, we make sure there are no stains
              on the thrift items we deliver.
            </p>
          </div>

          <div>
            <img
              src="https://thriftmyoutfit.s3.ap-south-1.amazonaws.com/giphy.gif"
              alt="delivery"
            />
            <h3>Orders are delivered.</h3>
            <p>
              Finally, after we receive the order confirmation, we pack the
              items and ship them to our customers, shipping inside Kathmandu
              Valley is completely out of costs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
