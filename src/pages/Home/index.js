import React from "react";
import "./styles/style.css";

/** @components custom components */
import ProductCard from "../../components/productCard";
import { Helmet } from "react-helmet";

export default function Home() {
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
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}
