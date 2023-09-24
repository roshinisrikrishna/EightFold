import React, { useState, useEffect } from "react";
// Import React, useState, and useEffect from React library

import { Link } from "react-router-dom";
// Import the Link component from React Router DOM

import {
  Button, 
  Container, 
  Row, 
  NavbarBrand, 
  UncontrolledTooltip,
  Col,
} from "reactstrap";
// Import various components and styles from the Reactstrap library

import logo from "../../../assets/img/logoeightfold-fotor-bg-remover-20230823133343.png";
// Import an image from assets

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
// Import FontAwesome icons

function Examples() {
  // Define state variables for showing/hiding lists
  const [showList, setShowList] = useState(false);
  const [showPrivacyList, setShowPrivacyList] = useState(false);

  // Define a state variable "screenWidth" and a function "setScreenWidth" to manage it
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Function to update screen width when the window is resized
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  // Attach an event listener for window resize when the component mounts
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Effect to hide the list on small screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 700) {
        setShowList(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Toggle function for showing/hiding the "Learn More" list
  const toggleList = () => {
    if (window.innerWidth < 700) {
      setShowList(!showList);
    }
  };

  // Toggle function for showing/hiding the "Privacy & Legal" list
  const togglePrivacyList = () => {
    if (window.innerWidth < 700) {
      setShowPrivacyList(!showPrivacyList);
    }
  };

  return (
  <div
      style={{
        backgroundColor: "#242f40",
        color: "#FFFFFF",
        minHeight: "80vh", // Ensure the content covers the whole viewport
        display: "flex",
        flexDirection: "column", // Stack content vertically
        justifyContent: "space-between", // Space content vertically
      }}
    >
       <Container className="mt-5">
          <Row>
            <Col lg="6" md="6">
              
            <NavbarBrand className="last-logo"
                  href=""
                  target="_blank"
                  id="navbar-brand"
                  style={{
                fontFamily: "Museo Sans Rounded, sans-serif",
                fontSize: "28px",
                color: "white",
              }}
                >
                  <img
                      src={logo}
                      alt="Eightfold.ai Logo"
                      className="navbar-logo"
                      style={{
                  width: "5%",
                  height: "auto",
                  // marginRight: "2px",
                }}
                    />
                   
                  eightfold.ai
                </NavbarBrand>
                  <p className="last-p"
              style={{
                paddingTop: "20px", // Adjust spacing for responsiveness
                fontSize: "14px",
                maxWidth: "90vw", // Adjust maximum width for responsiveness
                fontWeight: 400,
                // margin: "0 auto", // Center the text horizontally
              }}
            >
                    Powered by AI, the Eightfold Talent Intelligence Platform empowers
              organizations to recruit and retain a diverse global workforce and
              provides applications for enterprises to build on their talent's
              existing skills.
            </p>
{screenWidth > 700 && (
<Container >
  <div className="symbols"
              style={{
                // maxWidth: "50%",
                paddingTop: "20px", // Adjust spacing for responsiveness
                // margin: "0 auto", // Center the social icons horizontally
              }}
            >
    <Row>
      <Col>
  <a href="" target="_blank" id="tooltip86114138">
    <i className="fab fa-twitter text-white"></i>
    <UncontrolledTooltip delay={0} target="tooltip86114138">
      Follow us
    </UncontrolledTooltip>
  </a>
</Col>
  <Col>
  <a href="" target="_blank" id="tooltip735272548">
    <i className="fab fa-facebook-square text-white"></i>
    <UncontrolledTooltip delay={0} target="tooltip735272548">
      Like us
    </UncontrolledTooltip>
  </a>
</Col>
  <Col>
  <a href="" target="_blank" id="tooltip647117716">
    <i className="fab fa-linkedin text-white"></i>
    <UncontrolledTooltip delay={0} target="tooltip647117716">
      Follow us
    </UncontrolledTooltip>
  </a>
</Col>
  <Col>
  <a
                    href="https://www.youtube.com/user/YourYouTubeChannel"
                    target="_blank"
                    id="tooltip123456789"
                  >
    <i className="fab fa-youtube text-white"></i>
    <UncontrolledTooltip delay={0} target="tooltip123456789">
      Subscribe on YouTube
    </UncontrolledTooltip>
  </a>
  </Col>
  </Row>
</div>

        <div
              className="copyright mt-5"
              id="copyright" 
                    style={{
                paddingTop: "2vw", // Adjust spacing for responsiveness
                paddingBottom: "0vw", // Adjust spacing for responsiveness

                fontSize: "14px",
                fontWeight: 400,
                color: "white",
                textAlign: "left",
              }}
            >
          © {new Date().getFullYear()}, Designed by{" "}
          <a
            // href="https://www.invisionapp.com?ref=nukr-dark-footer"
            target="_blank"
          >
            RFLabs
          </a>
          . Coded by{" "}
          <a
            // href="https://www.creative-tim.com?ref=nukr-dark-footer"
            target="_blank"
          >
            RFLABS
          </a>
          .
        </div>
        </Container>
)}


            </Col>
            <Col lg="6" md="6">
              <Row>
                
              <Col md="6"  id="learnMoreDropdown" className={showList ? "show-list learn-col" : "learn-col"}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
        onClick={toggleList}
      >
        <h4 className="last-h4" style={{ fontSize: "18px", fontWeight: 600 }}>Learn More</h4>
        {screenWidth <= 700 && (
                  <FontAwesomeIcon
                    icon={showList ? faAngleUp : faAngleDown}
                    style={{
                      fontSize: "18px",
                      color: "#05c5fa",
                      marginLeft: "5px",
                    }}
                  />
                )}
      </div>
      <div className="learn-more-list">
        <p style={{ fontSize: "14px" }}>Leadership</p>
        <p style={{ fontSize: "14px" }}>Talent Intelligence Platform</p>
        <p style={{ fontSize: "14px" }}>Careers</p>
        <p style={{ fontSize: "14px" }}>Contact us</p>
        <p style={{ fontSize: "14px" }}>Responsible AI at Eightfold</p>
      </div>
    </Col>
                
    
    <Col md="6" id="privacyMoreDropdown" className={showPrivacyList ? "show-privacy-list privacy-col" : "privacy-col"}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
        onClick={togglePrivacyList}
      >
        <h4 className="last-h4" style={{ fontSize: "18px", fontWeight: 600 }}>
          Privacy & Legal{" "}
        </h4>
        {screenWidth <= 700 && (
                  <FontAwesomeIcon
                    icon={showPrivacyList ? faAngleUp : faAngleDown}
                    style={{
                      fontSize: "18px",
                      color: "#05c5fa",
                      marginLeft: "5px",
                    }}
                  />
                )}
      </div>
        <div className="privacy-list">
          <p style={{ fontSize: "14px" }}>Privacy Policy</p>
          <p style={{ fontSize: "14px" }}>Governance</p>
          <p style={{ fontSize: "14px" }}>Cookie notice</p>
          <p style={{ fontSize: "14px" }}>
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="check-icon"
            />
            Your California privacy choices
          </p>
        </div>
    </Col>
    {screenWidth < 700 && (
<Container  style={{
    width: "95vw",
    // backgroundColor: "rgba(0, 0, 0, 0.8)", // Change the background color if needed
  }} >
  <div
              style={{
                maxWidth: "50%",
                paddingTop: "20px", // Adjust spacing for responsiveness
                // margin: "0 auto", // Center the social icons horizontally
              }}
            >
    <Row>
      <Col>
  <a href="" target="_blank" id="tooltip86114138">
    <i className="fab fa-twitter text-white"></i>
    <UncontrolledTooltip delay={0} target="tooltip86114138">
      Follow us
    </UncontrolledTooltip>
  </a>
</Col>
  <Col>
  <a href="" target="_blank" id="tooltip735272548">
    <i className="fab fa-facebook-square text-white"></i>
    <UncontrolledTooltip delay={0} target="tooltip735272548">
      Like us
    </UncontrolledTooltip>
  </a>
</Col>
  <Col>
  <a href="" target="_blank" id="tooltip647117716">
    <i className="fab fa-linkedin text-white"></i>
    <UncontrolledTooltip delay={0} target="tooltip647117716">
      Follow us
    </UncontrolledTooltip>
  </a>
</Col>
  <Col>
  <a
                    href="https://www.youtube.com/user/YourYouTubeChannel"
                    target="_blank"
                    id="tooltip123456789"
                  >
    <i className="fab fa-youtube text-white"></i>
    <UncontrolledTooltip delay={0} target="tooltip123456789">
      Subscribe on YouTube
    </UncontrolledTooltip>
  </a>
  </Col>
  </Row>
</div>

        <div
              className="copyright mt-5"
              id="copyright" 
                    style={{
                paddingTop: "2vw", // Adjust spacing for responsiveness
                paddingBottom: "0vw", // Adjust spacing for responsiveness

                fontSize: "14px",
                fontWeight: 400,
                color: "white",
                textAlign: "left",
              }}
            >
          © {new Date().getFullYear()}, Designed by{" "}
          <a
            // href="https://www.invisionapp.com?ref=nukr-dark-footer"
            target="_blank"
          >
            RFLabs
          </a>
          . Coded by{" "}
          <a
            // href="https://www.creative-tim.com?ref=nukr-dark-footer"
            target="_blank"
          >
            RFLABS
          </a>
          .
        </div>
        </Container>
)}
              </Row>
            </Col>
          </Row>
        </Container>
        <style>
        {`
        /* CSS */
        @media (max-width: 700px) {
          .learn-more-list {
            display: none;
          }
          #learnMoreDropdown.show-list .learn-more-list {
            display: block;
          }
          .show-list {
            border-bottom: 1px solid #ccc !important;
          }
        }

        @media (max-width: 700px) {
          .privacy-list {
            display: none;
          }
          #privacyMoreDropdown.show-privacy-list .privacy-list {
            display: block;
          }
        }

        /* CSS for screen width 280px to 540px */
        @media only screen and (min-width: 280px) and (max-width: 766px) {
          
          
         
            .last-logo {
              font-size: 18px !important;
              
            }
           
             .last-p{
               font-size: 14px !important;
               font-weight: 400 !important;
               color: rgb(238,238,238) !important;'
               line-height: 1.8em !important;
               max-width: 87vw !important;


  
             }
             .last-h4{
              font-size: 16px !important;
              // border-bottom: 1px solid #ccc !important;
             }  
             .learn-col{
              border-bottom: 0.5px solid #ccc !important;
              

             }
             .privacy-col{
              border-bottom: 0.5px solid #ccc !important;
              

             }
            
            
           
             }
        @media only screen and (min-width: 767px) and (max-width: 912px) {

  
          .navbar-brand {
            font-size: 26px !important;
            
          }
         
           .last-p{
             font-size: 14px !important;
             font-weight: 400 !important;
             color: rgb(238,238,238) !important;'
             line-height: 1.8em !important;
             max-width: 30vw !important;


           }
           .last-h4{
            font-size: 16px !important;
            // border-bottom: 1px solid #ccc !important;
           }  
         
            .symbols{
              max-width: 70% !important;
              padding-top: 30% !important;
            }
            
          
          
         
           }
        @media only screen and (min-width: 1024px) {
          
          
  
          .last-logo {
            font-size: 24px !important;
            margin-left: -10% !important;

            
          }
          .last-logo img{
            width: 8% !important;
            // margin-left: -10% !important;

            
          }
         
           .last-p{
             font-size: 13px !important;
             font-weight: 400 !important;
             color: rgb(238,238,238) !important;'
             line-height: 1.8em !important;
             max-width: 32vw !important;
             margin-left: -10% !important;



           }
           .last-h4{
            font-size: 18px !important;
            // border-bottom: 1px solid #ccc !important;
            // margin-left: -15% !important;
            

           }  
           .learn-more-list p{
            font-size: 13px !important;
            font-weight: 400 !important;

           }
           .privacy-list p{
            font-size: 13px !important;
            font-weight: 400 !important;

           }
         
         
            .symbols{
              max-width: 40% !important;
              margin-left: -15% !important;
              padding-top: 15% !important;
            }
            .copyright{
              font-size: 12px !important;

              margin-left: -15% !important;

            }

             }
        
        `}
      </style>
      </div>
     
   
  );
}

export default Examples;
