import classes from "./todlr.module.css";
import React from "react";
import { Link } from "react-router-dom";
import Madam from "../../assets/todlr/madam.jpg";
import Act from "../../assets/todlr/project.svg";
import Rite from "../Lonne/image 292.svg";
import {Animated} from "react-animated-css";
// import 'animate.css/animate.css';
const Todlr = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.rig}>
          <p>Todlr</p>
          <h1>
            The simplest way to invest <br />
            collectively invest in a child’s
            <br />
            financial future.
          </h1>
        </div>
        {/* <img src={Rectangle} alt="" /> */}
        <div className={classes.pat}>
          <p>MY ROLE</p>
          <span className={classes.side}>
            Product Design <br />
            User Interviews <br />
            Wireframing <br />
            User research
          </span>
          <br />
          <br />
          <br />
          <p>
            COMPANY <br />
          </p>
          <p className={classes.part}>
            <Link to="todlr.com">todlr.com</Link>
            {/* <img src={Arrow} alt="Arrow" /> */}
          </p>
        </div>
      </div>
      <div className={classes.grond}>
        <h1>Background Story</h1>
        <p>
          One of the greatest gifts you can give the children in your life is
          financial freedom. If you invest in your kids now, you should be able
          to generate savings and income over the next few years to kickstart
          their progression to adulthood with enough assets to chase their
          dreams. But investing in your child’s future isn’t just about saving
          pennies and squirreling away a bunch of stock shares in big companies.
          <br />
          <br />
          You’ve also got to teach your child how to manage those assets
          responsibly. Otherwise, you may just end up watching an over-excited
          18-year-old toss away thousands of dollars on the latest
          get-rich-quick scheme. That’s why you should be thinking now about how
          to teach your child the main components of financial literacy, the
          basics of investing, and the tools they can use to manage money
          sensibly.
          <br />
          <br />
          Teaching financial literacy to kids is very important for building a
          bright financial future. And unfortunately, many school systems do not
          adequately address the topic. The responsibility of teaching personal
          finance often falls on loved ones. And while investing is just one
          part of overall financial literacy, it’s a very important concept to
          explore.
        </p>
        <br />
        <br />
        <div className={classes.bak}>
          <img src={Madam} alt="Madam" />
        </div>
        <div>
          <h1>Product Ideation</h1>
          <br />
          <p>
            For most families, setting up an account with Todlr will be the
            simplest way to start investing for children. The Todlr platform
            makes it easy to build a balanced portfolio of stocks, bonds, and
            even cryptocurrency — while offering the flexibility of a UGMA
            account.
            <br />
            <br />
            Todlr is on a mission to ensure that the next generation of children
            is financially literate, We want them to have the resources to
            pursue their dreams and the skills to manage their wealth. For us,
            the play is more about building a global ecosystem of products for
            children, parents, and families. It is not just about investing. We
            are trying to seize the entire global community of parents who,
            through their primal instincts, want their children to have it
            better in life.
          </p>
        </div>
        <div className={classes.gooaal}>
          <h1>The Goal</h1>
          <p>
            Todlr is on a mission to enrich future generations with financial
            freedom. We are transforming financial gifting, making it personal,
            purposeful, and timeless. The Todlr app offers parents, family and
            friends a dedicated space to collectively invest in the kids most
            important in their lives.
          </p>
        </div>
        <div className={classes.roeel}>
          <h1>My Role & Approach</h1>
          <p>
            This was a project to solve issues around relocation and settlement
            for people relocating to Canada. The team was primarily made up of
            Product Designers, Business Development and Engineering. I led the
            design of the product from start to finish and created the prototype
            for the mobile application.
          </p>
          <br />
          <div className={classes.prrot}>
            <img src={Act} alt="" />
          </div>
        </div>
        <div className={classes.userr}>
          <h1>User Research</h1>
          <h2>Interviews</h2>
          <p>
            To get started, I reached out to some users of the Aella Credit
            mobile app. My goal at this stage was to understand why they were
            abandoning the credit request halfway as well to discover any other
            areas of friction that we could improve on.
          </p>
          <p>Three key takeaways from the interview:</p>
          <ul className={classes.listed}>
            <li>
              Users struggled with understanding the relationship between
              interest rates and payback amounts.
            </li>
            <li>
              Users had no way of knowing the loan amounts they were eligible
              for which resulted in a lot of declined loan requests.
            </li>
            <li>
              Amount of information required for profiling users on sign up was
              a bit overwhelming.
            </li>
          </ul>
          <p>
            Digging dipper to also see some of the app reviews on the app store,
            we will be able to identify some of the problems current users of
            the application are facing so as to identify opportunities our
            product can capitalise on. Some of the problems are screenshots
            below:
          </p>
        </div>
        <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
          <div className={classes.dear}>
            <img src={Rite} alt="" />
          </div>
        </Animated>
      </div>
    </div>
  );
};

export default Todlr;
