import React from 'react';
import './objectives.style.css';
import RobotMan from '../../assets/robot.png';

const Objectives = () => {
    return (
        <div id="objectives" className="objectives-container">
            <h1 className="display-3">Objectives</h1>
            <ul>
                <li>To have a society that looks to the future.</li>
                <li>To explore predications and possibilities about the future.</li>
                <li>To learn about new technology that is advancing the human race.</li>
                <li>To connect with industry leaders to discover how their companies are having an impact on society.</li>
            </ul>
            {/* <img id="robot-man" src={RobotMan} alt="Robot man" /> */}
        </div>
    )
}
export default Objectives;