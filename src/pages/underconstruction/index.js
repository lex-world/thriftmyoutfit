import React from "react";
import { Helmet } from "react-helmet";
import './style.css'

export default function UnderConstruction() {
  return (
    <div className="underConstruction__container">
      <Helmet>
        <title>Thrift My Outfit | Keep Calm and Keep Thrifting</title>
      </Helmet>
        <h1 className="title">Thrift My Outfit</h1>
        <video autoPlay loop muted>
          <source
            src="https://thriftmyoutfit.s3.ap-south-1.amazonaws.com/under+construction.mp4"
            type="video/mp4"
          />
          Your browser does not support the video.
        </video>

      <h1>
        Site Under Construction, Thank you for your patience. ❤️
      </h1>
      <div className="footer">&copy; Copyright Thrift My Outfit 2021. All Rights Reserved.</div>
    </div>
  );
}
