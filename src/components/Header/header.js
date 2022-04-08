import classes from "./header.module.css";
import Navigation from "../Nav/nav";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Scroll from "../Scroll/scroll";

const Header = () => {
    const [navBg, setNavBg] = useState("#0F0F11");
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === "/") {
            setNavBg("#0F0F11");
        } else {
            setNavBg("blue");
        }
    }, [location]);
    return (
        <header className={classes.header} style={{ backgroundColor: navBg }}>
            <Navigation />
            <Scroll />
        </header>
    );
};
export default Header;
