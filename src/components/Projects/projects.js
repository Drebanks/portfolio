import classes from "./projects.module.css";
import Safe from "../../assets/Group.jpg";
import Pat from "../../assets/third.jpg";
import Todll from "../../assets/first.jpg";
import Splacer from "../../assets/four.jpg";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className={classes.container}>
      <div>
        <Link to="/work">
          <p>Todlr</p>
          <br />
          <br />
          <h2>
            The Simplest way to invest<br />
            collectively invest in a child's
            <br />
            financial future.
          </h2>
          <br />
          <br />
          <div className={classes.box}>
            <img src={Todll} alt="" />
          </div>
          {/* <br /> */}
          <span>UI Designs • UX Wireframing • User Research</span>
        </Link>
      </div>
      <div>
        <Link to="/patricia">
          <p>Patricia</p>
          <br />
          <br />
          <h2>
            13% increase in customer<br />
            satisfaction through
            <br />customer-centric approaches
          </h2>
          <br />
          <br />
          <div className={classes.box}>
            <img src={Pat} alt="" />
          </div>
          <br />
          <span>UI Designs • UX Wireframing • User Research</span>
        </Link>
      </div>
      <div>
        <Link to="/patricia">
          <p>SafeHouse</p>
          <br />
          <br />
          <h2>
            UX case study:
            <br />
            Designing a modern urban<br />
            co-living experience App
          </h2>
          <br />
          <br />
          <div className={classes.box}>
            <img src={Safe} alt="safe" />
          </div>
          <br />
          <span>Design System • Product Design</span>
        </Link>
      </div>
      <div>
        <Link to="/lonne">
          <p>Loone</p>
          <br />
          <br />
          <h2>
            Improving the loan application <br />
            process on an instant credit app
            <br />— UX case study
          </h2>
          <br />
          <br />
          <div className={classes.box}>
            <img src={Splacer} alt="Dialect" />
          </div>
          <br />
          <span>UI Designs • UX Wireframing • User Research</span>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
