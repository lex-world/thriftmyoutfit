import React from "react";

/**
 * @dev yarn registry packages
 */
import {  Routes } from "react-router-dom";//test
// import { Route, Routes } from "react-router-dom";

/**
 * @pages custom pages
 */
// import UnderConstruction from "./pages/underconstruction";

/**
 * @components custom components
 */
import Topbar from "./components/topbar";
import NavbarLarge from "./components/navbar/index-large";
import NavbarSmall from "./components/navbar/index-small";

export default function App() {
  const windowWidth = window.innerWidth;

  return (
    <div>
      <Topbar />

      {windowWidth > 1200 ? <NavbarLarge /> : <NavbarSmall />}

      <Routes>
        {/* <Route exact path="/" element={<UnderConstruction/>} /> */}
      </Routes>
    </div>
  );
}
