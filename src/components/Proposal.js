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
} from "react-bootstrap";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
function Prposl(props) {
  return (
    <>
      <TopBar />
      <Container>
        <div className="proposal">
          <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Active">
              <Card>
                <Card.Body>
                  <div className="">
                    <h3>
                      Offers (0) <i class="fas fa-question-circle"></i>
                    </h3>
                  </div>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <div className="">
                    <h3>
                      Invitation s to interview (0)
                      <i class="fas fa-question-circle"></i>
                    </h3>
                  </div>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <div className="">
                    <h3>
                      Active proposals (0)
                      <i class="fas fa-question-circle"></i>
                    </h3>
                  </div>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <div className="">
                    <h3 className="pb-4">
                      Submitted proposals (4)
                      <i class="fas fa-question-circle"></i>
                    </h3>
                  </div>
                  <div className="proposal-content">
                    <div>
                      <Table responsive="md">
                        <tbody>
                          <tr>
                            <td>
                              Initiated , March 2013
                              <p className="">a month ago</p>
                            </td>
                            <td className="text-success">Needs php developer in mohali</td>
                            <td>General Profile</td>
                          </tr>
                          <tr>
                            <td>
                              Initiated , March 2013
                              <p className="">a month ago</p>
                            </td>
                            <td className="text-success">Needs php developer in mohali</td>
                            <td>General Profile</td>
                          </tr>
                          <tr>
                            <td>
                              Initiated , March 2013
                              <p className="">a month ago</p>
                            </td>
                            <td className="text-success">Needs php developer in mohali</td>
                            <td>General Profile</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Tab>
            <Tab eventKey="profile" title="Archived">
              <Card>
                <Card.Body>
                  <div className="">
                    <h3 className="pb-4">
                      Archived proposals (1312)
                      <i class="fas fa-question-circle"></i>
                    </h3>
                  </div>
                  <div className="proposal-content">
                    <div>
                      <Table responsive="md">
                        <tbody>
                          <tr>
                            <td>
                              Initiated , March 2013
                              <p className="">a month ago</p>
                            </td>
                            <td className="text-success">Needs php developer in mohali</td>
                            <td>General Profile</td>
                          </tr>
                          <tr>
                            <td>
                              Initiated , March 2013
                              <p className="">a month ago</p>
                            </td>
                            <td className="text-success">Needs php developer in mohali</td>
                            <td>General Profile</td>
                          </tr>
                          <tr>
                            <td>
                              Initiated , March 2013
                              <p className="">a month ago</p>
                            </td>
                            <td className="text-success">Needs php developer in mohali</td>
                            <td>General Profile</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Tab>
          </Tabs>
          <div className="bottom-right">
            <ul>
              <li> Search for jobs</li>
              <li> Search for jobs</li>
            </ul>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
}

export default Prposl;
