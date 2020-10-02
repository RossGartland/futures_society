import React from 'react';
import './join.style.css';

const Join = () => {
    return (
        <div id="join" className="join-container my-container">
            <h1 className="display-3">Join</h1>
            <p className="text-center">To join our society, click on the following link you must be a student at Ulster University.</p>
            <a className="sub_a" href="https://www.uusu.org/organisation/21214/" target="_blank" rel="noopener noreferrer">https://www.uusu.org/organisation/21214/</a>
            <p>To find out if our society is right for you, give us an email and we would be happy to discuss this further.</p>
            <p>If you are an employer interested in giving a talk at our society, please send an email to the following address.</p>
            <a className="sub_a" href="mailto:futuresocietyuu@gmail.com">futuresocietyuu@gmail.com</a>
        </div>
    )
}
export default Join;