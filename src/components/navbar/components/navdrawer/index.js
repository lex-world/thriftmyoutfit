import * as React from "react";
import "./styles/style.css";

/** @packages yarn registry packages */
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";

const styles = {
  titleStyle: {
    display: "block",
marginBottom: "15px",
    fontWeight: "600",
    fontSize: "1.3em",
    letterSpacing: "6px",
    lineHeight: "1.5"
  },
  listStyle: {
    width: "70vw",
    padding: "20px 30px",
    listStyle: "none",
    fontSize: "1.1em",
    textTransform: "uppercase",
  },
  linkStyle: {
    textDecoration: "none",
    color: "black",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "20px",
  },
  iconStyle: {
    marginRight: "15px",
  },
};

export default function NavDrawer() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => {
    setState(open);
  };

  const List = () => {
    return (
      <ul style={styles.listStyle}>
        <span style={styles.titleStyle}>Thrift My Outfit</span>
        <Divider />
        <li style={{ marginTop: "15px" }}>
          <Link style={styles.linkStyle} to="/">
            <i style={styles.iconStyle} className="ri-home-2-line"></i>{" "}
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link style={styles.linkStyle} to="/">
            <i style={styles.iconStyle} className="ri-store-2-line"></i>
            <span>Shop</span>
          </Link>
        </li>
        <li>
          <Link style={styles.linkStyle} to="/">
            <i style={styles.iconStyle} className="ri-heart-line"></i>
            <span>Liked Items</span>
          </Link>
        </li>
        <li>
          <Link style={styles.linkStyle} to="/">
            <i style={styles.iconStyle} className="ri-key-line"></i>
            <span>Login</span>
          </Link>
        </li>
      </ul>
    );
  };

  return (
    <div className="navDrawer__container">
      <Button onClick={() => toggleDrawer(true)}>
        <i className="ri-menu-line"></i>
      </Button>

      <Drawer anchor={"left"} open={state} onClose={() => toggleDrawer(false)}>
        <List />
      </Drawer>
    </div>
  );
}
