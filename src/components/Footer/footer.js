import classes from "./footer.module.css";
import Arrow_up from "../../assets/arrow up.svg";
import Facebook from "../../assets/facebook.svg";
import Twitter from "../../assets/twitter.svg";
import Messenger from "../../assets/face.svg";
import Instagram from "../../assets/insta.svg";
import Youtube from "../../assets/tube.svg";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.content}>
                <h3>
                    Let’s work together to
                    <br /> 
                    build awesome products
                </h3>
                <div className={classes.flex}>
                    <div className={classes.dir}>
                        <a
                            href="https://wa.me/+447835762829"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Send a Whatsapp Message
                            <img src={Arrow_up} alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="mailto:omowalefst@gmail.com">
                            Send an Email
                            <img src={Arrow_up} alt="" />
                        </a>
                    </div>
                </div>
                <div className={classes.social}>
                    {/* <div className={classes.social_img}> */}
                        <a href="#" ><img src={Youtube} alt="" /></a>
                        <a href="#" ><img src={Twitter} alt="" /></a>
                        <a href="#" ><img src={Instagram} alt="" /></a>
                        <a href="#" ><img src={Facebook} alt="" /></a>
                        <a href="#" ><img src={Messenger} alt="" /></a>
                    {/* </div> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
