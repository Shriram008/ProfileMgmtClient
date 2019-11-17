import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Container } from 'react-bootstrap';

import PieChartGender from "../Charts/PieChart.js"
import SignupDetails from "./SignupDetails";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage.js"
import ReadProfile from "./ReadProfile.js"


 class FunctionalBar extends Component {
    render() {
        return (
           <Router>
            <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
             
            </a>
            <Link to="/" className="navbar-brand">Profile Directory Portal </Link>
            {/* <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/view" className="nav-link">View INC</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create INC</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/search" className="nav-link">Search INC</Link>
                </li>
              </ul>
            </div> */}
          </nav>
          <br/>

          <Route path="/" exact component={HomePage} />
          <Route path="/charts" exact component={PieChartGender} /> 
        
           <Route path="/read/:id" component={ReadProfile} /> 
          <Route path="/login" component={LoginPage} />
          <Route path="/view" component={HomePage} />
          <Route path="/signup" component={SignupDetails} />
         
        </div>
        </Router>
        );
 }
}

export default FunctionalBar;
