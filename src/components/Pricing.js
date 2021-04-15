import React from "react";
import { Row, Col, Card, Container, Carousel, Button } from "react-bootstrap";

function Price() {
  return (
    <div className="pricing-section mt-4 pb-4">
      <div className="heading-price">
        <h3 className="text-center">Pricing</h3>
        <p>Start your free day period, get hired and start working</p>
      </div>
      <Container className="mt-5">
        <Row>
          <Col sm={4}>
            <Card>
              <Card.Body>
                <img src="https://bsmedia.business-standard.com/_media/bs/img/article/2020-06/23/full/1592880561-0504.jpg" />
                <Card.Title>Basic</Card.Title>
                <Card.Subtitle className="mb-2 ">$15</Card.Subtitle>
                <Card.Text>price would be fixed</Card.Text>
                <Card.Text>price would be fixed</Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card>
              <Card.Body>
                <img src="https://bsmedia.business-standard.com/_media/bs/img/article/2020-06/23/full/1592880561-0504.jpg" />
                <Card.Title>Basic</Card.Title>
                <Card.Subtitle className="mb-2 ">$15</Card.Subtitle>
                <Card.Text>price would be fixed</Card.Text>
                <Card.Text>price would be fixed</Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card>
              <Card.Body>
                <img src="https://bsmedia.business-standard.com/_media/bs/img/article/2020-06/23/full/1592880561-0504.jpg" />
                <Card.Title>Basic</Card.Title>
                <Card.Subtitle className="mb-2 ">$15</Card.Subtitle>
                <Card.Text>price would be fixed</Card.Text>
                <Card.Text>price would be fixed</Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Price;
