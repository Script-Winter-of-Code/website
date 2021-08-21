import { React, Component } from 'react';
import './css/style.css'
import Particles from 'react-particles-js';
import { Snow } from './snow'
import {
    registerItems,
    timelineItems,
    GoldSponsors,
    PlatformPartners,
    Sponsors,
    CommunityPartners,
    FAQs,
} from './js/homeData'
import Aos from 'aos';
import 'aos/dist/aos.css'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { width: window.innerWidth, height: window.innerHeight };
    }

    handleResize = (e) => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    };

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
        Aos.init({
            duration: 500,
        });
    }

    componentWillUnmount() {
        window.addEventListener("resize", this.handleResize);
    }


    render() {
        return (
            <>
                <span hidden="true" id="page-name">Home</span>
                {/* Header */}

                <header className="header">
                    {/* <div id="snow"></div> */}
                    <div className="snow"><Particles params={Snow} /></div>
                    <div className="header-content">
                        <h1>Script Winter of Code</h1>
                        {/* <img src="./img/githubD.gif" width="350"> */}
                        <div className="header-logo">
                            <a href="./index.html"><img src={"/img/logo-2.png"} /></a>
                        </div>
                    </div>
                </header>
                {/* body */}
            
            
                <a name="about"></a>
                <section className="body-content about-swoc" id="about">
                    <div className="about-content col-lg-8">
                        <h3>About <span>SWOC</span></h3>
                        <p>
                        Script Winter of Code is an open-source program envisioned by the
                        Script Foundation. It aims to bring students into the world of open
                        source development and see the power of unified problem-solving in
                        real time. The projects that we will host have been carefully
                        hand-picked to invigorate creative thinking and encourage
                        collaboration among all participants.
                        <br />
                        The students will be guided by experienced mentors throughout their
                        journey. They will learn the skills essential in the world of
                        programming, all the while developing a deep appreciation for the
                        world of open-source.
                        </p>
                    </div>
                    <div className="about-vector" data-aos="zoom-out">
                        {/* <img src="./img/about.png" /> */}
                        <img src={"/img/github.gif"} />
                    </div>
                </section>
                <section className="body-content to-apply" id="apply">
                    <h3 style={{ "text-align": "center" }}>Apply</h3>
                    <div className="row">
                        {registerItems.map((item, index) => {
                        return (
                            <div className="col-md-4 diff-col" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                <div className="card1 h-100 to-apply-card">
                                    <h5 className="card-title">{item.cardTitle}</h5>
                                    <p className="card-text">{ item.cardText }</p>
                                    <div className="btn-container">
                                        <a href={item.applyLink} target="_blank"
                                            className={item.applyStatus == "Apply" ? "btn btn-success" : "btn btn-success disabled"}
                                        >{ item.applyStatus }</a>
                                    </div>
                                </div>
                            </div>
                        )
                        })}
                    </div>
                </section>
                {/* timeline */}
                <section className="timeline">
                    <a name="timeline"></a>
                    <div className="timeline-head">
                        <h3>Timeline</h3>
                    </div>
                    <ul>
                        {timelineItems.map((item, index) => {
                        return (
                            <li><div><time>{ item.timelineDate }</time>{ item.timelineText }</div></li>
                        )
                        })}
                    </ul>
                </section>

                <section className="body-content about-swoc overview-section" id="about">
                    <div className="about-content">
                        <h3>Overview</h3>
                        <p>
                        Script Winter Of Code is the 3 month long open source program by
                        Script Foundation India , with the aim to introduce more and more
                        people to the world of Open source. In this program all the selected
                        participants will get a chance to work on various exciting projects
                        under the guidance of experienced Mentors.
                        <br />
                        Participants can select the project based on their interest and tech
                        stack , and can communicate with mentors and project admin to know the
                        project better during the Community bonding Period .
                        <br />
                        </p>
                    </div>
                </section>

                <section className="body-content about-swoc" id="about">
                    <div className="about-content col-lg-8">
                        <h3>Prizes</h3>
                        <h5>Top contributors and even participants with successful contribution get exciting perks and opportunities.</h5>
                    </div>
                    <div className="about-vector">
                        {/* <img src="./img/about.png" /> */}
                        <img src={"/img/trophy2-min.jpg"} />
                    </div>
                </section>

                <section className="body-content about-swoc sponsors-section" id="about">
                    <a name="sponsors"></a>
                    <div className="about-content">
                        <h3 style={{ "text-align": "center", "text-decoration": "underline" }}>Our Sponsors</h3>
                        <br />
                        <br/>
                        <div className="community">
                            <div className="row">

                                <div className="col-md-12">
                                    <h3>Gold Sponsors</h3>
                                    <br />
                                    <div className="community">
                                        <div className="row row-img grid">
                                            {GoldSponsors.map((item, index) => {
                                            return (
                                                <div className="col-4 img-div">
                                                    <a href={item.sponsorLink} target="_blank">
                                                        <img className="sponsor-img" src={item.sponsorImg} />
                                                    </a>
                                                </div>                                                
                                            )
                                            })}
                                        </div>
                                    </div>
                                </div>
                    
                                {/* <div className="col-md-6">
                                    <h3>Platform Partners</h3>
                                    <br />
                                    <div className="community">
                                        <div className="row row-img grid">
                                            {PlatformPartners.map((item, index) => {
                                            return (
                                                <div className="col-12 img-div">
                                                    <a href={item.sponsorLink} target="_blank">
                                                        <img className="sponsor-img" src={item.sponsorImg} />
                                                    </a>
                                                </div>                                                
                                            )
                                            })}
                                        </div>
                                    </div>
                                </div> */}

                            </div>

                            <h3>Sponsors</h3>
                            <div className="row row-img grid mb-4">
                                {Sponsors.map((item, index) => {
                                return (
                                    <div className="col-md-4 img-div">
                                        <a href={item.sponsorLink} target="_blank">
                                            <img className="sponsor-img" src={item.sponsorImg} />
                                        </a>
                                    </div>                                              
                                )
                                })}
                            </div>

                            <h3>Community Partners</h3>
                            <div className="row row-img grid mb-4">
                                {CommunityPartners.map((item, index) => {
                                return (
                                    <div className="col-md-4 img-div">
                                        <a href={item.sponsorLink} target="_blank">
                                            <img className="sponsor-img" src={item.sponsorImg} />
                                        </a>
                                    </div>                                              
                                )
                                })}
                            </div>

                            <div className="btn-container p-4">
                            <br />
                            <a
                                href="https://drive.google.com/file/d/1po-yevUP5dweJiNdvuiEhsi_IyKlOub8/view?usp=sharing"
                                target="_blank"
                                className="btn btn-success btn-lg"
                                >Sponsor Us
                            </a>
                            </div>
                        </div>
                    </div>
                    
                </section>

                <section className="body-content faqs about-content">
                    <h3 className="heading-primary" style={{ "text-align": "center" }}>FAQs</h3>

                    <div className="content">
                        {FAQs.map((item, index) => {
                        return (
                            <div>
                                <input type="checkbox" id={item.questionId} name="q" className="questions" />
                                <div className="plus">+</div>
                                <label for={item.questionId} className="question">
                                    {item.questionText}
                                </label>
                                <div className="answers">
                                    {item.answerText}
                                </div>
                            </div>                                             
                        )
                        })}
                    </div>
                </section>
            </>
         );
    }
}
 
export default Home;