import classes from "./about.module.css";
import Gani from "../../assets/gani.jpg";
import Snip from "../../assets/text_snippet.svg";
import World from "../../assets/language.svg";

const About = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.conts}>
          <div className={classes.left}>
            <img src={Gani} alt="Ganiu Odeyinka" />
          </div>
          <div className={classes.right}>
            <h1>Hello,</h1>
            <br/>
            <br/>
            <p>
              I am Ganiu Odeyinka, a product designer; designing products that
              solves user problems.<br/>
              <br/>
              <br/>
              I use my design thinking skills to simplify
              complex brand- user interactions, solve design challenges for
              users and businesses, and build consistent brand design
              experiences that foster trust and elevate meaningful engagements.<br/>
              <br/>
              <br/>
              I build delightfully usable interfaces that enhance customer
              experience across web, apps, and other brand touchpoints, while
              positively impacting business objectives.<br/>
              <br/>
              <br/>
              I have worked with some
              of the most ambitious industry leaders across Fintech, Print,
              Insurance, Real Estate, Talent upskilling, and more. <br/>
              <br/>
              <br/>
              The next set of screens are a journey I’d love to take you on. They showcase
              some of the projects I have worked on.
            </p>
            <br/>
            <br/>
            <div className={classes.but}>
              <button className={classes.view}>
                View resume
                <img src={Snip} alt="Text" />
              </button>
              {/* <button className={classes.view}>
              View LinkedIn
              <img src={World} alt="Text" />
            </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
