import classes from "./nav.module.css";
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Msg from "../../assets/Message.svg";
import { useLocation } from "react-router-dom";
// import { ReactComponent as CloseMenu } from "../../assets/x.svg";
// import { ReactComponent as MenuIcon } from "../../assets/menu.svg";

const Navigation = () => {
  const [clicked, setClicked] = useState(true);
  const closeMobileMenu = () => setClicked(false);

  // const handleClick = () => {
  //   setClicked(!clicked);
  // };
  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <NavLink to="/">
          <p>GANIU ODEYINKA</p>
        </NavLink>
      </div>
      <ul className={`${classes.nav_ul} ${clicked ? classes.close : ""}`}>
        <li className={classes.nav_li} onClick={closeMobileMenu}>
          <NavLink
            className={classes.nav_a}
            to="/work"
            activeClassName="active"
          >
            Works
          </NavLink>
        </li>
        <li className={classes.nav_li} onClick={closeMobileMenu}>
          <NavLink
            className={classes.nav_a}
            to="/about"
            activeClassName="active"
          >
            About
          </NavLink>
        </li>
        <li className={classes.nav_li} onClick={closeMobileMenu}>
          <NavLink
            className={classes.nav_a}
            to="/article"
            activeClassName="active"
          >
            Article
          </NavLink>
        </li>
        <li className={classes.nav_li} onClick={closeMobileMenu}>
          <NavLink className={classes.nav_a} to="/say" activeClassName="active">
            Say Hello!
          </NavLink>
        </li>
        <img src={Msg} alt="" className={classes.msg} />
      </ul>

      <div className={classes.bar} onClick={()=>setClicked(!clicked)}>
        <i className={clicked ? "fa fa-bars" : "fas fa-times"}></i>
      </div>
    </nav>
  );
};
export default Navigation;
