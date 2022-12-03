import React from "react"
import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./style.css"
export default function Workout(){
return(
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><strong>Smart Watch</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-nav ms-auto mb-2 mb-lg-0">
            
          <Nav.Link as={Link} to="/home">News Feed</Nav.Link>
          <Nav.Link as={Link} to="/workout">Workout</Nav.Link>
          <Nav.Link as={Link} to="/notifications">Notifications</Nav.Link>
          <Nav.Link as={Link} to="/settings">Settings</Nav.Link>
          <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
          <Nav.Link as={Link} to="/">Logout</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="body-content">
        <div className="text-container">
        <h3>You can keep a track of time,calories burnt and effectiveness of workout here</h3>
        </div>
    </div>
    <footer id="footer">
      <div>
        © 2022 Copyright: Smart Watch<br></br><img className="footer-img" src = "images/cc.png" alt = "CC Image" />Content on this site is licensed under a Creative Commons Attribution 4.0 International license
       </div>
    </footer>
    </>
    )
}