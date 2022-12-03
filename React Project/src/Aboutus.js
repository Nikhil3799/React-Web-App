import React from "react"
import { Nav } from "react-bootstrap"
import { Link} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
export default function AboutUs(){
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
        <h1>About Us</h1><br></br>
        <p>Smart watch is a company focused on providing services to eveyrone. 

            As a company, we want to change the way services is done in regualr style.
            
            In 2022, the users were dealing with problem to track their workouts and realized an app can solve this problem. Then we decided to create smart watch application to help other audience struggling with their diet. This rose to evolution of smart watch.
            We believe in our company values and your work culture. Each year, we include community outreach or any applicable projects that may appeal to your target audience.
            
            Smart watch is trusted by number of peopel and has five-star reviews. 
        </p>
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