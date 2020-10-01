import React from 'react';
import EventCard from './event-card/event-card.component';
import './events.style.css';
import BookClubImg from '../../assets/events/book_club.jpg';

const OurEvents = () => {
    return (
        <div id="events" className="events-container">
            <h1 className="display-3">Events</h1>
            <p>We host several differnt events and activities throughout the year.</p>
            <div className="container">

      
            <div className="row ">
                <div class="col-sm">
                    <EventCard image={BookClubImg} eventName={"Monthly Book Club"} />
                </div>
                <div class="col-sm">
                    <EventCard image={BookClubImg} eventName={"Monthly Book Club"} />
                </div>
                <div class="col-sm">
                    <EventCard image={BookClubImg} eventName={"Monthly Book Club"} />
                </div>
            </div>
            <div className="row">
                <div class="col-sm">
                    <EventCard image={BookClubImg} eventName={"Monthly Book Club"} />
                </div>
                <div class="col-sm">
                    <EventCard image={BookClubImg} eventName={"Monthly Book Club"} />
                </div>
                <div class="col-sm">
                    <EventCard image={BookClubImg} eventName={"Monthly Book Club"} />
                </div>
                </div>
            </div>
            <br/>
                <br/>
        </div>
    )
}
export default OurEvents;