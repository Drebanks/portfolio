import classes from "./nav.module.css";
import { Link } from "react-router-dom";
import React, {useState, useEffect} from "react";
import Msg from "../../assets/Message.svg";
import { useLocation } from 'react-router-dom';
                                     

const Navigation = () => {

    // const [color, setColor] = useState("white");
    // const location = useLocation();
    // useEffect(() => {
    //     if (location.pathname === "/") {
    //     setColor("white");
    //     } else {
    //     setColor('black')
    //     }
    // }, [location]);
    const [clicked, setClicked] = useState(false);

    const handleClick  = () =>{
        setClicked(!clicked);
    };
    return (
        <nav className={classes.nav}>
            <div className={classes.logo}>
                <Link to="/"><p>GANIU ODEYINKA</p></Link>
            </div>
            <ul className={`${classes.nav_ul} ${clicked ? classes.close : ""}`}>
                <li className={classes.nav_li}>
                    <Link to="/work" className={classes.nav_a}>
                        Works
                    </Link>
                </li>
                <li className={classes.nav_li}>
                    <Link to ="/about"  className={classes.nav_a}>
                        About
                    </Link>
                </li>
                <li className={classes.nav_li}>
                    <Link to ="/article" className={classes.nav_a}>
                        Article
                    </Link>
                </li>
                <li className={classes.nav_li}>
                    <Link to="/say" className={classes.nav_a} >
                        Say Hello!
                    </Link>
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