import classes from "./projects.module.css";

const Projects =()=>{
    return(
        <div className={classes.container}>
            <div>
                <p>
                    Residently
                </p>
                <h2>
                    UX Case Study: <br/>
                    Designing a modern urban<br/>
                    co-living experience App.
                </h2>
                <div className={classes.box}>

                </div>
                <span>UI Designs • UX Wireframing • User Research</span>
            </div>
            <div>
                <p>
                    Lonne
                </p>
                <h2>
                    Improving the loan application <br/>
                    process on an instant credit app<br/>
                    — UX case study
                </h2>
                <div className={classes.box}>

                </div>
                <span>UI Designs • UX Wireframing • User Research</span>
            </div>
            <div>
                <p>
                    Patricia
                </p>
                <h2>
                Creating a digital journey<br/>
                to paperless living — UX <br/>
                case study
                </h2>
                <div className={classes.box}>

                </div>
                <span>Design System • Product Design</span>
            </div>
            <div>
                <p>
                    Dialect Design System
                </p>
                <h2>
                A massive, flexible <br/>
                component library and <br/>
                design system.
                </h2>
                <div className={classes.box}>

                </div>
                <span>UI Designs • UX Wireframing • User Research</span>
            </div>
        </div>
    );
};

export default Projects;