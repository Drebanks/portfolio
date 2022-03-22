import React from "react";
import classes from "./about.module.css";
import Arrow from "../../assets/arrow up.svg";
import Rectangle from "../../assets/work/borde.svg";
import Blue from "../../assets/work/banner.svg";
import Image1 from "../../assets/work/image 2.svg";
import Image2 from "../../assets/work/image 1.svg";
import Pain from "../../components/Pain/pain";
import Board from "../../assets/work/image 275.svg";
import Rite from './image 292.svg';
import Flow from "./image 291.svg";
import Man from "../../assets/work/man1.png";
import Lady from "../../assets/work/lady.png";
import Mann from "../../assets/work/man2.png";
import Girl from "../../assets/work/image9.png";
import Bigg from "../../assets/work/image8.png";


const About = () =>{
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.rig}>
                    <p>Lonne</p>
                    <h1>
                        Improving the loan application<br />
                        process on an instant credit app<br />
                        —  UX case study
                    </h1>
                </div>
                    <img src={Rectangle} alt=""/>
                <div className={classes.pat}>
                    <p>MY ROLE <br/>
                        <span>
                            Product Design <br/>
                            User Interviews <br/>
                            Wireframing <br/>
                            User research
                        </span>
                    </p>
                    <p>COMPANY <br/>
                    </p>
                    <p className={classes.part}>
                        Patricia Tech
                      <img src={Arrow} alt="Arrow" />
                    </p>
                </div>
            </div>
            <div className={classes.bann}>
                <img src={Blue} alt=""/>
            </div>
            <div className={classes.over}>
                <h1>Overview</h1>
                <br/>
                <h1>Background</h1>
                <p>
                    I want you to visualize this, imagine living on your own, yet not having to deal with the hassles of everyday
                    household chores! In other words, co-living brings together the best of both worlds — the warmth and familiarity of
                    a home as well as the convenience of staying at a chic hotel. They actually work out to be more cost-effective as
                    the monthly rent includes maintenance, water, electricity, Wi-Fi, furnishing, laundry, housekeeping, TV, security,
                    CCTV surveillance, and just about everything you need! It’s amazing, It’s co-living.
                    <br/>
                    <br/>

                    The idea is to create a community-centred environment that not only provides privacy in living arrangements but
                    also promotes social contact through community events. It seeks to build a community centred around ‘real
                    socialising’ in a world where social media platforms, such as Instagram are the virtual alternatives for socialising
                    for millennials. The biggest driving force behind the rising popularity of co-living spaces are the young renters
                    moving to new cities for job prospects who are looking to meet and connect with new people.
                </p>
                <br/>
                <span>
                    In Nigeria, the co-living concept is gaining widespread acceptance. Though the concept is novel, it’s here to
                    stay, as Nigeria’s millennial (youth) population currently accounts for about 440 million of her population.
                </span>
                <br/>
                <br/>
                <h1>Product Ideation</h1>
                <br/>
                <p>
                    Building a product that makes it easy for users to gain access to loan services is highly beneficial to a set target
                    market. Most users spend a lot of time on their mobile phones lately. For the purpose of this research, I will be
                    taking **Nigeria** as a case study, a lot of financial institutions do provide loan services to their users, at the same
                    time, a vast majority of these loan providers do not offer terms that are favourable to the users. Some even bore
                    users with a lot of documentations which they sometimes require them to submit physically.
                </p>
                <br/>
                <h1>My Role</h1>
                <br/>
                <p>
                    I was responsible for user research and user experience design. From evaluating the application funnel to
                    conducting user interviews to uncover any potential areas of friction preventing users for completing their loan
                    requests and ultimately proposing solutions to address the issues we uncovered. Although I was the sole designer
                    on the project, I collaborated closely with a product manager and two engineers.
                </p>
                <br/>
                <div className={classes.pic}>
                    <img src={Image1} alt=""/>
                    <img src={Image2} alt=""/>
                </div>
            </div>
            <Pain/>
            <div className={classes.barn}>
                {/* <img src={Blue} alt=""/> */}
                <p className={classes.put}> Project Goal</p>
                <p className={classes.pan}>The main goal is to allow people to be able to get a<br/>
                    room/roommate and also be able to split everyday bills<br/>
                    payment. HappyCo is Creating a culture of co-living and <br/>
                    building a community that shares culture and experience.
                </p>
                <ul className={classes.list}>
                    <li>LESS TIME-CONSUMING</li>
                    <li>ENTERTAINING</li>
                    <li>FUN</li>
                    <li>RELAXING</li>
                    <li>EDUCATIONAL</li>
                    <li>ENGAGING</li>
                    <li>INSPIROING</li>
                    <li>SOCIAL</li>
                    <li>ENJOYABLE</li>
                    <li>EASY</li>
                </ul>
            </div>
            <br/>
            <div className={classes.inter}>
                <h1>User Research</h1>
                <br/>
                <h1>Interviews</h1>
                <br/>
                <p>
                    To get started, I reached out to some users of the Aella Credit mobile app. My goal at this stage was to
                    understand why they were abandoning the credit request halfway as well to discover any other areas of friction
                    that we could improve on.
                    <br/>
                </p>
                <p>
                    Three key takeaways from from the interviews:
                </p>
                <ol className={classes.annual}>
                    <li>Users struggled with understanding the relationship between interest rates and payback amounts.</li>
                    <li>Users had no way of knowing the loan amounts they were eligible for which resulted in a lot of declined loan
                        requests.
                    </li>
                    <li>Amount of information required for profiling users on sign up was a bit overwhelming.</li>
                </ol>
                <br/>
                <p>
                    Digging dipper to also see some of the app reviews on the app store, we will be able to identify some of the
                    problems current users of the application are facing so as to identify opportunities our product can capitalise on.
                    Some of the problems are screenshots below: 
                </p>
                <br />
                <br />
                <div className={classes.dear}>
                    <img src={Rite} alt=""/>
                </div>
            </div>
            <div className={classes.tion}>
                <h1>Ideation</h1>
                <br/>
                <p>
                    At this stage, I did a bit of brainstorming and came up with a few ideas aimed at resolving the issues that were
                    uncovered during my interaction with the users at the interview stage. The top three ideas were:
                </p>
                <ol className={classes.numb}>
                    <li>Restrict loan request amounts to only amounts that a user is eligible for.</li>
                    <li>Provide clarity around the loan amount, repayment amount, interest rate and loan duration, thereby making it
                        easier for users to make an informed decision about their loan.</li>
                    <li>Adding features that existing customers used to have to call marketers or customer success representatives to
                        help them with earlier. This includes:</li>
                        <ul>
                            <li>Clear, Simple, swift onboarding and KYC processes</li>
                            <li>Loan top up application process</li>
                            <li>Loan liqiudation</li>
                            <li>Manual repayment </li>
                            <li>improved registration process</li>
                            <li>Add loan transaction summary</li> 
                            <li>Comprehensive FAQs and support center</li>
                            <li>Ability to add their cards to support automated payments</li>
                        </ul>
                    <li>Make the process as straightforward as possible; remove all unnecessary steps.</li>
                </ol>
            </div>
            <br/>
            <br/>
            <br/>
            <div className={classes.flow}>
                <h1>
                    User Flow
                </h1>
                <br/>
                <p>
                    At this stage, I did a bit of brainstorming and came up with a few ideas aimed at resolving the issues that were
                    uncovered during my interaction with the users at the interview stage. The top three ideas were:
                </p>
                <div>
                    <img src={Flow} alt=""/>
                </div>
            </div>
            <div className={classes.quotes}>
                <h1>Direct Quotes From Users</h1>
                <div className={classes.cant}>
                    <p>
                        Yes I trade crypto and use a crypto app but I am not really happy with it because the app doesn't have a price alert feature so most times I am unable to target a specific price to buy or sell my cryptos.
                    </p>
                    <img src={Man} alt=""/>
                </div>
                <div className={classes.cant}>
                    <p>
                        Yes, I one tried using a crypto app but it was just too complex for me to understand so I gave up and never went back to it.
                    </p>
                    <img src={Lady} alt=""/>
                </div>
                <div className={classes.cant}>
                    <p>
                        Yes I use Patricia app and I am satisfied to a large extent but I'd love if there are more tutorials on how to use the app.
                    </p>
                    <img src={Mann} alt=""/>
                </div>
            </div>
            <div className={classes.user}>
                <h1>User Personas</h1>
                <br/>
                <p className={classes.ana}>
                    We created Madeline June and Femi Ajala, the persona which would guide our design processes.
                </p>
                <br/>
                <br/>
                <div className={classes.person}>
                    <div className={classes.pers}>
                        <div className={classes.june}>
                            <img src={Girl} alt=""/>
                            <br/>
                            <br/>
                            <span className={classes.live}>
                                Madeline June
                            </span><br/>
                            <ul>
                                <li>24</li><br/>
                                <li>Social Medium Influencer</li><br/>
                                <li>Single</li>
                            </ul>
                            <br/>
                            <span className={classes.live}>Interesting</span>
                            <br/>
                            <ul>
                                <li>Personal Growth</li><br/>
                                <li>Connections</li><br/>
                                <li>Beauty</li><br/>
                                <li>Fitness & Wellness</li> 
                            </ul>
                            <br/>
                            <span className={classes.live}>Brands</span>
                            <br/>
                            <ul>
                                <li>Tiktok</li><br/>
                                <li>Apple</li><br/>
                                <li>Kylie Skin</li><br/>
                                <li>Instagram</li>
                            </ul>
                        </div>
                        <div className={classes.behave}>
                            <span className={classes.let}>Behaviour</span>
                            <br/>
                            <p className={classes.ear}>
                                Fitness enthusiast, all about group workouts &
                                aesthetics. Long working hours with some
                                amount of flexibility. Spends her time to pursue
                                a well connected meaningful life, considers how
                                he positively impacts those who surround him in
                                the real & the virtual world.
                            </p>
                            <br/>
                            <span className={classes.let}>Goals</span>
                            <br/>
                            <ul>
                                <li>To live in a clean and friendly  apartment</li><br/>
                                <li>To save money but live in Lagos Island</li><br/>
                                <li>To avoid conflcit with roommates </li>
                            </ul>
                            <br/>
                            <span className={classes.let}>Frustratations</span>
                            <br/>
                            <ul>
                                <li>Dirty common places e.g dirty dishes in the sink</li><br/>
                                <li>Cleaning more that other roommates</li><br/>
                                <li>Cannot effectively track bills & shares expenses</li>
                            </ul>
                            <br/>
                            <span className={classes.let}>Needs</span><br/>
                            <ul>
                                <li>A tool to enable ease of sharing bills payment &
                                    other expenses and facilitate communcation.
                                </li><br/>
                                <li>An easy to use household management app.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.pers}>
                        <div className={classes.june}>
                            <img src={Bigg} alt=""/>
                            <br/>
                            <br/>
                            <span className={classes.live}>
                                Femi Ajala
                            </span>
                            <br/>
                            <ul>
                                <li>30</li><br/>
                                <li>College Student</li><br/>
                                <li>In a Relationship</li>
                            </ul>
                            <br/>
                            <span className={classes.live}>Interesting</span>
                            <ul>
                                <li>Technology</li><br/>
                                <li>Arts & Fashion</li><br/>
                                <li>Beauty</li><br/>
                                <li>Fitness & Wellness</li> 
                            </ul>
                            <br/>
                            <span className={classes.live}>Brands</span><br/>
                            <ul>
                                <li>Tiktok</li><br/>
                                <li>Apple</li><br/>
                                <li>Kylie Skin</li><br/>
                                <li>Instagram</li>
                            </ul>
                        </div>
                        <div className={classes.behave}>
                            <span className={classes.let}>Behaviour</span>
                            <br/>
                            <p className={classes.ear}>
                                Early morning & assignments describes her
                                daily routine. Lives on coffee, instagram is her
                                lifeline, new experiences, adventures, shopping,
                                clubbing & exploring cafes. Extreme but
                                selectively social being. Always looks for
                                mentors
                            </p><br/>
                            <span className={classes.let}>Goals</span>
                            <ul>
                                <li>To live in a clean and friendly  apartment</li><br/>
                                <li>To save money but live in Lagos Island</li><br/>
                                <li>To avoid conflcit with roommates </li>
                            </ul>
                            <br/>
                            <span className={classes.let}>Frustratations</span>
                            <ul>
                                <li>Dirty common places e.g dirty dishes in the sink</li><br/>
                                <li>Cleaning more that other roommates</li><br/>
                                <li>Cannot effectively track bills & shares expenses</li>
                            </ul>
                            <br/>
                            <span className={classes.let}>Needs</span><br/>
                            <ul>
                                <li>A tool to enable ease of sharing bills payment &
                                    other expenses and facilitate communcation.
                                </li><br/>
                                <li>An easy to use household management app.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>



        </div>        
    )
}
export default About;