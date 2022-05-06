import Rectangle from "../../assets/work/borde.svg";
import classes from "./patricia.module.css";
import Arrow from "../../assets/arrow up.svg";

const Patricia = () => {
    return ( 
        <div className={classes.container}>
            <div className={classes.content}>
        <div className={classes.rig}>
          <p>Splacer</p>
          <h1>
            UX Case Study: <br />
            Designing a modern urban
            <br />
            co-living experience App.
          </h1>
        </div>
        <img src={Rectangle} alt="" />
        <div className={classes.pat}>
            {/* <p>MY ROLE</p>
            <span>
            Product Design <br />
              User Interviews <br />
              Wireframing <br />
              User research
            </span> */}
          {/* <p>
            MY ROLE <br />
            <span>
              Product Design <br />
              User Interviews <br />
              Wireframing <br />
              User research
            </span>
          </p> */}
          <p>
            COMPANY <br />
          </p>
          <p className={classes.part}>
            Patricia Tech
            <img src={Arrow} alt="Arrow" />
          </p>
        </div>
      </div>
            
        </div>
    );
}
 
export default Patricia;