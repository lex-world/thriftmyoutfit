import "./styles/style.css";

/** @package yarn registry packages */
import React from "react";
import { Helmet } from "react-helmet";

/** @components custom main components */
import Login from "./Login";
import Register from "./Register";

export default function Authentication() {
  const [activePage, setActivePage] = React.useState("login");

  return (
    <div className="authentication__container">
      <Helmet>
        <title>
          Authentication | Thrift My Outfit | Normalizing Thrifted Cloths
        </title>
      </Helmet>

      {activePage === "login" ? (
        <Login setActivePage={setActivePage} />
      ) : (
        <Register setActivePage={setActivePage} />
      )}
    </div>
  );
}
