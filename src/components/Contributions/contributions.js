import classes from "./contibutions.module.css";
import Arrow from "../../assets/arrow up.svg";


const Contributions = () =>{
    return (
        <div className={classes.container}>
            <div className={classes.cont}>
                <h3>CONTRIBUTIONS</h3>
                <p>View Projects
                  <img src={Arrow} alt="Arrow" />
                </p>
            </div>
        </div>
    )
}

export default Contributions;