import React from "react";
import classes from "./work.module.css";
import Arrow from "../../assets/arrow up.svg";
import Rectangle from "../../assets/work/borde.svg";
import Blue from "../../assets/work/banner.svg";
import Image1 from "../../assets/work/image 2.svg";
import Image2 from "../../assets/work/image 1.svg";
import Pain from "../../components/Pain/pain";
import Board from "../../assets/work/image 275.svg";
import Discuss from "../../assets/work/image 274.svg";
import Man from "../../assets/work/man1.png";
import Lady from "../../assets/work/lady.png";
import Mann from "../../assets/work/man2.png";
import Girl from "../../assets/work/image9.png";
import Bigg from "../../assets/work/image8.png";
import Three from "../../assets/work/image66.png";
import Sketch from "../../assets/work/image 267.png";
import One from "../../assets/work/image 268.svg";
import Two from "../../assets/work/image 269.svg";
import There from "../../assets/work/image 270.svg";
import Four from "../../assets/work/image 271.svg";
import Five from "../../assets/work/image 272.svg";
import Six from "../../assets/work/image 273.svg";
import Green from "../../assets/work/Group 5540.svg";
import Purple from "../../assets/work/Group 5541.svg";
import Blur from "../../assets/work/Group 5542.svg";
import Yellow from "../../assets/work/Group 5543.svg";
import Pink from "../../assets/work/Group 5544.svg";


const Work = () => {
    return(
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.rig}>
                    <p>Splacer</p>
                    <h1>UX Case Study: <br/>
                        Designing a modern urban<br/>
                        co-living experience App.
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
                <p>I want you to visualize this, imagine living on your own, yet not having to deal with the hassles of everyday
                    household chores! In other words, co-living brings together the best of both worlds — the warmth and familiarity of
                    a home as well as the convenience of staying at a chic hotel. They actually work out to be more cost-effective as
                    the monthly rent includes maintenance, water, electricity, Wi-Fi, furnishing, laundry, housekeeping, TV, security,
                    CCTV surveillance, and just about everything you need! It’s amazing, It’s co-living.<br/>
                    <br/>
                    The idea is to create a community-centred environment that not only provides privacy in living arrangements but
                    also promotes social contact through community events. It seeks to build a community centred around ‘real
                    socialising’ in a world where social media platforms, such as Instagram are the virtual alternatives for socialising
                    for millennials. The biggest driving force behind the rising popularity of co-living spaces are the young renters
                    moving to new cities for job prospects who are looking to meet and connect with new people.
                </p>
                <br/>
                <br/>
                <blockquote className={classes.block}>
                    <span>In Nigeria, the co-living concept is gaining widespread acceptance. Though the concept is novel, it’s here to<br/>
                        stay, as Nigeria’s millennial (youth) population currently accounts for about 440 million of her population.
                    </span>
                </blockquote>
            </div>
            <div className={classes.pic}>
                <img src={Image1} alt=""/>
                <img src={Image2} alt=""/>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className={classes.role}>
                <h4 className={classes.rol}>My Role</h4>
                <p>I was responsible for user research and user experience design. From evaluating the application funnel to
                    conducting user interviews to uncover any potential areas of friction preventing users for completing their loan
                    requests and ultimately proposing solutions to address the issues we uncovered. Although I was the sole designer
                    on the project, I collaborated closely with a product manager and two engineers.
                </p>
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
            <div className={classes.discover}>
                <h1>UX Research & Discovery</h1>
                <p>The Challenge</p>
                <p className={classes.live}>
                    Make living with roommates a more positive, clean, and transparent experience. We created Happyco to address
                    the pains and gains of sharing a space and to generate more positive interactions between roommates. It was
                    easy for us to empathize with our users because we both had many of these shared experiences. Being located in
                    Barcelona, a city full of young professionals and students living on a budget, we easily identified and acquired
                    users for surveys, interviews, and user testing.
                </p>
                <p>Ideation</p>
                <p className={classes.idea}>
                    After a few days at the drawing board and a million post-its later, we derived our hypothesis and started
                    conducting quantitative and qualitative interviews. One of my favorite UX/UI processes was ideating and brainstorming. It was incredible to see how collaborative my teammates were. It was invigorating to let ideas flow without the fear of judgement or rejection. Every idea played an essential role in forming the next and there was no such thing as a bad idea in this stage. To me that was a beautiful process. I was also very impressed by my ability and confidence to express my ideas and feedback.
                </p>
                <img src={Board} alt=""/>

            </div>
            <div className={classes.hypo}>
                <h4>Hypothesis</h4>
                <p className={classes.hype}>
                    “Most people are motivated to share living  spaces for
                    social and economical reasons, however face conflict
                    regarding communication, cleanliness, and
                    accountability.”
                </p>
            </div>
            <div className={classes.facts}>
                <h2>Interesting Facts:</h2>
                <div className={classes.cast}>
                    <div className={classes.look}>
                        <p>Looking at India, with 34% of the country’s Millennials as a % of total Indian population within the age bracket of 18–35 years, it is THIS demographic group or Indian millennials that already are, and will continue to drive the consumption story across sectors, including real estate.
                            
                        </p>
                    </div>
                    <div className={classes.look}>
                        <p>
                            In the context of residential real estate, 
                            millennials will not only drive but also redefine the manner in which it is consumed due to their inherent need for mobility, 
                            connectivity and tech-enabled living spaces. 
                            Plug it and play with it, 
                            just like flexible office space environments,
                            is where the Gen Y housing needs are headed.
                        </p>
                    </div>
                </div>
                <div className={classes.cast}>
                    <div className={classes.look}>
                        <p>
                            As per recent research, India’s millennial population is expected to grow from 28% of the total population in 2016 to an estimated 42% of the total population by 2025.
                        </p>
                    </div>
                    <div className={classes.look}>
                        <p>
                            Over 50% of people in the age group of 18–35 years are willing to rent co-living spaces and pay up to Rs 15,000 a month in top Indian cities including Delhi NCR, Mumbai and Bengaluru.
                        </p>
                    </div>
                </div>
                <div className={classes.cast}>
                    <div className={classes.look}>
                        <p>
                        Millennial space utilisation patterns show that they typically spend more than nine hours a day in the bedroom and bathroom areas that occupy about 40 % of the total apartment space. Interestingly, the hall, kitchen, and utility areas — that constitute 60% of the apartment space and cost — are utilised for less than three hours daily.
                        </p>
                    </div>
                    <div className={classes.look}>
                        <p>
                        While the concept of community living is far from novel, what draws millennials together in co-living spaces is their lifestyle choices. There are barbeque parties, movie nights, board games, sumptuous brunches, and more to keep the space buzzing with energy. It’s no surprise that the occupancies are as high as 95–100 per cent
                        </p>
                    </div>
                </div>
            </div>
            <div className={classes.analysis}>
                <h1>COMPETITORS ANALYSIS</h1>
                <p className={classes.ana}>
                    We performed benchmarking research to identify our competitors. Our biggest competitors were:
                </p>
                <ul className={classes.ana}>
                    <li>Cluttr</li>
                    <li>RoomMate</li>
                    <li>Flatastic</li>
                    <li>Chorma</li>
                </ul>
                <p className={classes.ana}>
                    We analyzed their key functions, usability, and aesthetics. We realized many of these applications were outdated
                    and had poor usability. There was a need for a more modernized and minimalist service that was easy to use. Our
                    ultimate goal was to organize cleaning in a friendly and diplomatic manner, hence the name Happyco.
                    Additionally, our stakeholders map revealed many potential partnership opportunities with companies such as
                    Badi, Idealista, and other housing applications.
                </p>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h1>User Interviews</h1>
                <br/>
                <p className={classes.ana}>
                     After reviewing our results, we found our target users. We identified users (ages 18–35) who had lived with
                    roommates for over one year. We prepared two surveys (an English and Spanish version) on Survey Monkey. We
                    distributed the surveys across a variety of channels, such as Facebook groups, Slack, WhatsApp, and Instagram.
                    We received over 80 responses in both English and Spanish.
                    <br/>
                    <br/>

                    The purpose of the survey was to learn principle frustrations, motivations, and pre-existing household
                    management systems of our potential users. Our survey findings allowed us to better direct and focus our
                    questions during interviews.
                </p>
                <br/>
                <br/>
                <br/>
                <img src={Discuss} alt=""/>
                <br/>
                <br/>
                <br/>
                <p className={classes.ana}>
                    Many of the responses to Question #4 revealed that majority of people did household chores that were not their
                    responsibility 2–3 times in two weeks. We then conducted qualitative interviews with our potential users. We
                    wanted to understand the users experiences and conceptions of shared living and qualitative methods allowed
                    us to discuss more personal experiences.
                    <br/>
                    <br/>

                    We conducted interviews in both Spanish and English, which widened our perspective and potential user pool. We
                    found many of users shared apartments with a variety of nationalities, which also showed the need for simplistic
                    organization and communication channels.
                </p>
                <br/>
                <h1>Key Discoveries</h1>
                <br/>
                <p className={classes.ana}>
                    Our findings revealed that many of our potential users had conflict about cleaning and organization. We also
                    discovered many shared similar social and economical motivations for sharing a space.
                </p>
                <br/>
                <span className={classes.lite}>Motivations</span>
                <br/>
                <ul className={classes.ana}>
                    <li>
                        People live with friends and strangers because they want to save money while living in central and trendy
                        locations
                    </li>
                    <li>
                        People like the social aspects of sharing spaces and having people to share life with (i.e coming home from
                        work and having someone to talk to or cook with)
                    </li>
                </ul>
                <br/>
                <span  className={classes.lite}>Frustratation</span>
                <br/>
                <ul className={classes.ana}>
                    <li>
                        Lack of cleanliness in common areas (similar to the tragedy of the commons — my social sciences side
                        coming out)
                    </li>
                    <li>
                        Lack of Accountability
                    </li>
                    <li>
                        Miscommunication
                    </li>
                </ul>
                <br/>
                <span  className={classes.lite}>Communication Methods</span>
                <br/>
                <ul className={classes.ana}>
                    <li>
                        WhatsApp was the most common way people communicated with their roommates, organized cleaning, and
                        coordinated schedules
                    </li>
                    <li>
                        One person is usually in charge of rent, bills, and communicating with management and other roommates if
                        there is a problem
                    </li>
                </ul>
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
            <br/>
            <br/>
            <br/>
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
            <div className={classes.map}>
                <h1>User Journey Mapping</h1>
                <br/>
                <p className={classes.ana}>
                    We then created a customer journey map usomg the two personas to conduct a deeper analysis. We segmented
                    our map into three sections: before work, during work, and after work. This system made it easier to understand
                    how our user interacts in different settings and times of the day. We worked with how the user feels through this
                    phase and tried finding opportunities through his thoughts.
                </p>
                <br/>
                <p className={classes.ana}>
                    Well, the user journey speaks for itself. We used it to analyse our product scope phase through the user's point of
                    view. After comprehending all of it, we composed our thoughts and decided that our product needs to based on
                    the 3Cs and highlighting them throughout the product. The 3Cs are mentioned next.
                </p>
                <div className={classes.three}>
                    <img src={Three} alt=""/>
                </div>
                <div className={classes.visual}>
                    <h1>Visual Design</h1>
                    <br/>
                    <h1>Sketches</h1>
                    <br/>
                    <p className={classes.ana}>
                        Sketching an outline of the app was a way to help us visualize it.  is the process where you generate ideas and
                        solutions. 
                    </p>
                    <img src={Sketch} alt=""/>
                    <br/>
                </div>
                <div className={classes.wire}>
                    <h1>Wireframes</h1>
                    <br/>
                    <br/>
                    <p className={classes.ana}>
                        Low-fidelity wireframes provide a simple picture by way of organizing blocks that show space allocated for an
                        image and mock content used to get a rough idea of the different content blocks. We based our wireframes on a
                        user flow map, which helped us be more focused on what the low-fi wireframes we had to do. This was the first
                        time we worked on low-fi wireframes and we struggled to keep it simple!
                    </p>
                    <br/>
                    <br/>
                    <div className={classes.frame}>
                        <img src={One} alt=""/>
                        <img src={Two} alt=""/>
                        <img src={There} alt=""/>
                        <img src={Four} alt=""/>
                        <img src={Five} alt=""/>
                        <img src={Six} alt=""/>
                    </div>
                    
                </div>
                <br/>
                <br/>
                <h1>Color & Typography</h1>
                <br/>
                <br/>
                <p className={classes.ana}>
                    We wanted our app to look happy yet reliable, so we went for blue as our main color. According to Color Theory in
                    Action, blue is often associated with depth and stability. It symbolizes trust, loyalty, wisdom, confidence,
                    intelligence, faith, truth, and heaven. Blue is considered beneficial to the mind and body.
                    <br/>
                    <br/>
                    Regarding typography, we used Inter Typeface, a free and open source font family designed by Rasmus 
                    Andersson. Inter is designed for computer screens, which translates in excellent readability. Because simplicity was
                    the leading mantra; we decided to use just one font family.
                </p>
                <div className={classes.proto}>
                    <img src={Green} alt=""/>
                    <img src={Purple} alt=""/>
                    <img src={Blur} alt=""/>
                    <img src={Yellow} alt=""/>
                    <img src={Pink} alt=""/>
                </div>
                <br/>
                <h1>Prototyping</h1>
                <br/>
                <br/>
                <p className={classes.ana}>
                    With our user flow in mind, we used FIGMA to design our prototype. Our goal was to create a wholesome product
                    that introduces the concept of co-living, while giving the user access to all the functionalities right from exploring,
                    booking to verification, viewing scheduled community events, brand benefits to relocating amongst other facilities
                    or ending his tenure with the brand.
                </p>
                <br/>
                <br/>
                <h1>Onboarding</h1>
                <br/>
                <p className={classes.ana}>
                    The home page was designed and structured in a way that the users get an idea about the concept of Co-living
                    spaces, why’d they go with the brand, the typical assurance and pitch flow. At the same time, it’s also convenient
                    for a repeated visitor to efficiently search for residential spaces right from the first fold.
                </p>
                <br/>
                <h1>Login & Signup</h1>
                <br/>
                <p className={classes.ana}>
                    The home page was designed and structured in a way that the users get an idea about the concept of Co-living
                    spaces, why’d they go with the brand, the typical assurance and pitch flow. At the same time, it’s also convenient
                    for a repeated visitor to efficiently search for residential spaces right from the first fold.
                </p>
                <br/>
                <h1>Overview & Dashboard</h1>
                <br/>
                <p className={classes.ana}>
                    The home page was designed and structured in a way that the users get an idea about the concept of Co-living
                    spaces, why’d they go with the brand, the typical assurance and pitch flow. At the same time, it’s also convenient
                    for a repeated visitor to efficiently search for residential spaces right from the first fold.
                </p>
                <br/>
                <h1>Find a New Crib</h1>
                <br/>
                <p className={classes.ana}>
                    The home page was designed and structured in a way that the users get an idea about the concept of Co-living
                    spaces, why’d they go with the brand, the typical assurance and pitch flow. At the same time, it’s also convenient
                    for a repeated visitor to efficiently search for residential spaces right from the first fold.
                </p>
                <br/>
                <h1>Find a Roomie</h1>
                <br/>
                <p className={classes.ana}>
                    The home page was designed and structured in a way that the users get an idea about the concept of Co-living
                    spaces, why’d they go with the brand, the typical assurance and pitch flow. At the same time, it’s also convenient
                    for a repeated visitor to efficiently search for residential spaces right from the first fold.
                </p>
                <br/>
                <h1>Manage & Pay Bills</h1>
                <br/>
                <p className={classes.ana}>
                    The home page was designed and structured in a way that the users get an idea about the concept of Co-living
                    spaces, why’d they go with the brand, the typical assurance and pitch flow. At the same time, it’s also convenient
                    for a repeated visitor to efficiently search for residential spaces right from the first fold.
                </p>
                <br/>
                <h1>Wallet</h1>
                <br/>
                <p className={classes.ana}>
                    The home page was designed and structured in a way that the users get an idea about the concept of Co-living
                    spaces, why’d they go with the brand, the typical assurance and pitch flow. At the same time, it’s also convenient
                    for a repeated visitor to efficiently search for residential spaces right from the first fold.
                </p>
                <br/>
                <h1>Testing</h1>
                <br/>
                <p className={classes.ana}>
                    Testing revealed that our app was easy to use with a few minor discrepancies. After completing various tasks for
                    our on-boarding, our users had trouble with confirming they had submitted their information. We added a
                    confirmation pop-up so users knew they had successfully completed a task.<br/>
                    <br/>
                    It further revealed that various functions in our chat were not needed. For example, we originally had a payment
                    option in our chat but our users brought up security concerns so we decided to delete this function to ensure
                    credibility.
                </p>
                <h1>Future Improvements</h1>
                <br/>
                <p className={classes.ana}>
                    There is always room for improvement, however it is important to share what you have, recieve feedback, and try
                    again. I anticipate more edits and final touches to our design and in the future we would like to:
                </p>
                    <br />    
                <ul className={classes.ana}>
                    <li>Add a point system in the application for completed tasks</li><br/>
                    <li>Track each housemates progress</li><br/>
                    <li>Add more animations (like a dancing logo)</li><br/>
                    <li>Improve on-boarding experience</li>
                </ul>
                <br/>
                <h1>Key Takeaways</h1>
                <br/>
                <ul className={classes.ana}>
                    <li>Never Forget about the user</li><br/>
                    <li>Keep it clean and functional</li><br/>
                    <li>More is less</li><br/>
                    <li>Collboration is key</li><br/>
                    <li>Creativity has no language barriers</li>
                </ul>
                <br/>
                <h1>Conclusion</h1>
                <br/>
                <p className={classes.ana}>
                    I love the multidisciplinary nature of UX/UI Design. One moment you are conducting market research, the next you
                    are conducting user interviews, and then designing prototypes. It truly allows you to use all sides of your brain and
                    to use human empathy and psychology to create a product that will hopefully make peoples lives easier. The
                    development process of Happyco gave me many insights into the world of UX/UI and I was excited at every
                    stage. Now we just to build our code and maybe enroll in a coding bootcam. Please feel free to provide criticism
                    and feedback!
                </p>
                <br/>
                <br/>
                <br/>
                <span className={classes.spoon}>
                    <p>Test our <a href="#">final prototype</a> on In Vision</p>
                </span>
            </div>
        </div>
    )
}

export default Work;