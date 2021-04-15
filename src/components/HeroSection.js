import React from "react";

import { Row, Col, Card, Container } from "react-bootstrap";

function Hero() {
  return (
    <>
      <div className="hero-section">
        <div className="d-flex justify-content-center">
          <p>We compare hunderds of projects to find you the right one</p>
        </div>
        <Container className="d-flex justify-content-center">
          <Row>
            <Col sm={4}>
              <Card>
                <Card.Body>
                  <img src="/images/search.png" />

                  <Card.Title>Find Project</Card.Title>
                  <Card.Text>
                    Find a perfect project that suits your needs
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card>
                <Card.Body>
                  <img src="/images/house.png" />

                  <Card.Title>Bid Proposal</Card.Title>
                  <Card.Text>
                    Send you a bid and wait for cleint to contact you
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card>
                <Card.Body>
                  <img src="/images/hook.png" />
                  <Card.Title>Work</Card.Title>
                  <Card.Text>Start working on project and payed you</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="d-flex justify-content-center mb-4">
          <a href="">See How it Works</a>
        </div>
      </div>
    </>
  );
}

export default Hero;
