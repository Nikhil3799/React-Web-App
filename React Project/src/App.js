import React from "react"
import Signup from "./Signup"
import Signin from "./Signin"
import Home from "./Home"
import { AuthProvider } from "./AuthContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Notifications from "./Notifications"
import AboutUs from "./Aboutus"
import Settings from "./Settings"
import Logout from "./Logout"
import Workout from "./Workout"
function App() {
  return (

      <Router>
      <AuthProvider>
        <Routes>
        <Route exact path='/' element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/workout" element={<Workout/>} />
        <Route path="/notifications" element={<Notifications/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/" element={<Logout/>} />
        </Routes>
      </AuthProvider>
      </Router>
    
  );
}

export default App;
