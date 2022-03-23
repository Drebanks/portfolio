import classes from "./hero.module.css";
import Banner from "../../assets/banner.svg";

const Hero = () => {
  return (
    <div className={classes.container}>
        <div className={classes.content}>
            <h4>Hey, I’m Ganiu</h4>
            <div className={classes.cross}>
            <span className={classes.first}>
                Shaping ideas
                <br /> into Products.
            </span>
            <h1>
                Building <span>“ Experiences” </span>
                <br />
                for <span>Users</span> through <span>Design.</span>
            </h1>
            <span className={classes.second}>
                Building products for <br />
                Business Success.
            </span>
            </div>
        </div>
      <div className={classes.para}>
        <p>
          I’m a product designer and design enthusiast. I love creating seamless
          and usable experiences for <br />
          the web and beyond. Please feel free to check out some projects I’ve
          been working on. <a href="#">Learn more about me.</a>
        </p>
      </div>
      <div className={classes.ban}>
        <img src={Banner} alt="" />
      </div>
    </div>
  );
};
export default Hero;
