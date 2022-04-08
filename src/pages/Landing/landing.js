import classes from "./landing.module.css";
// import Header from "../../components/Header/header";
// import Footer from "../../components/Footer/footer";
import Hero from "../../components/Hero/hero";
import React from "react";
import Arrow from "../../assets/arrow up.svg";
import Projects from "../../components/Projects/projects";
import Contributions from "../../components/Contributions/contributions";



const Home = () => {
    return (
        <main className={classes.main}>
            {/* <Header /> */}
            <Hero/>
            <div className={classes.projects}>
                <h3 >FEATURED PROJECTS</h3>
                <p>View Projects
                  <img src={Arrow} alt="Arrow" />
                </p>
            </div>
            <Projects/>
            <Contributions/>
        </main>

    );
};
export default Home;