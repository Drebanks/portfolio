import classes from "./nav.module.css";
import { Link } from "react-router-dom";
import React, {useState} from "react";
import Msg from "../../assets/Message.svg";
                                     

const Navigation = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick  = () =>{
        setClicked(!clicked);
    };
    return (
        <nav className={classes.nav}>
            <div className={classes.logo}>
                <a href="/"><p>GANIU ODEYINKA</p></a>
            </div>
            <ul className={`${classes.nav_ul} ${clicked ? classes.close : ""}`}>
                <li className={classes.nav_li}>
                    <a href="/work" className={classes.nav_a}>
                        Works
                    </a>
                </li>
                <li className={classes.nav_li}>
                    <a className={classes.nav_a} to="/about">
                        About
                    </a>
                </li>
                <li className={classes.nav_li}>
                    <a className={classes.nav_a} to="/article">
                        Article
                    </a>
                </li>
                <li className={classes.nav_li}>
                    <a className={classes.nav_a} to="/say">
                        Say Hello!
                    </a>
                </li>
                <img src={Msg} alt =" " className={classes.msg}/>
            </ul>
            <div className={classes.bar} onClick={handleClick}>
                <i className={clicked ? "fa fa-bars" : "fas fa-times"}></i>
            </div>

        </nav>

    );
};
export default Navigation;