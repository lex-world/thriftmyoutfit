import "./styles/style.css";

/** @package yarn registry packages */
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

/** @components custom main components */
import ProductCard from "../../components/productCard";

/** @helpers custom json data */
import NewArrivals from "./helpers/NewArrivals.json";
import Urban from "./helpers/Urban.json";
import Shoes from "./helpers/Shoes.json";
import PartyWears from "./helpers/PartyWears.json";
import Bags from "./helpers/Bags.json";

export default function Shop() {
  /** @dev on page load scroll to top */
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="shop__container">
      <Helmet>
        <title>Shop | Thrift My Outfit</title>
      </Helmet>

      {/** @section => categories */}
      <div className="shop__container__categories">
        <Link to="/" className="items urban">
          <div className="blob"></div>
          <h3>Urban</h3>
        </Link>
        <Link to="/" className="items shoes">
          <div className="blob"></div>
          <h3>Shoes</h3>
        </Link>
        <Link to="/" className="items partyWears">
          <div className="blob"></div>
          <h3>Party Wears</h3>
        </Link>
        <Link to="/" className="items bags">
          <div className="blob"></div>
          <h3>Bags</h3>
        </Link>
      </div>

      {/** @section => new arrivals */}
      <div className="shop__container__newArrivals">
        <h2>New Arrivals</h2>

        <div className="items">
          {NewArrivals.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>

        <div className="loadmore">
          <Link to="/">See More</Link>
        </div>
      </div>
      
      {/** @section => urban */}
      <div className="shop__container__urban">
        <h2>Urban</h2>

        <div className="items">
          {Urban.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>

        <div className="loadmore">
          <Link to="/">See More</Link>
        </div>
      </div>
      
      {/** @section => shoes */}
      <div className="shop__container__shoes">
        <h2>Shoes</h2>

        <div className="items">
          {Shoes.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>

        <div className="loadmore">
          <Link to="/">See More</Link>
        </div>
      </div>
      
      {/** @section => partyWears */}
      <div className="shop__container__partyWears">
        <h2>Party Wears</h2>

        <div className="items">
          {PartyWears.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>

        <div className="loadmore">
          <Link to="/">See More</Link>
        </div>
      </div>
      
      {/** @section => bags */}
      <div className="shop__container__bags">
        <h2>Bags</h2>

        <div className="items">
          {Bags.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>

        <div className="loadmore">
          <Link to="/">See More</Link>
        </div>
      </div>
    </div>
  );
}
