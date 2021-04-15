import React from "react";
import {
  Navbar,
  Nav,
  Button,
  Row,
  Col,
  Container,
  Form,
  InputGroup,
  FormControl,
  Card,
  ProgressBar,
} from "react-bootstrap";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Lading() {
  return (
    <>
      <TopBar />
      <div className="landing-page">
        <div className="work-div">
          <Container>
            <Row className="mb-4">
              <Col sm={2}>
                <h2>Find Work</h2>
              </Col>
              <Col sm={7}>
                <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                  Search For Jobs
                </Form.Label>
                <InputGroup className="mb-2">
                  <FormControl
                    id="inlineFormInputGroup"
                    placeholder=" Search For Jobs"
                    className="serch-bar"
                  />
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <i class="fas fa-search"></i>
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                </InputGroup>
                <a href="" className="text-success pl-4">
                  Advanced Search
                </a>
              </Col>
            </Row>
            <Row className="pt-3">
              <Col sm={2}>
                <div className="left-sidebar">
                  <ul>
                    <li>
                      <a href="">My Feed</a>
                    </li>
                    <li>
                      <a href="">Best Mathes</a>
                    </li>
                    <li>
                      <a href="">Python</a>
                    </li>
                    <li>
                      <a href="">Recomended</a>
                    </li>
                  </ul>
                  <ul className="categories">
                    <p>My Categories</p>
                    <li>
                      <Link to="">Web Development</Link>
                    </li>
                    <li>
                      <Link to="">Product Management</Link>
                    </li>
                    <li>
                      <Link to="">Other- Software Development</Link>
                    </li>
                    <li>
                      <Link to="">Mobile Development</Link>
                    </li>
                    <li>
                      <Link to="">Ecommerce Development</Link>
                    </li>
                    <li>
                      <Link to="">Machine Learning</Link>
                    </li>
                    <div className="outer-div">
                      <i class="fas fa-pencil-alt"></i>
                    </div>
                  </ul>
                </div>
              </Col>
              <Col sm={7}>
                <div className="description">
                  <div className="describe-job">
                    <Button variant="outline-secondary">
                      Click here to see the job
                    </Button>
                  </div>
                  <Card>
                    <Card.Body>
                      <div className="my-feed d-flex justify-content-between align-items-center">
                        <h2>My Feed</h2>
                        <div>
                          <i class="fas fa-ellipsis-h"></i>
                        </div>
                      </div>
                      <div className="inner-content">
                        <div className="real-state">
                          <p>Finding Rreal Esttae Job Application in Germany</p>
                          <div className="d-flex">
                            <div className="out-circle">
                              <i class="far fa-thumbs-down"></i>
                            </div>
                            <div className="out-circle ml-3">
                              <i class="far fa-heart"></i>
                            </div>
                          </div>
                        </div>
                        <div className="">
                          <p>
                            Fied Price - Intermediate - Est Budget: $20 - Posted
                            1 hour ago
                          </p>
                          <p>
                            Hi, I want to apply for work in Germany, as a Real
                            Estate Agent. So, I want to have a list of all the
                            companies that are looking for Real Estate Agents,
                            in the location of Munich and Ingolstadt.
                          </p>
                        </div>
                        <div className="div-tags">
                          <div className="tag">Python-goose</div>
                          <div className="tag">Python-goose</div>
                          <div className="tag">Python-goose</div>
                          <div className="tag">Python-goose</div>
                        </div>
                        <div className="mt-2">
                          <label className="font-weight-bold">Proposal:</label>{" "}
                          <span className="">Less than 5</span>
                        </div>
                        <div className="payment-verifictaion">
                          <ul>
                            <li>Payment</li>
                            <li>*****</li>
                            <li>200+ spent</li>
                            <li>
                              <i class="fas fa-map-marker-alt"></i> Albanla
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col sm={3}>
                <div className="profile-section">
                  <h3>My Profile</h3>
                  <p>
                    <i class="fas fa-eye"></i>
                    <a href="/profile" className="text-success">
                      {" "}
                      View Profile
                    </a>
                  </p>

                  <div className="">
                    <p className="font-weight-bold">Visibility</p>
                    <p>
                      <i class="fas fa-globe"></i> Public
                      <i class="fas fa-edit ml-3"></i>
                    </p>
                  </div>
                  <div className="mt-4">
                    <p className="font-weight-bold">Availability</p>
                    <p>
                      <i class="far fa-clock"></i> Open to offers
                      <i class="fas fa-edit ml-3"></i>
                    </p>
                    <ProgressBar now={100} />
                  </div>
                  <div className="proposal">
                    <p className="font-weight-bold">Proposal</p>
                    <ul>
                      <li>
                        <a href="">6 submitted proposal</a>
                      </li>
                      <li>
                        <a href="">76 available connects</a>
                      </li>
                      <li>
                        <a href="">
                          Track time with <br />
                          the desktop app
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Lading;
