import React, { useState } from "react"
import { Card, Alert, Nav } from "react-bootstrap"
import { useAuth } from "./AuthContext"
import { Link, useNavigate } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./style.css"

export default function Home() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><strong>Smart Watch</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-nav ms-auto mb-2 mb-lg-0">
            
          <Nav.Link as={Link} to="/workout">Workout</Nav.Link>
          <Nav.Link as={Link} to="/notifications">Notifications</Nav.Link>
          <Nav.Link as={Link} to="/settings">Settings</Nav.Link>
          <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
          <Nav.Link as={Link} to="/">Logout</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Card>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <p>Welcome back <strong>{currentUser.email} </strong>Have a look at what people have been posting about ftness and their experiences</p> 
        </Card.Body>
      </Card>
      <div className="body-content"><br></br>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">User1</h5>
                    <p className="card-subtitle mb-3 text-muted">Posted 5 days ago</p>
                    <img className="card-img-top" src="images\image1.jpeg" alt="Card image cap"></img>
                    <p className="card-text">Exercise has been proved to elevate your mood and lessen stress, anxiety, and depressive symptoms. The areas of the brain that control stress and anxiety undergo alterations as a result. Additionally, it can improve the brain's receptivity to the neurotransmitters serotonin and norepinephrine, which lessen depressive symptoms.
                        Exercise can also boost endorphin production, which is known to assist create happy sensations and lessen the sense of pain.
                        It's interesting that it doesn't matter how hard you work out. It appears that physical activity, regardless of how strenuous, might improve your mood.</p>  
                </div>
            </div><br></br>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">User2</h5>
                    <p className="card-subtitle mb-3 text-muted">Posted 1 day ago</p>
                    <img className="card-img-top" src="images\image2.jpeg" alt="Card image cap"></img>
                    <p className="card-text">It's critical to comprehend the connection between exercise and energy expenditure in order to comprehend how exercise affects weight loss.
                        Your metabolic rate will decrease when on a diet, which may momentarily prevent weight loss. On the other hand, consistent exercise has been demonstrated to raise metabolic rate, which can help you burn more calories and lose weight. Additionally, studies have demonstrated that combining resistance training with aerobic exercise can increase fat reduction and muscle preservation, which is crucial for sustaining weight loss and lean muscle mass</p>  
                </div>
            </div><br></br>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">User3</h5>
                    <p className="card-subtitle mb-3 text-muted">Posted 1 Hour ago</p>
                    <img className="card-img-top" src="images\image3.jpeg" alt="Card image cap"></img>
                    <p className="card-text">For many people, especially those with various medical issues, exercise may be a great energy enhancer. In an earlier study, 36 participants who had previously experienced chronic fatigue reported feeling less tired after 6 weeks of consistent exercise. Not to mention the great advantages of exercise for the heart and lungs. Exercise that is aerobic strengthens the heart and lungs, which has a substantial positive impact on energy levels.

                        Your heart pumps more blood when you move more, giving your working muscles more oxygen. Regular exercise increases the speed and efficiency with which your heart transports oxygen to your blood, enhancing the effectiveness of your muscles.</p>  
                </div>
            </div><br></br>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">User4</h5>
                    <p className="card-subtitle mb-3 text-muted">Posted 3 days ago</p>
                    <img className="card-img-top" src="images\image4.jpeg" alt="Card image cap"></img>
                    <p className="card-text">Exercise helps protect memory and cognitive abilities while enhancing brain function.It does this in many ways. First, it speeds up your heartbeat, which encourages the flow of blood and oxygen to your brain. Additionally, it has the ability to increase hormone synthesis, which promotes the proliferation of brain cells. Additionally, since these illnesses may impact how well your brain functions, the capacity of exercise to avoid chronic disease may also have positive effects on your mental health. Regular exercise is crucial for older persons because oxidative stress, inflammation, and aging all contribute to changes in brain structure and function.</p>  
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