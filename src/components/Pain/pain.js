import classes from "./pain.module.css";
import Yellow from "../../assets/work/yello.svg";
import Red from "../../assets/work/Red.svg";
import Vectors from "../../assets/work/Vector.svg";
import Drawn from "../../assets/work/draw.svg";

const Pain = () =>{
    return (
        <>
        <div className={classes.pan}>
            <div className={classes.pain}>
                <p className={classes.point}>PAIN POINTS:</p>
                <div className={classes.word}>
                    <div>
                        <img src={Yellow} alt=""/>
                    </div>
                    <p className={classes.words}>Tough to find friends, family member, or other people
                        doing the same hobby to do it together.</p>
                </div>
                <div className={classes.word}>
                    <img src={Yellow} alt=""/>
                    <p className={classes.words}>Balancing several things such as work, relationships,
                        education, etc. Makes it troublesome to sustain a hobby.
                    </p>
                </div>
                <div className={classes.word}>
                    <img src={Yellow} alt=""/>
                    <p className={classes.words}>Not able to provide sufficient time and commitment
                        towards the hobby.</p>
                </div>
                <div className={classes.word}>
                    <img src={Yellow} alt=""/>
                    <p className={classes.words}>It’s hard to keep myself disciplined and motivated to
                        continue the hobby.</p>
                </div>
            </div>
            <div className={classes.solution}>
                <p className={classes.solut}>SOLUTION:</p>
                <div className={classes.word}>
                    <img src={Red} alt=""/>
                    <p className={classes.words}>Building a social group will encourage people, to engage
                        with others sharing similar hobbies and bond with them.
                    </p>
                </div>
                <div className={classes.word}>
                    <img src={Red} alt=""/>
                    <p className={classes.words}>Providing easy hobbies that are relaxing to do will help
                        relieve stress, increase productivity & be more efficient
                    </p>
                </div>
                <div className={classes.word}>
                    <img src={Red} alt=""/>
                    <p className={classes.words}>Minimize people’s wastage of time by presenting them
                        with less time-consuming hobbies
                    </p>
                </div>
                <div className={classes.word}>
                    <img src={Red} alt=""/>
                    <p className={classes.words}>Providing people with hobbies that are enjoyable &
                        entertaining to do. This will also further encourage them to
                        keep maintaining it
                    </p>
                </div>
            </div>
            {/* <img src={Vectors} alt=""/>
            <p className={classes.focus}>“Focus on the solution, <br/>
                not on the problem.” Jim Rohn</p>
            <img src={Drawn} alt=""/> */}
        </div>
        </>
    )
};
export default Pain;

