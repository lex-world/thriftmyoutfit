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
import Shop from "./pages/Shop";
import Authentication from "./pages/Authentication";

export default function App() {
  const windowWidth = window.innerWidth;

  /** @dev on page load scroll to top */
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app">
      <div className="fixedTopbar">
        <Topbar />

        {windowWidth > 1200 ? <NavbarLarge /> : <NavbarSmall />}
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/authentication" element={<Authentication />} />
      </Routes>

      <Footer />
    </div>
  );
}
