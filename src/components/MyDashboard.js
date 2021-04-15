import React from "react";
import {
  Navbar,
  Nav,
  Button,
  Container,
  Card,
  Tabs,
  Tab,
  Table,
  Row,
  Col,
  Accordion,
} from "react-bootstrap";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
function Prposl(props) {
  return (
    <>
      <TopBar />
      <Container>
        <div className="my-dashboard mt-4">
          <Card>
            <Card.Body>
              <div className="inner-content">
                <div>
                  <h3>Projects</h3>
                </div>
                <div>
                  <Button variant="success">Create Project</Button>
                </div>
              </div>
              <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Approved (0)">
                  <div className="pt-3">
                    <img src="https://assets.static-upwork.com/assets/CatalogApp/img/projects-list-empty@x2.0aac448.png" />

                    <div className="text-center">
                      <p className="font-weight-bold">
                        Create a new project today to start promoting your
                        services
                      </p>
                      <Button variant="success">Create Your Project</Button>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="profile" title="Under Review (0)"></Tab>
                <Tab eventKey="contact" title="Drafts (0)" disabled></Tab>
              </Tabs>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <div className="catalog">
                <h3 className="border-bottom pb-3">
                  How Project Catalog works
                </h3>
              </div>
              <Row className="mt-3">
                <Col sm={3}>
                  <div className="catalog-order">
                    <img src="/images/clipboard.png" />
                    <h3>1. Get an Order</h3>
                    <p>You can start communicating via Upwork Messages.</p>
                  </div>
                </Col>
                <Col sm={3}>
                  <div className="catalog-order">
                    <img src="/images/clipboard.png" />
                    <h3>2. Wait for requirements</h3>
                    <p>You can start communicating via Upwork Messages.</p>
                  </div>
                </Col>
                <Col sm={3}>
                  <div className="catalog-order">
                    <img src="/images/clipboard.png" />
                    <h3>3. Send work by deadline</h3>
                    <p>You can start communicating via Upwork Messages.</p>
                  </div>
                </Col>
                <Col sm={3}>
                  <div className="catalog-order">
                    <img src="/images/clipboard.png" />
                    <h3>4. Get Paid</h3>
                    <p>You can start communicating via Upwork Messages.</p>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <div className="catalog">
                <h3 className="border-bottom pb-3">FAQs</h3>
              </div>
              <div>
                <Accordion defaultActiveKey="0">
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        What is Project Catalog?
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        We developed this offering in response to feedback from
                        our community. Freelancers told us that they want to
                        work on projects that closely align within their work
                        and rate expectations, while clients have told us they
                        want an easier way to get started with freelancers. With
                        Project Catalog, you can set expectations about cost,
                        timeline, and deliverables and simplify how clients
                        locate the skills they need for their project. In
                        general, the idea is that freelancers pre-define
                        everything upfront and interested clients can buy it,
                        cutting down on the back and forth that often needs to
                        occur before a project begins.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        What is the review process for these projects?
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        {" "}
                        We developed this offering in response to feedback from
                        our community. Freelancers told us that they want to
                        work on projects that closely align within their work
                        and rate expectations, while clients have told us they
                        want an easier way to get started with freelancers. With
                        Project Catalog,
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        What is the review process for these projects?
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                        {" "}
                        We developed this offering in response to feedback from
                        our community. Freelancers told us that they want to
                        work on projects that closely align within their work
                        and rate expectations, while clients have told us they
                        want an easier way to get started with freelancers. With
                        Project Catalog,
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="3">
                        What is the review process for these projects?
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                      <Card.Body>
                        We developed this offering in response to feedback from
                        our community. Freelancers told us that they want to
                        work on projects that closely align within their work
                        and rate expectations, while clients have told us they
                        want an easier way to get started with freelancers. With
                        Project Catalog
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>

      <Footer />
    </>
  );
}

export default Prposl;
