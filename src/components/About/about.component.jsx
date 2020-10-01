import React from 'react';
import './about.style.css';
import Team from './Team/Team.component';
import RossImage from '../../assets/self.jpg';


const About = () => {
    return (
        <div id="about" className="about-container">
            <h1 className="display-3">About</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className="meet-the-team">
                    <div className="row">
                    <Team image={RossImage} name={"Ross Gartland"} role={"Chairperson"}/>
                    <Team image={RossImage} name={"James Gibson"} role={"Secretary"}/>
                    <Team image={RossImage} name={"Jordan Stevenson"} role={"Treasurer"}/>
                    </div>
                </div>
        </div>
    )
}
export default About;