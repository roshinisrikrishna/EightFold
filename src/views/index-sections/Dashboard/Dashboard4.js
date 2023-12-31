// Importing necessary modules and components from React, Reactstrap, and other libraries
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

// Creating styled components for animations
const ZoomIn = styled.div`animation: 2s ${keyframes`${zoomIn}`}`;
const BounceIn = styled.div`animation: 2s ${keyframes`${bounceInRight}`}`;

function Dashboard4() {
  // State variables
  const [pills, setPills] = useState("2");
  const [dropdownVisible, setDropdownVisible] = useState([false, false, false]);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const imageRef = useRef(null);

  // State to track the screen width
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Effect to observe intersection with an element for triggering animation
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

  // Function to toggle dropdown visibility
  const toggleDropdown = (index) => {
    const updatedVisibility = [...dropdownVisible];
    updatedVisibility[index] = !updatedVisibility[index];
    setDropdownVisible(updatedVisibility);
  };

  // Function to update screen width when the window is resized
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  // Effect to attach and clean up window resize event listener
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
        className="mt-5 mb-5 why-main-container"
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
              <Container className="why-container mt-2" style={{ marginLeft: "-20px" }}>
                <Row>
                  <Col>
                    {/* Heading */}
                    <h2
                      className="why-h2"
                      style={{
                        fontWeight: 700,
                        fontFamily: "Museo Sans Rounded, sans-serif",
                        fontSize: "195%",
                      }}
                    >
                      Why Eightfold
                    </h2>

                    {/* Paragraph */}
                    <p
                      className="why-p"
                      style={{
                        fontSize: "17px",
                        fontWeight: 500,
                        textAlign: "left",
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
                      Great talent teams deserve a great platform. That's why we
                      built a single AI platform that does it all:
                    </p>

                    {/* Dropdown 1 */}
                    <div className="dropdown ml-2">
                      <p
                        className="why-p1"
                        style={{
                          fontSize: "18px",
                          fontWeight: 500,
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
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
                        <div className="why-dropdown-content">
                          <p className="why-dropdown-content" style={{ fontSize: "14px", fontWeight: 400 }}>
                            Powered by deep-learning AI, we surface insights when
                            and where you need them most →
                          </p>
                        </div>
                      )}
                    </div>
                    <hr style={{ border: "1px solid #585959" }} />

                    {/* Dropdown 2 */}
                    <div className="dropdown ml-2">
                      <p
                        className="why-p1"
                        style={{
                          fontSize: "18px",
                          fontWeight: 500,
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
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
                          <p className="why-dropdown-content" style={{ fontSize: "14px", fontWeight: 400 }}>
                            We harness the data of 1B+ career trajectories and
                            1M+ skills worldwide to give a truly global view of
                            talent and skills insights. Learn more about
                            responsible AI in HR →
                          </p>
                        </div>
                      )}
                    </div>
                    <hr style={{ border: "1px solid #585959" }} />

                    {/* Dropdown 3 */}
                    <div className="dropdown ml-2">
                      <p
                        className="why-p1"
                        style={{
                          fontSize: "18px",
                          fontWeight: 500,
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
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
                            transform: dropdownVisible[2] ? "rotate(180deg)" : "rotate(0deg)",
                          }}
                        />
                      </p>

                      {dropdownVisible[2] && (
                        <div className="dropdown-content">
                          <p className="why-dropdown-content" style={{ fontSize: "14px", fontWeight: 400 }}>
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

            {/* Column for the image */}
            <Col
              xl="6" lg="6" md="6" xs="12"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ position: "relative" }}>
                <div ref={imageRef}>
                  <div style={{ position: "relative" }}>
                    {/* Conditionally apply animation */}
                    {animationCompleted && (
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
                          }}
                        />
                      </ZoomIn>
                    )}
                    {/* Create a black box behind the image */}
                    <BounceIn>
                      <div className="dashboard-black-box"
                        style={{
                          position: "absolute",
                          bottom: "-25%",
                          right: "-15%",
                          width: "40vw",
                          height: "85%",
                          background: "black",
                          borderBottomLeftRadius: "80px",
                          zIndex: 1,
                        }}
                      ></div>
                    </BounceIn>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Inline CSS for media queries */}
      <style>
        {`
         /* Media query for screens less than 700px wide */
         @media (max-width: 700px) {
           /* Hide the black box */
           .dashboard-black-box {
             display: none;
           }
         }

         /* CSS for screen width 280px to 540px */
         @media only screen and (min-width: 280px) and (max-width: 766px) {
           .why-container{     
            width: 95vw !important;
            margin-top: -10% !important;
         
             .why-h2 {
               font-size: 28px !important;
               font-weight : 700 !important;
               text-align: center !important;
             }
            
             .why-p {
              font-size: 16px !important;
              padding-bottom: 10% !important;
            }
            
            .why-p1 {
              font-size: 18px !important;
            }
            
            .why-p1:focus {
             text-decoration: underline !important;
           }
            
            .why-dropdown-content {
              font-size: 16px !important;
            }
           }
          }
         @media only screen and (min-width: 767px) and (max-width: 912px) {
          .why-main-container{ 
            min-height: 65vh !important;
          } 

          .why-container{     
            width: 45vw !important;
            margin-top: -10% !important;
            margin-left: -15% !important;
            margin-bottom: -55% !important;
         
             .why-h2 {
               font-size: 28px !important;
               font-weight : 700 !important;
             }
            
             .why-p {
              font-size: 18px !important;
              padding-bottom: 10% !important;
            }
            
            .why-p1 {
              font-size: 18px !important;
              width: 40vw !important;
            }
            
            .why-p1:focus {
             text-decoration: underline !important;
           }
            
            .why-dropdown-content {
              font-size: 16px !important;
            }
           }
           .dashboard-black-box{
            width:41vw !important;
            right: -17% !important;
          }
        }
         @media only screen and (min-width: 1024px) {
          .why-container{     
            width: 47vw !important;
            margin-top: -10% !important;
            margin-left: -10% !important;
         
             .why-h2 {
               font-size: 40px !important;
               font-weight : 700 !important;
             }
            
             .why-p {
              font-size: 18px !important;
              padding-bottom: 10% !important;
              width: 38vw !important;
            }
            
            .why-p1 {
              font-size: 20px !important;
              width: 40vw !important;
            }
            
            .why-p1:focus {
             text-decoration: underline !important;
           }
            
            .why-dropdown-content {
              font-size: 16px !important;
            }
          }
        }
         /* CSS for screen width above 1023px */
         `}
      </style>
    </>
  );
}

export default Dashboard4;
