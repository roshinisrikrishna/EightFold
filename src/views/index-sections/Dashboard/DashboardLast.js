import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, 
  Container, 
  Row, 
  NavbarBrand, 
  UncontrolledTooltip,
  Col
 } from "reactstrap"; // Import UncontrolledTooltip
import logo from "../../../assets/img/logoeightfold-fotor-bg-remover-20230823133343.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

// core components

function Examples() {
  return (
  
      <div style={{ backgroundColor: "#242f40", color: "#FFFFFF", height: "80vh"}}>
        <div className="space-50"></div>
       <Container className="mb-5">
          <Row>
            <Col lg="6" md="6">
              
            <NavbarBrand
                  href="https://demos.creative-tim.com/now-ui-kit-react/#/index?ref=nukr-index-navbar"
                  target="_blank"
                  id="navbar-brand"
                  style={{fontFamily: "Museo Sans Rounded, sans-serif",
                fontSize: "28px", color: "white"}}
                >
                  <img
                      src={logo}
                      alt="Eightfold.ai Logo"
                      className="navbar-logo"
                      style={{ width: "30px", height: "auto", marginRight: "2px" }} // Adjust the width as needed
                    />
                   
                  eightfold.ai
                </NavbarBrand>
                  <p style={{paddingTop: "40px",fontSize: "14px", width: "350px", fontWeight: 400}}>
                    Powered by AI, the Eightfold Talent Intelligence Platform empowers organizations to recruit and retain a diverse global workforce and provides applications for enterprises 
                    to build on their talent's existing skills.</p>

  <div style={{maxWidth: "200px", paddingTop: "60px"}}>
    <Row>
      <Col>
  <a href="https://www.twitter.com/creativetim?ref=creativetim" target="_blank" id="tooltip86114138">
    <i className="fab fa-twitter text-white"></i>
    <UncontrolledTooltip delay={0} target="tooltip86114138">
      Follow us
    </UncontrolledTooltip>
  </a>
</Col>
  <Col>
  <a href="https://www.facebook.com/creativetim?ref=creativetim" target="_blank" id="tooltip735272548">
    <i className="fab fa-facebook-square text-white"></i>
    <UncontrolledTooltip delay={0} target="tooltip735272548">
      Like us
    </UncontrolledTooltip>
  </a>
</Col>
  <Col>
  <a href="https://www.linkedin.com/company-beta/9430489/?ref=creativetim" target="_blank" id="tooltip647117716">
    <i className="fab fa-linkedin text-white"></i>
    <UncontrolledTooltip delay={0} target="tooltip647117716">
      Follow us
    </UncontrolledTooltip>
  </a>
</Col>
  <Col>
  <a href="https://www.youtube.com/user/YourYouTubeChannel" target="_blank" id="tooltip123456789">
    <i className="fab fa-youtube text-white"></i>
    <UncontrolledTooltip delay={0} target="tooltip123456789">
      Subscribe on YouTube
    </UncontrolledTooltip>
  </a>
  </Col>
  </Row>
</div>

        <div className="copyright" id="copyright" 
                    style={{paddingTop: "70px",fontSize: "14px",  fontWeight: 400, color: "white"}}>
          © {new Date().getFullYear()}, Designed by{" "}
          <a
            // href="https://www.invisionapp.com?ref=nukr-dark-footer"
            target="_blank"
          >
            Invision
          </a>
          . Coded by{" "}
          <a
            // href="https://www.creative-tim.com?ref=nukr-dark-footer"
            target="_blank"
          >
            Creative Tim
          </a>
          .
        </div>

            </Col>
            <Col lg="6" md="6">
              <Row>
                
                <Col md="6">
                  <h4 style={{fontSize: "18px", fontWeight: 600}}>Learn More</h4>
                  <p style={{fontSize: "14px"}}>Leadership</p>
                  <p style={{fontSize: "14px"}}>Talent Intelligence Platform</p>
                  <p style={{fontSize: "14px"}}>Careers</p>
                  <p style={{fontSize: "14px"}}>Contact us</p>
                  <p style={{fontSize: "14px"}}>Responsibe AI at Eightfold</p>

                </Col>
                <Col md="6">
                  <h4 style={{fontSize: "18px", fontWeight: 600}}>Privacy & Legal</h4>
                  <p style={{fontSize: "14px"}}>Privacy Policy</p>
                  <p style={{fontSize: "14px"}}>Governance</p>
                  <p style={{fontSize: "14px"}}>Cookie notice</p>
                  <p style={{ fontSize: "14px" }}>
  <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
  <FontAwesomeIcon icon="fa-solid fa-circle-xmark" style={{color: 'white'}} />
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
