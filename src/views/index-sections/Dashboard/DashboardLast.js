import React from "react";
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

// core components

function Examples() {
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
                maxWidth: "100%", // Adjust maximum width for responsiveness
                fontWeight: 400,
                // margin: "0 auto", // Center the text horizontally
              }}
            >
                    Powered by AI, the Eightfold Talent Intelligence Platform empowers
              organizations to recruit and retain a diverse global workforce and
              provides applications for enterprises to build on their talent's
              existing skills.
            </p>

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

            </Col>
            <Col lg="6" md="6">
              <Row>
                
                <Col md="6">
                  <h4 style={{ fontSize: "18px", fontWeight: 600 }}>Learn More</h4>
                  <p style={{ fontSize: "14px" }}>Leadership</p>
                  <p style={{ fontSize: "14px" }}>Talent Intelligence Platform</p>
                  <p style={{ fontSize: "14px" }}>Careers</p>
                  <p style={{ fontSize: "14px" }}>Contact us</p>
                  <p style={{ fontSize: "14px" }}>Responsibe AI at Eightfold</p>
                </Col>
                <Col md="6">
                  <h4 style={{ fontSize: "18px", fontWeight: 600 }}>
                  Privacy & Legal
                </h4>
                  <p style={{ fontSize: "14px" }}>Privacy Policy</p>
                  <p style={{ fontSize: "14px" }}>Governance</p>
                  <p style={{ fontSize: "14px" }}>Cookie notice</p>
                  <p style={{ fontSize: "14px" }}>
  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="check-icon"
                  />
  <FontAwesomeIcon
                    icon="fa-solid fa-circle-xmark"
                    style={{ color: "white" }}
                  />
      Your California privacy choices
</p>

                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
   
  );
}

export default Examples;
