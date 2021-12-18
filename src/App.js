import React from "react";

/**
 * @dev yarn registry packages
 */
import { Route, Routes } from "react-router-dom";

/**
 * @pages custom pages
 */
import Home from "./pages/Home";

/**
 * @components custom components
 */
import Topbar from "./components/topbar";
import NavbarLarge from "./components/navbar/index-large";
import NavbarSmall from "./components/navbar/index-small";
import Footer from "./components/footer";

export default function App() {
  const windowWidth = window.innerWidth;

  return (
    <div className="app">
      <div className="fixedTopbar">
        <Topbar />

        {windowWidth > 1200 ? <NavbarLarge /> : <NavbarSmall />}
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
}
