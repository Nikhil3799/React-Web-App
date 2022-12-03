import React from "react"
import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
export default function Notifications(){
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
        <div className="body-content"><br></br>
        <h1>Notifications</h1>
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">You have received a message from userunknown</h4>
                <h6 className="card-subtitle mb-3 text-muted">1 hour ago</h6>
                  
            </div>
        </div>
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Userunknown has posted something</h4>
                <h6 className="card-subtitle mb-3 text-muted">1 day ago</h6>
                  
            </div>
        </div>
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">It has been a while you have posted something</h4>
                <h6 className="card-subtitle mb-3 text-muted">2 days ago</h6>
                  
            </div>
        </div>
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">You have been invited to this event. Click for more details</h4>
                <h6 className="card-subtitle mb-3 text-muted">3 days ago</h6>
                  
            </div>
        </div>
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Welcome to the app</h4>
                <h6 className="card-subtitle mb-3 text-muted">6 days ago</h6>
                  
            </div>
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