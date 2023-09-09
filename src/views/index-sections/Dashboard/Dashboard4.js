import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import logo from "../../../assets/img/HomePage-WhyEF-Evergreen_2-1024x714.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";


function Dashboard4() {
  const [pills, setPills] = useState("2");
  const [dropdownVisible, setDropdownVisible] = useState([false, false, false]);

  const toggleDropdown = (index) => {
    const updatedVisibility = [...dropdownVisible];
    updatedVisibility[index] = !updatedVisibility[index];
    setDropdownVisible(updatedVisibility);
  };

  return (
    <>
     <div className="mt-5 mb-5" style={{ backgroundColor: "#242f40", color: "#FFFFFF", minHeight: "100vh", paddingTop: "100px" }}>
        <Container className="mt-5 mb-5" style={{ paddingBottom: "150px" }}>
          <Row>
            <Col md="5" className="ml-auto mr-auto">
              <Container className="mt-2" style={{marginLeft:"-20px"}}>
                <Row>
                  <Col>
                    <h2 style={{ fontWeight: 700, fontFamily: "Museo Sans Rounded, sans-serif" }}>
                      Why Eightfold</h2>
                    <p style={{ fontSize: "17px", width: "480px", fontWeight: 500, fontFamily: "Roboto, sans-serif" }}>
                      Great talent teams deserve a great platform. That's why we built a single AI platform that does it all:
                    </p>
                    <div className="dropdown ml-2">
                      <p
                        style={{ fontSize: "20px", fontWeight: 500, cursor: "pointer" }}
                        onClick={() => toggleDropdown(0)}
                      >
                        Best-in-class intelligence and talent insights{" "}
                        <FontAwesomeIcon
                          icon={faAngleDown}
                          style={{ fontSize: "20px", marginLeft: "5px", transform: dropdownVisible[0] ? "rotate(180deg)" : "rotate(0deg)" }}
                        />
                      </p>
                      {dropdownVisible[0] && (
                        <div className="dropdown-content">
                          <p style={{ fontSize: "16px" }}>Powered by deep-learning AI, we surface insights when and where you need them most →</p>
                        </div>
                      )}
                    </div>
                    <hr style={{ border: "1px solid #585959" }} /> 
                     
                    <div className="dropdown ml-2">
  <p
    style={{ fontSize: "20px", fontWeight: 500, cursor: "pointer" }}
    onClick={() => toggleDropdown(1)}
  >
    Unparalleled AI technology helps you make better decisions{" "}
    <FontAwesomeIcon
      icon={faAngleDown}
      style={{ fontSize: "20px", marginLeft: "5px", transform: dropdownVisible[1] ? "rotate(180deg)" : "rotate(0deg)" }}
    />
  </p>
  {dropdownVisible[1] && (
    <div className="dropdown-content">
      <p style={{ fontSize: "16px" }}>We harness the data of 1B+ career trajectories and 1M+ skills worldwide to give a truly global view of talent and skills insights. Learn more about responsible AI in HR →</p>
    </div>
  )}
</div>
<hr style={{ border: "1px solid #585959" }} /> 

<div className="dropdown ml-2">
  <p
    style={{ fontSize: "20px", fontWeight: 500, cursor: "pointer" }}
    onClick={() => toggleDropdown(2)}
  >
    Our products are designed to deliver greatness{" "}
    <FontAwesomeIcon
      icon={faAngleDown}
      style={{ fontSize: "20px", marginLeft: "5px", transform: dropdownVisible[2] ? "rotate(180deg)" : "rotate(0deg)" }}
    />
  </p>
  {dropdownVisible[2] && (
    <div className="dropdown-content">
      <p style={{ fontSize: "16px" }}>Our Talent Intelligence Platform is easy to use, insightful, and delivers fast results →</p>
    </div>
  )}
</div>

                    </Col>
                </Row>
              </Container>
            </Col>
            <Col md="7" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <div style={{ position: "relative" }}>
    <img
      src={logo}
      alt="Eightfold.ai Logo"
      className="navbar-logo"
      style={{ width: "580px", height: "auto", marginTop: "0px", borderRadius: "15px", marginRight: "-40px" }} // Adjust the margin-top value as needed
    />
    
  </div>
 
</Col>


          </Row>
        </Container>
      </div>
    </>
  );
}

export default Dashboard4;
