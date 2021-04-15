import React from "react";
import {
  Row,
  Col,
  Card,
  Container,
  Carousel,
  Button,
  Tabs,
  Tab,
  Pagination,
  Badge,
} from "react-bootstrap";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";

function Profile() {
  return (
    <>
      <TopBar />
      <div className="profile-section mt-4">
        <Container>
          <Card>
            <Card.Body>
              <div className="profile">
                <div>
                  <h2>Akshay Sharma</h2>
                  <p className="">
                    <i class="fas fa-map-marker-alt"></i> New Delhi,
                    India-1:41pm local time
                  </p>
                </div>
                <div>
                  <Button variant="outline-primary" className="mr-3">
                    See Public View
                  </Button>
                  <Button variant="success">Profile Settings</Button>
                </div>
              </div>
              <Row>
                <Col sm={4} className="pr-0">
                  <div className="view-area">
                    <div className="view-profile">
                      <ul>
                        <li>
                          {" "}
                          <h3>View Profie </h3>
                        </li>
                        <li>
                          {" "}
                          <div className="circle ml-2">
                            <i class="fas fa-plus"></i>
                          </div>
                        </li>
                        <li>
                          <div className="circle ml-2">
                            <i class="fas fa-pencil-alt"></i>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <p>Full Stack Development</p>
                    <p className="">All Work</p>
                  </div>
                  <div className="jobs-total">
                    <div className="d-flex">
                      <div>
                        <label>10k+ Total</label>
                        <span class=""> Earings</span>
                      </div>
                      <div>
                        <label>10k+ Total</label>
                        <span class=""> Earings</span>
                      </div>
                      <div>
                        <label>10k+ Total</label>
                        <span class=""> Earings</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3>Vedio Introduction</h3>
                  </div>
                  <div className="p-4">
                    <h3>Availability</h3>
                    <p>Availability</p>
                    <span className="">As Needed-Open To Offers</span>
                  </div>
                  <div className="view-profile">
                    <ul>
                      <li>
                        <h3 className="pl-4">Languages </h3>
                      </li>
                      <li>
                        <div className="circle ml-2">
                          <i class="fas fa-plus"></i>
                        </div>
                      </li>
                      <li>
                        <div className="circle ml-2">
                          <i class="fas fa-pencil-alt"></i>
                        </div>
                      </li>
                    </ul>
                    <p className="pl-4">English: Native or Bligluil</p>
                  </div>

                  <div className="p-4">
                    <h3 className="float-left mr-2">Education </h3>{" "}
                    <div className="circle ">
                      <i class="fas fa-plus"></i>
                    </div>
                  </div>
                  <div className="view-profile">
                    <ul>
                      <li>
                        <h3 className="pl-4">Kurukshaetra University </h3>
                      </li>
                      <li>
                        {" "}
                        <div className="circle ml-2">
                          {" "}
                          <i class="fas fa-pencil-alt"></i>
                        </div>
                      </li>
                      <li>
                        {" "}
                        <div className="circle ml-2">
                          <i class="fas fa-trash-alt"></i>
                        </div>
                      </li>
                    </ul>
                    <div className="pl-4 applicable">
                      <p className="">Master of computer</p>
                      <p>Applications (MCA)</p>
                      <p>2019-2012</p>
                    </div>
                  </div>
                  <div className="view-profile mt-3">
                    <ul>
                      <li>
                        <h3 className="pl-4">Kurukshaetra University </h3>
                      </li>
                      <li>
                        {" "}
                        <div className="circle ml-2">
                          {" "}
                          <i class="fas fa-pencil-alt"></i>
                        </div>
                      </li>
                      <li>
                        {" "}
                        <div className="circle ml-2">
                          <i class="fas fa-trash-alt"></i>
                        </div>
                      </li>
                    </ul>
                    <div className="pl-4 applicable">
                      <p className="">Master of computer</p>
                      <p>Applications (MCA)</p>
                      <p>2019-2012</p>
                    </div>
                  </div>
                  <div className="associate">
                    <h3>Associated with us</h3>
                    <a href="" className="text-success">
                      abcalinks
                    </a>
                    <p>71% job succeess</p>
                  </div>
                </Col>
                <Col sm={8} className="pl-0">
                  <div className="right-area">
                    <div className="job-profile">
                      <div>
                        <h3>Expert front end devloper||</h3>
                        <h3>Mern/mean/mevn</h3>
                      </div>
                      <div className="job-quality">
                        <ul>
                          <li>
                            <h4>24.00hr</h4>
                          </li>
                          <li>
                            {" "}
                            <div className="circle ml-2">
                              {" "}
                              <i class="fas fa-pencil-alt"></i>
                            </div>
                          </li>
                          <li>
                            <div className="circle ml-2">
                              {" "}
                              <i class="fas fa-link"></i>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="mt-4">
                      I'm a Javascript full-stack developer with over 5+ years
                      of experience and a deep understanding of the full web
                      development stack, including Front-end, development with
                      pixel-perfect designing.
                    </p>
                    <p className="">
                      I'm a Javascript full-stack developer with over 5+ years
                      of experience and a deep understanding of the full web
                      development stack, including Front-end, development with
                      pixel-perfect designing.
                    </p>
                    <div className="border-bottom"></div>
                    <div className="work-history mt-4">
                      <h2 className="float-left">Work History</h2>
                      <div className="clearfix"></div>
                      <div className="">
                        <Tabs
                          defaultActiveKey="profile"
                          id="uncontrolled-tab-example"
                        >
                          <Tab eventKey="home" title="Completed Job (33)">
                            <div className="content-tab">
                              <p className="text-success font-weight-bold">
                                Dev needed for Vue.js, Firestore / Firebase
                                Functions Web App
                              </p>
                              <div className="rating-div d-flex mb-2">
                                <div>
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                </div>
                                <div>
                                  <strong>3.20</strong>Dec 30, 2020 - Jan 17,
                                  2021
                                </div>
                                <div>
                                  {" "}
                                  <div className="circle ml-2">
                                    {" "}
                                    <i class="fas fa-share-alt"></i>
                                  </div>
                                </div>
                              </div>
                              <p>
                                Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it
                                to make a type specimen book. It has survived
                                not only five centuries
                              </p>
                              <div className="d-flex justify-content-between">
                                <p>
                                  <strong>$40.00</strong>
                                </p>
                                <p>Fixed Price</p>
                                <p></p>
                              </div>
                            </div>
                          </Tab>
                          <Tab eventKey="profile" title="IN Progress (3)">
                            <div className="content-tab">
                              <p className="text-success font-weight-bold">
                                Dev needed for Vue.js, Firestore / Firebase
                                Functions Web App
                              </p>
                              <div className="rating-div d-flex mb-2">
                                <div>
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                </div>
                                <div>
                                  <strong>3.20</strong>Dec 30, 2020 - Jan 17,
                                  2021
                                </div>
                                <div>
                                  {" "}
                                  <div className="circle ml-2">
                                    {" "}
                                    <i class="fas fa-share-alt"></i>
                                  </div>
                                </div>
                              </div>
                              <p>
                                Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it
                                to make a type specimen book. It has survived
                                not only five centuries
                              </p>
                              <div className="d-flex justify-content-between">
                                <p>
                                  <strong>$40.00</strong>
                                </p>
                                <p>Fixed Price</p>
                                <p></p>
                              </div>
                            </div>
                          </Tab>
                        </Tabs>
                        <Pagination className="mt-4 ">
                          <Pagination.First />
                          <Pagination.Prev />

                          <Pagination.Item>{1}</Pagination.Item>
                          <Pagination.Item>{2}</Pagination.Item>
                          <Pagination.Item active>{3}</Pagination.Item>
                          <Pagination.Item>{4}</Pagination.Item>

                          <Pagination.Item>{5}</Pagination.Item>
                          <Pagination.Next />
                          <Pagination.Last />
                        </Pagination>
                        <div className="border-bottom pt-3"></div>
                        <div className="portfolio mt-3">
                          <div className="d-flex">
                            <div>
                              <h3>Portfolio (3)</h3>
                            </div>
                            <div>
                              {" "}
                              <div className="circle ml-2">
                                <i class="fas fa-plus"></i>
                              </div>
                            </div>

                            <div>
                              {" "}
                              <div className="circle ml-2">
                                <i class="fas fa-arrows-alt-v"></i>
                              </div>
                            </div>
                          </div>
                          <Row className="portfolio-img">
                            <Col sm={4}>
                              <div className="inner-content">
                                <img src="https://analyticsindiamag.com/wp-content/uploads/2020/01/top-10-DS-projects.png" />
                                <p className="text-success">mcx sure gin</p>
                                {/* <div className="overlay-effect">
                                <div className="d-flex">
                                  <div className="circle ml-2">
                                    <i class="fas fa-arrows-alt-v"></i>
                                  </div>
                                  <div className="circle ml-2">
                                    <i class="fas fa-arrows-alt-v"></i>
                                  </div>
                                </div>
                              </div> */}
                              </div>
                            </Col>
                            <Col sm={4}>
                              <div className="inner-content">
                                <img src="https://analyticsindiamag.com/wp-content/uploads/2020/01/top-10-DS-projects.png" />
                                <p className="text-success">mcx sure gin</p>
                              </div>
                            </Col>
                            <Col sm={4}>
                              <div className="inner-content">
                                <img src="https://analyticsindiamag.com/wp-content/uploads/2020/01/top-10-DS-projects.png" />
                                <p className="text-success">mcx sure gin</p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className="border-bottom pt-4"></div>
                        <div className="mt-3 skills">
                          <h3>Skills</h3>
                          <div className="d-flex justify-content-between tags">
                            <div className="tag">React</div>
                            <div className="tag">React</div>
                            <div className="tag">React</div>
                            <div className="tag">React</div>
                            <div className="tag">React</div>
                            <div className="tag">React</div>

                            <div className="tag">React</div>
                            <div className="tag">React</div>
                          </div>
                          <div className="border-bottom pt-4"></div>
                        </div>
                        <div className="catalog mt-3">
                          <div className="d-flex justify-content-between align-items-center">
                            <h3>
                              Your Project Catalog
                              <Badge variant="primary" className="ml-2">
                                New
                              </Badge>
                            </h3>
                            <div>
                              <Button
                                variant="outline-primary"
                                className="mr-3"
                              >
                                Manage Products
                              </Button>
                            </div>
                          </div>
                          <p>
                            Projects are a new way to earn on Upwork that helps
                            you do more of the work you love to do. Create
                            project offerings that highlight your strengths and
                            attract more clients.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <div className="textimonals">
                <div className="top-content d-flex justify-content-between align-items-center">
                  <div>
                    <h3>Testimonials</h3>
                    <p>Endorsent from past</p>
                  </div>
                  <div>
                    <div className="circle ml-2">
                      <i class="fas fa-plus"></i>
                    </div>
                  </div>
                </div>
                <div className="content-circle">
                  <img src="/images/seo.png" />
                  <p class="font-weight-bold pt-4">
                    Showcase your skills with non-Upwork client testimonials
                  </p>
                  <p className="text-success">Request for testimonail</p>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <div className="textimonals">
                <div className="top-content d-flex justify-content-between align-items-center">
                  <div>
                    <h3>Certifications</h3>
                  </div>
                  <div>
                    <div className="circle ml-2">
                      <i class="fas fa-plus"></i>
                    </div>
                  </div>
                </div>
                <div className="content-circle">
                  <img src="/images/trophy.png" />
                  <p class="font-weight-bold pt-4">
                    Add certifications to highlight your best skills
                  </p>
                  <p className="text-success">Add Certification</p>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <div className="textimonals">
                <div className="top-content d-flex justify-content-between align-items-center">
                  <div>
                    <h3>Employment History</h3>
                  </div>
                  <div>
                    <div className="circle ml-2">
                      <i class="fas fa-plus"></i>
                    </div>
                  </div>
                </div>
                <div className="info d-flex justify-content-between">
                  <div>
                    <p className="font-weight-bold">
                      Senior Full stack Developer | Freelance
                    </p>
                    <p>September 2016 - Present</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="circle">
                      <i class="fas fa-plus"></i>
                    </div>
                    <div className="circle ml-2">
                      <i class="fas fa-pencil-alt"></i>
                    </div>
                  </div>
                </div>
                <div className="border-bottom"></div>
                <div className="info d-flex justify-content-between">
                  <div>
                    <p className="font-weight-bold">
                      Senior Full stack Developer | Freelance
                    </p>
                    <p>September 2016 - Present</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="circle">
                      <i class="fas fa-plus"></i>
                    </div>
                    <div className="circle ml-2">
                      <i class="fas fa-pencil-alt"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <div className="textimonals">
                <div className="top-content d-flex justify-content-between align-items-center">
                  <div>
                    <h3>Other EXperiences</h3>
                  </div>
                  <div>
                    <div className="circle ml-2">
                      <i class="fas fa-plus"></i>
                    </div>
                  </div>
                </div>
                <div className="info d-flex justify-content-between">
                  <div>
                    <p className="font-weight-bold">Project Manager</p>
                    <p>September 2016 - Present</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="circle">
                      <i class="fas fa-plus"></i>
                    </div>
                    <div className="circle ml-2">
                      <i class="fas fa-pencil-alt"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
