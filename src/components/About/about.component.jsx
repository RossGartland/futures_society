import React from 'react';
import './about.style.css';
import Team from './Team/Team.component';
import RossImage from '../../assets/about/ross.jpg';
import JamesImage from '../../assets/about/james.png';
import JordanImage from '../../assets/about/jordan.jpg';

const About = () => {
    return (
        <div id="about" className="about-container my-container">
            <h1 className="display-3">About</h1>
            <p className="text-center">A society that focuses on bringing students together who have an interest in the future of human society and want to network with employers as well as other students.</p>
                <div className="meet-the-team">
                    <div className="row">
                    <Team image={RossImage} name={"Ross Gartland"} role={"Chairperson"} linkedin={"https://www.linkedin.com/in/rossgartland/"}/>
                    <Team image={JamesImage} name={"James Gibson"} role={"Secretary"} linkedin={"https://www.linkedin.com/in/james-gibson-1973bb198/"}/>
                    <Team image={JordanImage} name={"Jordan Stevenson"} role={"Treasurer"} linkedin={"https://www.linkedin.com/in/jordan-stevenson-44479b1a0/"}/>
                    </div>
                </div>
        </div>
    ) 
}
export default About;