import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import logo from "../../../assets/img/company_why.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { zoomIn } from "react-animations";
import { keyframes } from "styled-components";
import styled from "styled-components";

const ZoomIn = styled.div`animation: 1s ${keyframes`${zoomIn}`}`;

function Company5() {
  const [pills, setPills] = useState("2");
  const [dropdownVisible, setDropdownVisible] = useState([false, false, false]);

  const [animationCompleted, setAnimationCompleted] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !animationCompleted) {
          // Trigger animation when the image is in the viewport
          setAnimationCompleted(true);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Adjust the threshold as needed
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    // Cleanup the observer when the component unmounts
    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [animationCompleted]);

  const toggleDropdown = (index) => {
    const updatedVisibility = [...dropdownVisible];
    updatedVisibility[index] = !updatedVisibility[index];
    setDropdownVisible(updatedVisibility);
  };

  return (
    <>
     <div style={{ minHeight: "100vh", paddingTop: "10vh", minWidth: "100vw" }}>
        <Container className="mt-5 mb-5" style={{ paddingBottom: "150px" }}>
          <Row>
            <Col md="12" className="ml-auto mr-auto">
              <Container className="mt-2" style={{ marginLeft: "-20px" }}>
                <Row>
                  <Col>
                    <h2
                      style={{
                        fontWeight: 700,
                        fontFamily: "Museo Sans Rounded, sans-serif",
                        fontSize: "36px", // Responsive font size
                      }}
                    >
                      Why Eightfold
                    </h2>
                    <p
                      style={{
                        fontSize: "17px", // Responsive font size
                        maxWidth: "100vw",
                        fontWeight: 400,
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
                      Great talent teams deserve a great platform. That's why we built a single AI platform that does it all:
                    </p>
                    <div className="dropdown ml-2">
                      <p
                        style={{
                          fontSize: "18px", // Responsive font size
                          fontWeight: 500,
                          cursor: "pointer",
                        }}
                        onClick={() => toggleDropdown(0)}
                      >
                        Best-in-class intelligence and talent insights{" "}
                        <FontAwesomeIcon
                          icon={faAngleDown}
                          style={{
                            fontSize: "17px", // Responsive font size
                            color: "#11a6f7",
                            marginLeft: "5px",
                            transform: dropdownVisible[0] ? "rotate(180deg)" : "rotate(0deg)",
                          }}
                        />
                      </p>
                      {dropdownVisible[0] && (
                        <div className="dropdown-content">
                          <p style={{ fontSize: "14px", color: "#383838", fontWeight: "normal" }}>
                            Powered by deep-learning AI, we surface insights when and where you need them most →
                          </p>
                        </div>
                      )}
                    </div>
                    <hr style={{ border: "1px solid #d9d9d9" }} /> 
                     
                    <div className="dropdown ml-2">
  <p
    style={{
                          fontSize: "18px", // Responsive font size
                          fontWeight: 500,
                          cursor: "pointer",
                        }}
    onClick={() => toggleDropdown(1)}
  >
    Our products are designed to deliver greatness{" "}
    <FontAwesomeIcon
      icon={faAngleDown}
      style={{
                            fontSize: "17px", // Responsive font size
                            color: "#11a6f7",
                            marginLeft: "5px",
                            transform: dropdownVisible[1] ? "rotate(180deg)" : "rotate(0deg)",
                          }}
    />
  </p>
  {dropdownVisible[1] && (
    <div className="dropdown-content">
      <p style={{ fontSize: "14px", color: "#383838", fontWeight: "normal" }}>
                          Our Talent Intelligence Platform is easy to use, insightful, and delivers fast results →                          </p>
    </div>
  )}
</div>
<hr style={{ border: "1px solid #d9d9d9" }} /> 

<div className="dropdown ml-2">
  <p
    style={{
                          fontSize: "18px", // Responsive font size
                          fontWeight: 500,
                          cursor: "pointer",
                        }}
    onClick={() => toggleDropdown(2)}
  >
    Unparalleled AI technology helps you make better decisions{" "}
    <FontAwesomeIcon
      icon={faAngleDown}
      style={{
                            fontSize: "17px", // Responsive font size
                            color: "#11a6f7",
                            marginLeft: "5px",
                            transform: dropdownVisible[2] ? "rotate(180deg)" : "rotate(0deg)",
                          }}
    />
  </p>
  {dropdownVisible[2] && (
    <div className="dropdown-content">
      <p style={{ fontSize: "14px", color: "#383838", fontWeight: "normal" }}>
                          We harness the data of 1B+ career trajectories and 1M+ skills worldwide to give a 
                          truly global view of talent and skills insights. Learn more about responsible AI 
                          in HR →                          </p>
    </div>
  )}
</div>
<hr style={{ border: "1px solid #d9d9d9" }} />

                    </Col>
                </Row>
              </Container>
            </Col>
            <Col md="12" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <div style={{ position: "relative" }}>
<div ref={imageRef}>
                  {animationCompleted && ( // Conditionally apply the animation
                    <ZoomIn>
    <img
      src={logo}
      alt="Eightfold.ai Logo"
      className="navbar-logo"
      style={{
                    width: "70%", // Responsive width
                    // maxWidth: "580px", // Maximum width
                    height: "auto",
                    marginTop: "0px",
                    borderRadius: "15px",
                    marginRight: "-5vw", // Adjust margin-right for responsiveness
                  }}
    />
    </ZoomIn>
                  )}
                </div>
  </div>
 
</Col>


          </Row>
        </Container>
      </div>
    </>
  );
}

export default Company5;
