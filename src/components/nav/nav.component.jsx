import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './nav.style.css';

const MyNav = () => {

    const [colour, setColour] = useState('transparent');

    return (
            <Navbar collapseOnSelect className="navbar navbar-expand-lg navbar-light navbar-inverse nav-fill w-100" expand="lg" style={{ background: colour }} >
                <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => { 
                    if(colour === 'transparent') {
                        setColour("#282c34")
                    }
                    else {
                        setColour("transparent")
                    }}}
                     />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="navbar-nav ml-auto mx-auto">
                        <Nav.Link href="">HOME</Nav.Link>
                        <Nav.Link href="#about">ABOUT</Nav.Link>
                        <Nav.Link href="#objectives">OBJECTIVES</Nav.Link>
                        <Nav.Link href="#benefits">BENEFITS</Nav.Link>
                        <Nav.Link href="#events">EVENTS</Nav.Link>
                        <Nav.Link href="#join">JOIN</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    )
}
export default MyNav;