import React, { useState } from "react";
import DatePicker from "react-date-picker";
import {
  Row,
  Col,
  Card,
  Container,
  Carousel,
  Button,
  Form,
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Prposal from "./SubmitProposal";

function UpNav(props) {
  const [value, onChange] = useState(new Date());
  return (
    <div className="top-bar">
      <Container>
        <Navbar collapseOnSelect expand="lg" bg="">
          <Navbar.Brand href="#home">
            <img src="/images/imagee.jpg" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <div className="list-div">
            <ul>
              <li>
                {" "}
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2 search-bar"
                />
              </li>
              <li className="pl-4">
                <div class="dropdown">
                  <Link to="">
                    <div class="dropbtn">Find Work</div>
                  </Link>
                  <div class="dropdown-content">
                    <Link to="#">Find Work</Link>
                    <Link to="#">Saved Job</Link>
                    <Link to="/prposl">Proposals</Link>
                    <Link to="#">Profile</Link>

                    <Link to="/status">My Stats</Link>
                    <Link to="/s">Upwork Readiness Test</Link>

                    <Link to="/mydashboard">My Project Dashboard</Link>
                  </div>
                </div>
              </li>
              <li>
                <div class="dropdown">
                  <Link to="">
                    <div class="dropbtn">My Jobs</div>
                  </Link>
                  <div class="dropdown-content">
                    <Link to="/myjobs">My Jobs</Link>
                    <Link to="contract">All Contracts</Link>
                    <Link to="#">Work Day</Link>

                    </div>
                </div>
              
              </li>
              <li>
                <Link to="">Reports</Link>
              </li>
              <li>
                <Link to="">Messages</Link>
              </li>
            </ul>
          </div>
        </Navbar>
      </Container>
      {props.children}
    </div>
  );
}

export default UpNav;
