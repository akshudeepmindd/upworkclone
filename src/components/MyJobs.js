import React from "react";
import {
  Row,
  Col,
  Card,
  Container,
  Carousel,
  Button,
  Form,
  Tabs,
  Tab,
  Table,
} from "react-bootstrap";

import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
function Job() {
  return (
    <>
      <TopBar />
      <Container>
        <div className="my-job">
          <div className="top-heading mb-2">
            <div>
              <h2>My Jobs</h2>
            </div>
            <div>
              <p>
                Earnings available now: $7.00 <i class="fas fa-ellipsis-h"></i>
              </p>
            </div>
          </div>
          <Card>
            <Card.Body>
              <div className="contract d-flex justify-content-between align-items-center">
                <div>
                  <h3>Active Contracts</h3>
                </div>
                <div className="">
                  <Form.Control type="" placeholder="Search Contracts" />
                </div>
              </div>
              <Tabs defaultActiveKey="all" id="uncontrolled-tab-example">
                <Tab eventKey="all" title="All ">
                  <Table responsive="xl" className="mt-3">
                    <tbody>
                      <tr>
                        <td>
                          <p className="text-green p-0">
                            React and node developer needed
                          </p>
                          <span className="">hiring by suains ojhhg</span>
                        </td>
                        <td>
                          <p>React and node developer needed</p>
                          <span className="">hiring by suains ojhhg</span>
                        </td>
                        <td>
                          <div className="circle">
                            <i class="fas fa-ellipsis-h"></i>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p className="text-green p-0">
                            React and node developer needed
                          </p>
                          <span className="">hiring by suains ojhhg</span>
                        </td>
                        <td>
                          <p>React and node developer needed</p>
                          <span className="">hiring by suains ojhhg</span>
                        </td>
                        <td>
                          <div className="circle">
                            <i class="fas fa-ellipsis-h"></i>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p className="text-green p-0">
                            React and node developer needed
                          </p>
                          <span className="">hiring by suains ojhhg</span>
                        </td>
                        <td>
                          <p>React and node developer needed</p>
                          <span className="">hiring by suains ojhhg</span>
                        </td>
                        <td>
                          <div className="circle">
                            <i class="fas fa-ellipsis-h"></i>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td colspan={4}>
                          <div className="d-flex justify-content-center align-items-center">
                            <Button variant="outline-secondary">
                              View All Contracts
                            </Button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Tab>
                <Tab eventKey="profile" title="Active Milestone (0)">
                  <div className="pt-3">
                    <p>
                      You have no fixed-price contracts with milestones in
                      progress at this time.
                    </p>
                  </div>
                </Tab>
                <Tab eventKey="contact" title="Awaiting Milestone (4)"></Tab>
                <Tab eventKey="dvgsg" title="Payment Requests (0)"></Tab>
              </Tabs>
            </Card.Body>
          </Card>
        </div>
      </Container>

      <Footer />
    </>
  );
}

export default Job;
