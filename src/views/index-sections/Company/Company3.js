import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import leftImg from "../../../assets/img/company_left.webp";
import rightImg from "../../../assets/img/company_right.webp";

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
      <div className="mb-5">
        <Container className=" mb-5" style={{  }}>
          <Row>
            <Col md="7" style={{ marginTop: "5%" }}>
              <Container className="mt-5">
                <Row>
                  <Col>
                    <h3 style={{ fontSize: "32px", fontWeight: 600, fontFamily: "Museo Sans Rounded, sans-serif" }}>
                      Illuminating career paths, opening up a world of possibilities
                    </h3>
                    <p style={{ color: "#484b58", fontSize: "17px", maxWidth: "500px", fontWeight: 500, fontFamily: "Roboto, sans-serif" }}>
                      In Buddhism, the Eightfold Path of eight practices guides each person to wisdom 
                      and nirvana. Inspired by this ideal, we want to empower everyone to discover and
                      pursue the right career path, where they can showcase their skills, take pride 
                      in their work, and ultimately, enjoy their careers and help others along the way.
                    </p>
                    <a href="" style={{color: "#008FBF"}}>Work with us</a>

                  </Col>
                </Row>
              </Container>
            </Col>
            <Col md="5" style={{ marginRight: "-20%", display: "flex", justifyContent: "flex-end", alignItems: "flex-end" }}>
              <div style={{ position: "relative" }}>
                <img
                  src={rightImg}
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
                  src={leftImg}
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
                    <h3 style={{ fontSize: "32px", fontWeight: 600, fontFamily: "Museo Sans Rounded, sans-serif" }}>
                      Achieving talent greatness takes a great team
                    </h3>
                    <p style={{ color: "#484b58", fontSize: "17px", maxWidth: "500px", fontWeight: 500, fontFamily: "Roboto, sans-serif" }}>
                      We’ve assembled the world’s best and brightest in AI and HR to help our customers create 
                      and build their ideal future workforces. Our experts in machine learning, artificial 
                      intelligence, search, personalization, enterprise solutions, and more are dedicated to 
                      delivering technology at scale to support our mission. Help us make it happen.
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
