import React from 'react';
import './team.style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Team = (props) => {

    return (
        <div class="col-xl-3 col-md-6 mb-4 about-box">
            <div class="card border-0 shadow">
                <img src={props.image} class="card-img-top" alt="Developers" />
                <div class="card-body text-center">
                    <h5 class="card-title mb-0">{props.name}</h5>
                    <div class="card-text text-black-50">{props.role}</div>
                    <a class="about-icon" href={props.linkedin}><FontAwesomeIcon icon={faLinkedin}/></a>
                </div>
            </div>
        </div>
    )
}
export default Team;