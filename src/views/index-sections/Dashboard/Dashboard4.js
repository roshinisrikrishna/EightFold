import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import logo from "../../../assets/img/HomePage-WhyEF-Evergreen_2-1024x714.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { zoomIn, bounceInRight } from "react-animations";
import { keyframes } from "styled-components";
import styled from "styled-components";

const ZoomIn = styled.div`animation: 2s ${keyframes`${zoomIn}`}`;
const BounceIn = styled.div`animation: 2s ${keyframes`${bounceInRight}`}`;

function Dashboard4() {
  const [pills, setPills] = useState("2");
  const [dropdownVisible, setDropdownVisible] = useState([false, false, false]);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const imageRef = useRef(null);

  // State to track the screen width
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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

  // Function to update screen width when the window is resized
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    // Attach the event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        className="mt-5 mb-5"
        style={{
          maxWidth: "100vw",
          backgroundColor: "#242f40",
          color: "#FFFFFF",
          minHeight: "100vh",
          paddingTop: "80px",
          paddingBottom: "0px",
        }}
      >
        <Container className="mt-5 mb-5" style={{ maxWidth: "90vw", paddingBottom: "150px" }}>
          <Row>
            <Col xl="6" lg="6" md="6" xs="12" className="ml-auto mr-auto">
              <Container className="mt-2" style={{ marginLeft: "-20px" }}>
                <Row>
                  <Col>
                    <h2
                      style={{
                        fontWeight: 700,
                        fontFamily: "Museo Sans Rounded, sans-serif",
                        fontSize: "195%",
                        textAlign: screenWidth < 700 ? "center" : "left", // Apply maxWidth based on screenWidth
                        // maxWidth: screenWidth < 700 ? "100vw" : "50vw", // Apply maxWidth based on screenWidth

                      }}
                    >
                      Why Eightfold
                    </h2>
                    <p
                      style={{
                        textAlign: screenWidth < 700 ? "center" : "left", // Apply maxWidth based on screenWidth
                        width: screenWidth < 700 ? "90vw" : "38vw",
                        fontSize: "17px",
                        fontWeight: 500,
                        textAlign: "left",
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
                      Great talent teams deserve a great platform. That's why we
                      built a single AI platform that does it all:
                    </p>
                    <div className="dropdown ml-2">
                    <p
  style={{
    fontSize: "18px",
    fontWeight: 500,
    cursor: "pointer",
    display: "flex",
    alignItems: "center", // Center the icon vertically
    justifyContent: "space-between", // Add this line

  }}
  onClick={() => toggleDropdown(0)}
>
  Best-in-class intelligence and talent insights
  <FontAwesomeIcon
    icon={faAngleDown}
    style={{
      fontSize: "14px",
      color: "#05c5fa",
      marginLeft: "2%",
      transform: dropdownVisible[0] ? "rotate(180deg)" : "rotate(0deg)",
    }}
  />
</p>

                      {dropdownVisible[0] && (
                        <div className="dropdown-content">
                          <p style={{ fontSize: "14px", fontWeight: 400 }}>
                            Powered by deep-learning AI, we surface insights when
                            and where you need them most →
                          </p>
                        </div>
                      )}
                    </div>
                    <hr style={{ border: "1px solid #585959" }} />

                    <div className="dropdown ml-2">
                    <p
  style={{
    fontSize: "18px",
    fontWeight: 500,
    cursor: "pointer",
    display: "flex",
    alignItems: "center", // Center the icon vertically
    justifyContent: "space-between", // Add this line

  }}
  onClick={() => toggleDropdown(1)}
>
  Unparalleled AI technology helps you make better decisions
  <FontAwesomeIcon
    icon={faAngleDown}
    style={{
      fontSize: "14px",
      color: "#05c5fa",
      transform: dropdownVisible[1] ? "rotate(180deg)" : "rotate(0deg)",
    }}
  />
</p>

                      {dropdownVisible[1] && (
                        <div className="dropdown-content">
                          <p style={{ fontSize: "14px", fontWeight: 400 }}>
                            We harness the data of 1B+ career trajectories and
                            1M+ skills worldwide to give a truly global view of
                            talent and skills insights. Learn more about
                            responsible AI in HR →
                          </p>
                        </div>
                      )}
                    </div>
                    <hr style={{ border: "1px solid #585959" }} />

                    <div className="dropdown ml-2">
                    <p
  style={{
    fontSize: "18px",
    fontWeight: 500,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between", // Add this line
  }}
  onClick={() => toggleDropdown(2)}
>
  Our products are designed to deliver greatness
  <FontAwesomeIcon
    icon={faAngleDown}
    style={{
      fontSize: "14px",
      color: "#05c5fa",
      fontWeight: 900,
      // marginLeft: "5px",
      transform: dropdownVisible[2] ? "rotate(180deg)" : "rotate(0deg)",
    }}
  />
</p>


                      {dropdownVisible[2] && (
                        <div className="dropdown-content">
                          <p style={{ fontSize: "14px", fontWeight: 400 }}>
                            Our Talent Intelligence Platform is easy to use,
                            insightful, and delivers fast results →
                          </p>
                        </div>
                      )}
                    </div>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col
              xl="6" lg="6" md="6" xs="12"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: screenWidth < 700 ? "100vw" : "50vw", // Apply maxWidth based on screenWidth
              }}
            >
              <div style={{ position: "relative" }}>
                <div ref={imageRef}>
                  <div style={{ position: "relative" }}>
                    {animationCompleted && ( // Conditionally apply the animation
                      <ZoomIn>
                        <img
                          src={logo}
                          alt="Eightfold.ai Logo"
                          className="navbar-logo"
                          style={{
                            position: "relative",
                            width: "100%",
                            height: "auto",
                            marginTop: "0px",
                            borderRadius: "15px",
                            marginRight: "-40px",
                            zIndex: 2,
                          }} // Adjust the margin-top value as needed
                        />
                      </ZoomIn>
                    )}
                    {/* Create a black box behind the image */}
                    {animationCompleted && screenWidth >= 700 && ( // Conditionally render the black box
                      <BounceIn>
                        <div
                          style={{
                            position: "absolute",
                            bottom: "-25%",
                            right: "-17%",
                            width: "42vw", // Adjust the width as needed
                            height: "85%", // Adjust the height as needed
                            background: "black",
                            borderBottomLeftRadius: "80px",
                            zIndex: 1,
                          }}
                        ></div>
                      </BounceIn>
                    )}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <style>
        {`
         /* Media query for screens less than 700px wide */
         @media (max-width: 700px) {
           /* Hide the black box */
           .dashboard-black-box {
             display: none;
           }
         }
         `}
      </style>
    </>
  );
}

export default Dashboard4;
