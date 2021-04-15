import React from "react";
import {
 
  Button,
  Container,
  Tabs,
  Tab,
  Row,
  Col,
  Card,
  Form,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
function Detail(props) {
  return (
    <Navbar>
      <Container>
        <div className="projct-details">
          <Row>
            <Col sm={9} className="pr-0">
              <div className="projects">
                <h3>Pancakeswap bot Binancesmartchain (bot sniping\trade)</h3>
              </div>
              <div className="all-details">
                <div className="profile-text">
                  <p className="text-green">Scripting & Automation</p>
                  <p className="text-muted">Posted 57 minutes ago</p>
                  <p>
                    <img src="images/megaphone.png" />
                    Specialized profiles can help you better highlight your
                    expertise when submitting proposals to jobs like these.
                    <span className="text-green">
                      Create a specialized profile.
                    </span>
                  </p>
                  <p>
                    <img src="/images/location.png" /> Worldwide
                  </p>
                </div>
              </div>
              <div className="jobs-description">
                <p>
                  Hello i want you to make a<br /> pancakeswap (Frontrunner Bot)
                  wallet metamask
                  <br /> buying selling <br />
                  stop loss
                </p>
                <p>
                  Dont buy if more than 29 holders, with possibility to turn it
                  <br />
                  off ultra fast a sixth of a second
                </p>

                <p>
                  setting on how many times the bot tries to execute the trade,
                  with possibility to turn it off
                </p>
                <p>
                  bot with auto execute as soon as liquidity is added to pool
                  for any token
                </p>
                <p>
                  the amount of gas and slippage can be defined by me upfront,
                  no waiting to purchase the
                  <br /> token or manually doing anything except pasting the
                  smartcontract adress
                </p>
                <p>
                  Including complete source code <br />
                  +comments on the source Code, (easy to understand)
                </p>
                <p>Ready To use</p>
              </div>
              <div className="cleint-budget">
                <Row>
                  <Col sm={6}>
                    <div className="">
                      <label>
                        {" "}
                        <img src="/images/price-tag.png" />
                        $100
                      </label>
                      <span className="">Fixed price</span>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="">
                      <label>
                        {" "}
                        <img src="/images/clock.png" />
                        Intermediate
                      </label>
                      <span className="">I am looking for a mix of</span>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="type-project">
                <p>
                  <strong>Project Type: </strong>One-time project
                </p>
              </div>
              <div className="projet-querry">
                <p>
                  <strong>
                    You will be asked to answer the following questions when
                    submitting a proposal:
                  </strong>
                </p>
                <p className="pl-4">
                  1. Do you have suggestions to make this project run
                  successfully?
                </p>
              </div>
              <div className="project-skills projet-querry">
                <h4>Skills and Expertise</h4>
                <p>
                  <strong>Scripting & Automation Deliverables </strong>
                </p>

                <div className="button-tags">
                  <div className="tag">
                    <Link to="/">API Integration</Link>
                  </div>
                  <div className="tag ml-2">
                    <Link to="/">Automation</Link>
                  </div>
                </div>
                <div className="job-activity">
                  <p>
                    <strong>Activity on this job</strong>
                  </p>
                  <div className="activity-label">
                    <div>
                      <label>Proposals:</label>
                      <span> Less than 5</span>
                    </div>
                    <div>
                      <label>Last viewed by client:</label>
                      <span> Less than 5</span>
                    </div>{" "}
                    <div>
                      <label>Interviewing:</label>
                      <span> 0</span>
                    </div>{" "}
                    <div>
                      <label>Invites sent:</label>
                      <span> 15</span>
                    </div>
                    <div>
                      <label>Unanswered invites:</label>
                      <span> 15</span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={3} className="p-0">
              <div className="right-sidebar">
                <div className="d-flex justify-content-center">
                  <Button variant="success">
                    <Link to="/proposal">Submit A proposal</Link>
                  </Button>
                  <Button variant="outline-secondary" className="mt-4">
                    <img src="/images/heart.svg" />
                    Save Job
                  </Button>
                </div>
                <div className="conection">
                  <p className="text-green">
                    <img src="/images/flag.png" /> Flag as in appropriate
                  </p>
                  <p>Required Connects to submit a proposal: 4</p>
                  <p className="mb-3">Available Connects: 76</p>
                </div>
                <div className="about-cleint">
                  <h3 className="pt-2">
                    <strong>About the Cleint</strong>
                  </h3>
                  <p>Payment method not verified</p>
                  <div className="time-label">
                    <div>
                      <label>Brazil</label>
                      <span>07:24 am</span>
                    </div>
                    <div>
                      <label>1 job posted</label>
                      <span>
                        0% hire rate, 2 open jobs
                        <br />
                        Member since Mar 27, 2018
                      </span>
                    </div>
                  </div>
                </div>
                <div className="job-link">
                  <h3 class="mt-3">Job Link</h3>
                  <Form.Control
                    type="text"
                    placeholder="htpps://dashboard.com"
                    className="mb-2"
                  />
                  <a href="" className="text-green ">
                    Copy Link
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="open-job">
          <div className="job">
            {" "}
            <p>Other open jobs by this Client (1)</p>
          </div>
          <p className="text-green">
            Pancakeswap bot Binancesmartchain (sniping bot) Fixed-price
          </p>
        </div>
      </Container>
    </Navbar>
  );
}

export default Detail;
