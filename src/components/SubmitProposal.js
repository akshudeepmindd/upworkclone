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
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Prposal() {
  const [value, onChange] = useState(new Date());
  return (
    <Navbar>
    <Container>
      <div className="submit-prposal">
        <Card>
          <Card.Body>
            <div className="proposal-setting">
              <h3>Proposal Settings</h3>
              <div className="submit-querry">
                <p>
                  <strong>
                    {" "}
                    Do you want to submit the proposal as a freelancer or as an
                    agency member?
                  </strong>
                </p>
                <div>
                  <input type="radio" id="male" name="gender" value="male" />
                  <label for="male">As a freelancer</label>
                </div>{" "}
                <div>
                  <input type="radio" id="male" name="gender" value="male" />
                  <label for="male">
                    As an agency member under MastroLinks
                  </label>
                </div>
                <Form.Group
                  controlId="exampleForm.ControlSelect1"
                  className="select-width"
                >
                  <Form.Label>Propose with a Specialized profile</Form.Label>
                  <Form.Control as="select">
                    <option>General Profile</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
                <p className="mt-3">
                  This proposal requires <strong>4 Connects</strong>{" "}
                </p>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <div className="proposal-setting">
              <h3>Job Details</h3>
              <div className="projects">
                <h4>Pancakeswap bot Binancesmartchain (bot sniping\trade)</h4>
                <div className="button-tags">
                  <div className="tag">
                    <Link to="/">API Integration</Link>
                  </div>
                  <div className=" ml-2 pt-2">
                    <Link to="/">Posted Apr 7, 2021</Link>
                  </div>
                </div>
                <div className="jobs-description">
                  <p>
                    Hello i want you to make a<br /> pancakeswap (Frontrunner
                    Bot) wallet metamask
                    <br /> buying selling <br />
                    stop loss
                  </p>
                  <p>
                    Dont buy if more than 29 holders, with possibility to turn
                    it
                    <br />
                    off ultra fast a sixth of a second
                  </p>

                  <p>
                    setting on how many times the bot tries to execute the
                    trade, with possibility to turn it off
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
                  <p className="text-green border-bottom">View job posting</p>
                </div>
                <h4 className="mt-0 mb-0">Skills and expertise</h4>
                <div className="button-tags pb-4">
                  <div className="tag">
                    <Link to="/">API Integration</Link>
                  </div>
                  <div className=" ml-2 pt-2">
                    <Link to="/">Posted Apr 7, 2021</Link>
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <div className="self-intro">
              <div className="introduction">
                <h2>Introduce Yourself</h2>
                <p>What makes you a strong candidate for this job?</p>
              </div>
              <div className="letter">
                <h3>Cover Letter</h3>
                <p>
                  Tell the client a little bit about yourself and any work
                  you’ve done that’s relevant to this job. Include any questions
                  you may have about this job, even request a video call.
                </p>
                <Form.Control as="textarea" rows={3} value="Add Cover Letter" />
                <div className="mt-4">
                  <h3>Attach work sample</h3>
                  <p>
                    You may attach up to 10 files under the size of 25MB each.
                    Include work samples or other documents to support your
                    application. Do not attach your résumé — your Upwork profile
                    is automatically forwarded to the client with your proposal.
                  </p>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <div className="project-time">
              <h3>How Long will this project take</h3>
              <Form.Control as="select" className="width20">
                <option>Please Select</option>
              </Form.Control>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <div className="terms">
              <div className="term-div">
                <div className="d-flex justify-content-between align-items-center">
                  <h3>Terms</h3>
                  <div>
                    <h3 className="text-muted">Client's budget: $8.00 US</h3>
                  </div>
                </div>
              </div>
              <div className="pay-method">
                <p>
                  <strong>How do you want to be paid?</strong>
                </p>
                <div>
                  <input type="radio" id="male" name="gender" value="male" />
                  <label for="male">By Milestone</label>
                  <p className="text-muted pl-3">
                    Divide the project into smaller segments, called milestones.
                    You'll be paid for milestones as they are completed and
                    approved.
                  </p>
                </div>
                <div className="mt-3">
                  <input type="radio" id="male" name="gender" value="male" />
                  <label for="male">By Project</label>
                  <p className="text-muted pl-3">
                    Divide the project into smaller segments, called milestones.
                    You'll be paid for milestones as they are completed and
                    approved.
                  </p>
                </div>
                <div className="mt-4">
                  <h3 className="font-weight-bold">
                    How many milestones do you want to include?
                  </h3>
                  <Row className="mt-3 descibe-div">
                    <Col sm={6}>
                      <Form.Label>Description</Form.Label>
                      <Form.Control type="" placeholder="" />
                    </Col>
                    <Col sm={3}>
                      <div>
                        <Form.Label>Due Date</Form.Label>
                        <div>
                          {" "}
                          <DatePicker onChange={onChange} value={value} />
                        </div>
                      </div>
                    </Col>
                    <Col sm={3}>
                      <div>
                        <Form.Label>Ammount</Form.Label>
                        <Form.Control type="" placeholder="" />
                      </div>
                    </Col>
                  </Row>
                  <div className="add-milestone">
                    <h4 className="border-bottom text-green mt-3">
                      + Add Milestone
                    </h4>
                    <Row>
                      <Col sm={5}>
                        <div className="text-center prize-tag">
                          <img src="/images/coin.png" />
                          <p className="mb-0 text-muted pt-4">
                            Includes Upwork Fixed-Price Protection.
                          </p>
                          <p className="text-green">Learn More</p>
                        </div>
                      </Col>
                      <Col sm={7}>
                        <div className="price-div">
                          <div className="d-flex justify-content-between">
                            <p className="font-weight-bold">
                              Total price of project
                            </p>

                            <p>$00</p>
                          </div>
                          <p className="border-bottom pb-2">
                            This includes all milestones, and is the amount your
                            client will see
                          </p>
                          <div className="d-flex justify-content-between  border-bottom">
                            <p className="font-weight-bold">
                              Total price of project
                              <span className="text-green"> Explain this</span>
                            </p>

                            <p>$00</p>
                          </div>

                          <div className="d-flex justify-content-between mt-2">
                            <p className="font-weight-bold">
                              Upwork Service Fee
                            </p>

                            <p>$00</p>
                          </div>
                          <p className="border-bottom pb-2">
                            This includes all milestones, and is the amount your
                            client will see
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
        <div className="sub-proposal mt-4">
          <Button variant="success">Submit a Proposal</Button>
          <Button variant="light" className="text-success">
            Cancel
          </Button>
        </div>
      </div>
    </Container>
    </Navbar>
  );
}

export default Prposal;
