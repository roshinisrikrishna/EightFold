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
import logo from "../../assets/img/logoeightfold-fotor-bg-remover-20230823133343.png";


// core components

function Examples() {
  return (
  
      <div className="mt-5 mb-5" style={{ backgroundColor: "#242f40", color: "#FFFFFF"}}>
        {/* <div className="space-50"></div>
        <Container className="mb-5">
          <Row>
            <Col lg="6" md="6">
            <NavbarBrand
                  href="https://demos.creative-tim.com/now-ui-kit-react/#/index?ref=nukr-index-navbar"
                  target="_blank"
                  id="navbar-brand"
                  style={{fontFamily: "Museo Sans Rounded, sans-serif",
                fontSize: "18px", color: "white"}}
                >
                  <img
                      src={logo}
                      alt="Eightfold.ai Logo"
                      className="navbar-logo"
                      style={{ width: "30px", height: "auto", marginRight: "2px" }} // Adjust the width as needed
                    />
                   
                  eightfold.ai
                </NavbarBrand>
                  <p className="mt-4" style={{fontSize: "14px", width: "350px", fontWeight: 400}}>
                    Powered by AI, the Eightfold Talent Intelligence Platform empowers organizations to recruit and retain a diverse global workforce and provides applications for enterprises 
                    to build on their talent's existing skills.</p>

  <div className="mt-5" style={{maxWidth: "200px"}}>
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
  <a href="https://github.com/creativetimofficial/now-ui-kit-react?ref=creativetim" target="_blank" id="tooltip331904895">
    <i className="fab fa-github text-white"></i>
    <UncontrolledTooltip delay={0} target="tooltip331904895">
      Star on Github
    </UncontrolledTooltip>
  </a>
  </Col>
  </Row>
</div>

        <div className="copyright mt-5" id="copyright" 
                    style={{fontSize: "14px",  fontWeight: 400, color: "white"}}>
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
                <Col md="4">
                  <h6>Learn More</h6>
                </Col>
                <Col md="6">
                  <h6>Privacy & Legal</h6>
                </Col>
              </Row>
            </Col>
          </Row> */}
        {/* </Container> */}
      </div>
   
  );
}

export default Examples;
