import classes from "./projects.module.css";
import Pat from "../../assets/pat.png";
import Lonne from "../../assets/lonne.png";
import Todll from "../../assets/todl.png";
import Splacer from "../../assets/splace.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className={classes.container}>
      <div>
        <Link to="/work">
          <p>Residently</p>
          <br />
          <br />
          <h2>
            UX Case Study: <br />
            Designing a modern urban
            <br />
            co-living experience App.
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
        <Link to="/lonne">
          <p>Lonne</p>
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
            <img src={Lonne} alt="" />
          </div>
          <br />
          <span>UI Designs • UX Wireframing • User Research</span>
        </Link>
      </div>
      <div>
        <Link to="/patricia">
          <p>Patricia</p>
          <br />
          <br />
          <h2>
            Creating a digital journey
            <br />
            to paperless living — UX <br />
            case study
          </h2>
          <br />
          <br />
          <div className={classes.box}>
            <img src={Pat} alt="Patricia" />
          </div>
          <br />
          <span>Design System • Product Design</span>
        </Link>
      </div>
      <div>
        <Link to="/splacer">
          <p>Dialect Design System</p>
          <br />
          <br />
          <h2>
            A massive, flexible <br />
            component library and <br />
            design system.
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
