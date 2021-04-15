import React from "react";
import {
  Navbar,
  Nav,
  Button,
  Container,
  Row,
  Col,
  Card,
  ProgressBar,
} from "react-bootstrap";

import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
function Status() {
  return (
    <>
      <TopBar />
      <div className="status-section mt-4">
        <Container>
          <h3>My Status</h3>
          <Card>
            <Card.Body>
              <Row className="p-3">
                <Col sm={9} className="pr-0">
                  <div className="status-config">
                    <h3>Cleint Satisfaction</h3>
                  </div>
                  <Row className="mt-3">
                    <Col sm={4}>
                      <div className="">
                        <h3>Job Success score</h3>
                        <ProgressBar now={60} />
                        <div className="">
                          <h4>My Badges</h4>
                          <p>Last updated Apr 4</p>
                        </div>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <p className="text-muted">12-month earnings</p>
                      <p className="text-muted">12-month earnings</p>
                      <p className="text-muted">12-month earnings</p>
                      <p className="text-muted">12-month earnings</p>
                      <p className="text-muted">12-month earnings</p>
                    </Col>
                    <Col sm={4}>
                      <h5>$12,433.34</h5>
                      <h5>$12,433.34</h5>
                      <h5>$12,433.34</h5>
                      <h5>$12,433.34</h5>
                    </Col>
                  </Row>
                </Col>
                <Col sm={3} className="pl-0">
                  <div className="job-score">
                    <h3>Job Success Score</h3>
                    <p>
                      Your Job Success Score reflects how well you deliver great
                      results for your clients. It updates every 2 weeks.
                    </p>
                    <h3>Badges</h3>
                    <p>
                      We reward success at each stage in your Upwork journey
                      with a badge that helps you win more work from top
                      clients. Get and maintain a badge by consistently
                      delivering great results for your clients
                    </p>
                    <div className="">
                      <p className="text-green">
                        <i class="fas fa-lightbulb"></i>
                        How to improve your job success
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="mt-4">
            <Card.Body>
              <Row className="p-3">
                <Col sm={9} className="pr-0">
                  <div className="status-config">
                    <h3>Communication</h3>
                  </div>
                  <p className="mt-3">
                    You <strong>replied to 4 of 4 invitations</strong> to apply
                    in the past 90 days:
                  </p>
                  <Row className="mt-3 communication">
                    <Col sm={4}>
                      <h4 className="text-muted">Responsivness</h4>
                      <h4 className="text-muted">You reply within a day</h4>
                      <h4 className="text-muted">You reply every time</h4>
                    </Col>
                    <Col sm={8}>
                      <p className="font-weight-bold">
                        Your responsiveness will be determined after you receive
                        and respond to a few more job invitations. Top
                        freelancers accept or decline all invitations within 24
                        hours.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          {" "}
                          <h5>Never</h5>
                        </div>
                        <div>
                          {" "}
                          <h5 className="mr-4">Always</h5>
                        </div>
                      </div>
                      <ProgressBar now={60} />
                      <div className="d-flex justify-content-between align-items-center mt-5">
                        <div>
                          {" "}
                          <h5>Never</h5>
                        </div>
                        <div>
                          {" "}
                          <h5 className="mr-4">Always</h5>
                        </div>
                      </div>
                      <ProgressBar now={60} />
                    </Col>
                  </Row>
                </Col>
                <Col sm={3} className="pl-0">
                  <div className="job-score">
                    <h3>Response Time </h3>
                    <p className="">
                      Responding to invitations quickly means contracts are
                      started more often and more quickly, leading to more work
                      for everyone
                    </p>
                    <h3>Available</h3>
                    <p>As needed - open to offers</p>
                    <div className="">
                      <p className="text-green">
                        <i class="fas fa-lightbulb"></i>
                        How to improve your job success
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="mt-4">
            <Card.Body>
              <Row className="p-3">
                <Col sm={9} className="pr-0">
                  <div className="status-config">
                    <h3>Marketing effectiveness</h3>
                  </div>
                  <p className="mt-3">
                    You've applied to
                    <strong> 17 jobs </strong>in the past 90 days. Compared to
                    your peers
                  </p>
                  <Row className="mt-3 communication">
                    <Col sm={4}>
                      <h4 className="text-muted">You were viewed</h4>
                      <h4 className="text-muted">You were interviewed</h4>
                      <h4 className="text-muted">You were hired</h4>
                    </Col>
                    <Col sm={8}>
                      <p className="font-weight-bold">
                        Your responsiveness will be determined after you receive
                        and respond to a few more job invitations. Top
                        freelancers accept or decline all invitations within 24
                        hours.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          {" "}
                          <h5>Less Often</h5>
                        </div>
                        <div>
                          {" "}
                          <h5 className="mr-4">More Often</h5>
                        </div>
                      </div>
                      <ProgressBar now={60} />
                      <div className="d-flex justify-content-between align-items-center mt-5">
                        <div>
                          {" "}
                          <h5>Less Often</h5>
                        </div>
                        <div>
                          {" "}
                          <h5 className="mr-4">More Often</h5>
                        </div>
                      </div>
                      <ProgressBar now={60} />
                    </Col>
                  </Row>
                </Col>
                <Col sm={3} className="pl-0">
                  <div className="job-score">
                    <h3>Applying </h3>
                    <p className="">
                      Look for jobs that match your skill set and experience
                      level.
                    </p>
                     <div className="">
                      <p className="text-green">
                        <i class="fas fa-lightbulb"></i>
                        The art of applying the jobs
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Status;
