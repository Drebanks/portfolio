import classes from "./header.module.css";
import Navigation from "../Nav/nav";
import React from "react";

const Header = () =>{
    return (
        <header className={classes.header}>
                <Navigation />  
            {/* <div className={classes.contain}>
                <p>Ganiyu Odeyinka</p>
            </div> */}
        </header>
    );
};
export default Header;