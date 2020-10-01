import React from 'react';
import './event-card.style.css';

const EventCard = (props) => {
    return (
        <div class="card event-card">
            <img class="card-img-top" src={props.image} alt="Card  cap" />
            <div class="card-body">
                <h5 class="card-title">{props.eventName}</h5>
            </div>
        </div>
    )
}
export default EventCard;