import classes from "./contributions.module.css";
import Arrow from "../../assets/arrow up.svg";
import Rite from "../../assets/arrow-right.svg";


const Contributions = () =>{
    return (
        <>
            <div className={classes.container}>
                <div className={classes.cont}>
                    <h3>CONTRIBUTIONS</h3>
                    <p>View Projects
                    <img src={Arrow} alt="Arrow" />
                    </p>
                </div>
            </div>
            <div className={classes.horizontal}>
                <div className={classes.slide}>
                    <div className={classes.items}>
                        <h1>Hank
                            myhank.co
                        </h1>
                        <p>
                            Hank helps you find your keys, wallets, phones, <br/>
                            and more with just the push of a button while you <br/>
                            stay organized and look good doing it...<br/>
                            Just Hank it!
                        </p>
                        <a href="#">Open Live Project <img src={Rite} alt=""/></a>
                    </div>
                    <div className={classes.items}>
                        <h1>Hank
                            myhank.co
                        </h1>
                        <p>
                            Hank helps you find your keys, wallets, phones, <br/>
                            and more with just the push of a button while you <br/>
                            stay organized and look good doing it...<br/>
                            Just Hank it!
                        </p>
                        <a href="#">Open Live Project <img src={Rite} alt=""/></a>
                    </div>
                    <div className={classes.items}>
                        <h1>Hank
                            myhank.co
                        </h1>
                        <p>
                            Hank helps you find your keys, wallets, phones, <br/>
                            and more with just the push of a button while you <br/>
                            stay organized and look good doing it...<br/>
                            Just Hank it!
                        </p>
                        <a href="#">Open Live Project <img src={Rite} alt=""/></a>
                    </div>
                    <div className={classes.items}>
                        <h1>Hank
                            myhank.co
                        </h1>
                        <p>
                            Hank helps you find your keys, wallets, phones, <br/>
                            and more with just the push of a button while you <br/>
                            stay organized and look good doing it...<br/>
                            Just Hank it!
                        </p>
                        <a href="#">Open Live Project <img src={Rite} alt=""/></a>
                    </div>
                    <div className={classes.items}>
                        <h1>Hank
                            myhank.co
                        </h1>
                        <p>
                            Hank helps you find your keys, wallets, phones, <br/>
                            and more with just the push of a button while you <br/>
                            stay organized and look good doing it...<br/>
                            Just Hank it!
                        </p>
                        <a href="#">Open Live Project <img src={Rite} alt=""/></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contributions;