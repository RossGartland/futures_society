import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavbarBrand } from 'react-bootstrap';
import Logo from '../../assets/logo_white_improved.png';
import './nav.style.css';

const MyNav = () => {

    const [colour, setColour] = useState('transparent');

    useEffect(() => {
        let prevScrollpos = window.pageYOffset;
        //Following function hides navbar when scrolling down.
        window.onscroll = function () {
            let currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) { //Compares the current scroll position with the previous.
                document.getElementById("navbar").style.top = "0";
                if (window.pageYOffset > 500) {//If the current window position is greater than 0, the background changes colour.
                    document.getElementById("navbar").style.backgroundColor = "#001622";
                }
                else {
                    document.getElementById("navbar").style.backgroundColor = "transparent";
                }

            } else {
                document.getElementById("navbar").style.top = "-500px";
            }
            prevScrollpos = currentScrollPos;
        }
        return () => {

        }
    }, [])

    return (
        <Navbar collapseOnSelect id="navbar" className="navbar navbar-expand-lg navbar-dark navbar-inverse nav-fill w-100" expand="lg" style={{ background: colour }} >
            <NavbarBrand href="#header">
                <img src={Logo} alt="future society"/>
                </NavbarBrand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => {
                if (colour === 'transparent') {
                    setColour("#001622")
                }
                else {
                    setColour("transparent")
                }
            }}
            />          
            <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className="navbar-nav ml-auto mx-auto">
                    <Nav.Link href="#header">HOME</Nav.Link>
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