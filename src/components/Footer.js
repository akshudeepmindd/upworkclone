import React from "react";
import { Navbar, Nav, Button, Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <>
      <div className="footer">
        <Container>
          <Row>
            <Col sm={3}>
              <div className="footer-links">
                <ul>
                  <li>
                    <Link to="">About Us</Link>
                  </li>
                  <li>
                    <Link to="">Feedback</Link>
                  </li>
                  <li>
                    <Link to="">Community</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col sm={3}>
              <div className="footer-links">
                <ul>
                  <li>
                    <Link to="">Trust, Safety & Security</Link>
                  </li>
                  <li>
                    <Link to="">Help & Support</Link>
                  </li>
                  <li>
                    <Link to="">Upwork Foundation</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col sm={3}>
              <div className="footer-links">
                <ul>
                  <li>
                    <Link to="">Terms of service</Link>
                  </li>
                  <li>
                    <Link to="">Privcy Policy</Link>
                  </li>
                  <li>
                    <Link to="">Assesibility</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col sm={3}>
              <div className="footer-links">
                <ul>
                  <li>
                    <Link to="">Dektop App</Link>
                  </li>
                  <li>
                    <Link to="">Cookie POlicy</Link>
                  </li>
                  <li>
                    <Link to="">Enterprise Solutions</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <div className="social-links">
            <div>
              <ul>
                <li>
                  <Link to="">Follow Us</Link>
                </li>
                <li>
                  <Link to="">
                    <div className="circle">
                      <i class="fab fa-facebook-f"></i>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <div className="circle">
                      <i class="fab fa-linkedin-in"></i>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <div className="circle">
                      <i class="fab fa-twitter"></i>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <div className="circle">
                      <i class="fab fa-youtube"></i>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <div className="circle">
                      <i class="fab fa-instagram"></i>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="mob-links">
                <li>
                  <Link to="">Mobile App</Link>
                </li>
                <li>
                  <Link to="">
                    <div className="circle">
                      <i class="fab fa-apple"></i>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <div className="circle">
                      <i class="fas fa-robot"></i>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <p className="copyright">© 2015 - 2021 Upwork® Global Inc.</p>
        </Container>
      </div>

      {props.children}
    </>
  );
}

export default Footer;
