import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import lead1 from "../../../../assets/img/lead1.webp";
import lead2 from "../../../../assets/img/lead2.jpg";
import lead3 from "../../../../assets/img/lead3.webp";
import lead4 from "../../../../assets/img/lead4.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function Company3() {
  const [pills, setPills] = useState("2");
  const [dropdownVisible, setDropdownVisible] = useState([false, false, false]);

  const toggleDropdown = (index) => {
    const updatedVisibility = [...dropdownVisible];
    updatedVisibility[index] = !updatedVisibility[index];
    setDropdownVisible(updatedVisibility);
  };

  return (
    <>
      <div className="mt-5 mb-5">
        <Container className="mt-5 mb-5" style={{ paddingTop: "5vh" }}>
          <Row>
            <Col md="7" style={{ marginTop: "5%" }}>
              <Container className="mt-5">
                <Row>
                  <Col>
                    <h3 style={{ fontSize: "3vw", fontWeight: 600, fontFamily: "Museo Sans Rounded, sans-serif" }}>
                    AI thought leaders​
                    </h3>
                    <p style={{ color: "#484b58", fontSize: "1.5vw", maxWidth: "500px", fontWeight: 500, fontFamily: "Roboto, sans-serif" }}>
                    Our AI thought leaders drive innovation and are shaping the future of talent acquisition and management. 
                    They are experts in AI, machine learning, data science, and business dedicated to creating exceptional 
                    workforces through cutting-edge solutions.
                    </p>
                    <a href="" style={{color: "#008FBF"}}>Work with us</a>

                  </Col>
                </Row>
              </Container>
            </Col>
            <Col md="5" style={{ marginRight: "-20%", display: "flex", justifyContent: "flex-end", alignItems: "flex-end" }}>
              <div style={{ position: "relative" }}>
                <img
                  src={lead1}
                  alt="Eightfold.ai Logo"
                  className="navbar-logo"
                  style={{ width: "100%", height: "auto", marginTop: "20%", borderRadius: "15px" }}
                />
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="mt-5 mb-5" style={{ paddingTop: "5vh" }}>
          <Row>
            <Col md="6" style={{ display: "flex", justifyContent: "left", alignItems: "flex-start" }}>
              <div style={{ position: "relative" }}>
                <img
                  src={lead2}
                  alt="Eightfold.ai Logo"
                  className="navbar-logo"
                  style={{ width: "200%", height: "auto", marginTop: "20%", borderRadius: "15px" }}
                />
              </div>
            </Col>
            <Col md="6" style={{ marginTop: "5%", justifyContent: "left", alignItems: "flex-end" }}>
              <Container className="mt-5">
                <Row>
                  <Col>
                    <h3 style={{ fontSize: "3vw", fontWeight: 600, fontFamily: "Museo Sans Rounded, sans-serif" }}>
                    Economists
                    </h3>
                    <p style={{ color: "#484b58", fontSize: "1.5vw", maxWidth: "500px", fontWeight: 500, fontFamily: "Roboto, sans-serif" }}>
                    Our economists use data to promote a skills-based approach that encourages diversity and more inclusive 
                    workforces. Their expertise in economics, statistics, and data science helps our customers build exceptional
                     teams and drive business success.
                    </p>
                    <a href="" style={{color: "#008FBF"}}>Meet the team</a>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
        <Container className="mt-5 mb-5" style={{ paddingTop: "5vh" }}>
          <Row>
            <Col md="7" style={{ marginTop: "5%" }}>
              <Container className="mt-5">
                <Row>
                  <Col>
                    <h3 style={{ fontSize: "3vw", fontWeight: 600, fontFamily: "Museo Sans Rounded, sans-serif" }}>
                    HR and people experts
                    </h3>
                    <p style={{ color: "#484b58", fontSize: "1.5vw", maxWidth: "500px", fontWeight: 500, fontFamily: "Roboto, sans-serif" }}>
                    Our HR and people experts are dedicated to transforming talent management through innovative AI-powered 
                    solutions and change management practices that transform workforces into productive powerhouses.
                    </p>
                    <a href="" style={{color: "#008FBF"}}>Work with us</a>

                  </Col>
                </Row>
              </Container>
            </Col>
            <Col md="5" style={{ marginRight: "-20%", display: "flex", justifyContent: "flex-end", alignItems: "flex-end" }}>
              <div style={{ position: "relative" }}>
                <img
                  src={lead3}
                  alt="Eightfold.ai Logo"
                  className="navbar-logo"
                  style={{ width: "100%", height: "auto", marginTop: "20%", borderRadius: "15px" }}
                />
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="mt-5 mb-5" style={{ paddingTop: "5vh" }}>
          <Row>
            <Col md="6" style={{ display: "flex", justifyContent: "left", alignItems: "flex-start" }}>
              <div style={{ position: "relative" }}>
                <img
                  src={lead4}
                  alt="Eightfold.ai Logo"
                  className="navbar-logo"
                  style={{ width: "200%", height: "auto", marginTop: "20%", borderRadius: "15px" }}
                />
              </div>
            </Col>
            <Col md="6" style={{ marginTop: "5%", justifyContent: "left", alignItems: "flex-end" }}>
              <Container className="mt-5">
                <Row>
                  <Col>
                    <h3 style={{ fontSize: "3vw", fontWeight: 600, fontFamily: "Museo Sans Rounded, sans-serif" }}>
                    Advisory board
                    </h3>
                    <p style={{ color: "#484b58", fontSize: "1.5vw", maxWidth: "500px", fontWeight: 500, fontFamily: "Roboto, sans-serif" }}>
                    These thought leaders share business expertise and feedback from a variety of backgrounds and experiences to 
                    help shape our mission, strategy, products, and services so that we can best serve our customers in every 
                    way.
                    </p>
                    <a href="" style={{color: "#008FBF"}}>Meet the team</a>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Company3;
