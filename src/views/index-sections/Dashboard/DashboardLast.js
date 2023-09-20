import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Button, 
  Container, 
  Row, 
  NavbarBrand, 
  UncontrolledTooltip,
  Col,
 } from "reactstrap";
import logo from "../../../assets/img/logoeightfold-fotor-bg-remover-20230823133343.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

function Examples() {
  const [showList, setShowList] = useState(false);
  const [showPrivacyList, setShowPrivacyList] = useState(false);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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

  const toggleList = () => {
    if (window.innerWidth < 700) {
      setShowList(!showList);
    }
  };
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
              
            <NavbarBrand
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
                  <p
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

{screenWidth < 700 && (
<Container  style={{
    // position: "sticky",

    bottom: 0,
    left: 0,
    width: "95vw",
    // backgroundColor: "rgba(0, 0, 0, 0.8)", // Change the background color if needed
    zIndex: 999, // Adjust the z-index as necessary
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
            </Col>
            <Col lg="6" md="6">
              <Row>
                
              <Col md="6" id="learnMoreDropdown" className={showList ? "show-list" : ""}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
        onClick={toggleList}
      >
        <h4 style={{ fontSize: "18px", fontWeight: 600 }}>Learn More</h4>
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
                
    
    <Col md="6" id="privacyMoreDropdown" className={showPrivacyList ? "show-privacy-list" : ""}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
        onClick={togglePrivacyList}
      >
        <h4 style={{ fontSize: "18px", fontWeight: 600 }}>
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
        }

        @media (max-width: 700px) {
          .privacy-list {
            display: none;
          }
          #privacyMoreDropdown.show-privacy-list .privacy-list {
            display: block;
          }
        }
        
        `}
      </style>
      </div>
     
   
  );
}

export default Examples;
