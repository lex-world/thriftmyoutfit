import React from "react";

/**
 * @dev yarn registry packages
 */
import { Route, Routes } from "react-router-dom";

/**
 * @pages custom pages
 */
import UnderConstruction from "./pages/underconstruction";

export default function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<UnderConstruction/>} />
      </Routes>
    </div>
  );
}
