import { React, Component } from 'react';
import './css/team.scss'
import Aos from 'aos';
import 'aos/dist/aos.css'

class Team extends Component {
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
            </>
         );
    }
}
 
export default Team;