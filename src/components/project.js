import { React, Component } from 'react';
import './css/projects_new.scss'
import { projectsDataLatest } from './js/2021projects';
import { projectsDataPrevOne } from './js/2020projects';
import Particles from 'react-particles-js';
import { Snow } from './snow'
import Aos from 'aos';
import 'aos/dist/aos.css'


class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
            projectList: projectsDataLatest,
            randomColor: ["#fff"],
            activeStack: "",
            scrollStamp: 0,
            modalDisplay: "none",
            bodyOverflow: "initial",
            modalData: projectsDataLatest[0],
        };
    }

    handleResize = (e) => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    };

    handleScroll = (e) => {
        this.setState({scrollStamp: document.documentElement.scrollTop})
    };

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
        Aos.init({
            duration: 500,
        });
        document.querySelector(".main-nav").classList.add("nav-scrolled");
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.addEventListener("resize", this.handleResize);
    }


    render() {
        return (
            <>
                <span hidden="true" id="page-name">Projects</span>
                {/* Header */}

                <header className="proj-header">
                    {/* <div className="snow"><Particles params={Snow} /></div> */}
                    <div className="p-header-box">
                        <div className="p-header row">
                            <div className="p-header-content">
                                <h1>2021 Projects</h1>
                                <p className="header-paragraph">Script Winter of Code aims to bring students into the world of open source development and see the power of unified problem-solving in real time. The projects that we will host have been carefully hand-picked to invigorate creative thinking and encourage collaboration among all participants.</p>
                                <p>The students will learn the skills essential in the world of programming, all the while developing a deep appreciation for the world of open-source.</p>
                            </div>
                            <div className="p-header-vector">
                                <div className="p-vector">
                                    <a href="./index.html"><img src={"/img/p-4.svg"} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="p-snow">
                        <img src={"/img/snow.svg"} alt="snow"></img>
                    </div> */}
                </header>
                {/* body */}
    
                {/* project-modal */}
                <div className="p-modal-container" style={{ "display": this.state.modalDisplay }}>
                    <div className="p-modal">
                        <div className="md-card">
                            <div className="md-card-left md-card-side">
                                <h3 className="md-card-left-title">Technologies</h3>
                                <ul className="md-card-left-container">
                                    {this.state.modalData.TechStack.map((item, index) => {
                                    return (
                                        <li>{item}</li>
                                    )
                                    })}
                                </ul>
                                <div className="md-card-left-divider"></div>
                                <h3 className="md-card-left-title">{ this.state.modalData.Owner } (Owner)</h3>
                                <ul className="md-card-left-owner">
                                    <li><a href={this.state.modalData.github} target="_blank"><i className="fa fa-github"></i></a></li>
                                    <li><a href={this.state.modalData.linkedin} target="_blank"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                            <div className="md-card-right md-card-side">
                                <div className="md-card-right-title">
                                    <h2>{ this.state.modalData.Name }</h2>
                                    <button type="button" onClick={() => {
                                        this.setState({ modalDisplay: "none" });
                                        document.body.style.overflow = "initial";
                                    }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172" style={{ "fill": "rgba(0, 0, 0, 0.87)" }}>
                                            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ "mix-blend-mode": "normal" }}>
                                                <path d="M0,172v-172h172v172z" fill="none"></path>
                                                <g fill="rgba(0, 0, 0, 0.87)">
                                                    <path d="M40.90039,30.76628l-10.13411,10.13411l45.09961,45.09961l-45.09961,45.09961l10.13411,10.13411l45.09961,-45.09961l45.09961,45.09961l10.13411,-10.13411l-45.09961,-45.09961l45.09961,-45.09961l-10.13411,-10.13411l-45.09961,45.09961z"></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </button>
                                </div>
                                
                                <p className="md-card-right-desc">{ this.state.modalData.Description }</p>
                                <div className="md-card-right-visit-proj">
                                    <a href={this.state.modalData.Repo} target="_blank">
                                        See project <i className="fa fa-angle-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>                
                </div>
                
                {/* projects  */}

                <section className="proj-body">
                    <a name="projs"></a>
                    <div className={this.state.scrollStamp > 690 ? "p-search-section search-scrolled" : "p-search-section" }>
                        <div className="p-search">
                            <div className="p-search-input">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 172 172" style={{ "fill":"rgba(0, 0, 0, 0.87)"}}>
                                    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ "mix-blend-mode": "normal"}}>
                                    <path d="M0,172v-172h172v172z" fill="none"></path>
                                        <g style={{ "fill": "#fff"}}>
                                            <path d="M64.5,14.33333c-27.6214,0 -50.16667,22.54527 -50.16667,50.16667c0,27.6214 22.54527,50.16667 50.16667,50.16667c12.52732,0 23.97256,-4.67249 32.7819,-12.31771l3.05143,3.05143v9.26628l40.03256,40.03256c3.95599,3.95599 10.37733,3.956 14.33333,0c3.956,-3.956 3.956,-10.37733 0,-14.33333l-40.03256,-40.03256h-9.26628l-3.05143,-3.05143c7.64521,-8.80934 12.31771,-20.25458 12.31771,-32.7819c0,-27.6214 -22.54527,-50.16667 -50.16667,-50.16667zM64.5,28.66667c19.87509,0 35.83333,15.95824 35.83333,35.83333c0,19.87509 -15.95825,35.83333 -35.83333,35.83333c-19.87509,0 -35.83333,-15.95825 -35.83333,-35.83333c0,-19.87509 15.95824,-35.83333 35.83333,-35.83333z"></path>
                                        </g>
                                    </g>
                                </svg>
                                <input type="text" placeholder="Search for a project or technology" onChange={(event) => {
                                    this.setState({ activeStack: event.target.value })
                                }} />
                            </div>
                            <div className="p-prev-projs">
                                <button className="p-projs2021" type="button" onClick={() => {
                                        this.setState({ projectList: projectsDataLatest, activeStack: "" })
                                        window.location.href = "#projs"
                                    }}>
                                    2021 Projects
                                    {/* <i className="fa fa-angle-right"></i> */}
                                </button>
                                <button className="p-projs2020" type="button" onClick={() => {
                                        this.setState({ projectList: projectsDataPrevOne, activeStack: "" })
                                        window.location.href = "#projs"
                                    }}>
                                    2020 Projects
                                    {/* <i className="fa fa-angle-right"></i> */}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={this.state.scrollStamp > 690 && "search-substitute"}></div>
                    <div className="p-cards">
                        <div className="p-grid">
                            {this.state.projectList.filter(proj => {
                                if (this.state.activeStack == "") {
                                    return proj
                                } else if (proj.Name.toLowerCase().includes(this.state.activeStack.toLowerCase())) {
                                    return proj
                                } else if (proj.TechStack.toString().toLowerCase().includes(this.state.activeStack.toLowerCase())) {
                                    return proj
                                }
                            }).map((item, index) => {
                            let randomColorIndex = Math.floor(Math.random() * this.state.randomColor.length);
                            
                            return (
                            <div className="p-project" key={index}>
                                <div className="p-project-info">
                                    <div className="p-project-name"><a href={item.Repo} target="_blank" style={{"color": this.state.randomColor[randomColorIndex]}}>{ item.Name }</a></div>
                                    <div className="p-project-desc">{ item.Description.length > 120 ? item.Description.substring(0, 120) + "..." : item.Description}</div>
                                </div>
                                <div className="p-project-labels-container">
                                    {item.TechStack.map((stackItem, stackIndex) => {
                                        return (<span className="p-project-label" onClick={() => {this.setState({ activeStack: stackItem })}}>{stackItem}</span>)
                                    })}    
                                </div>
                                <div className="p-modal-link">
                                        <button onClick={() => {
                                            this.setState({ modalDisplay: "flex" });
                                            document.body.style.overflow = "hidden";
                                            this.setState({ modalData: item });
                                        }}>
                                        See More<i className="fa fa-angle-right"></i>
                                    </button>
                                </div>
                            </div>
                            )
                            })}
                        </div>
                    </div>
                </section>
                <div className="p-bottom-bar"></div>
            </>
         );
    }
}
 
export default Project;