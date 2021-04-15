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
import Select from "react-select";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
function Contrct() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <>
      <TopBar />
      <Container>
        <div className="contracts">
          <h2>Contracts</h2>
          <Card>
            <Card.Body>
              <div className="search-field">
                <Form.Control type="" placeholder="Search Contracts" />
              </div>
              <div className="">
                <div>
                  <label>Sort By</label>
                  <Select
                    // value={selectedOption}
                    // onChange={this.handleChange}
                    options={options}
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>

      <Footer />
    </>
  );
}

export default Contrct;
