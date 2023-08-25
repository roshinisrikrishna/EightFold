import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import intImg from "../../assets/img/interface.webp";

// core components

function NucleoIcons() {
  return (
    <>
      <div className="mt-5 mb-5" style={{ background: "linear-gradient(to right, #328afa, #a903fc)", color: "#FFFFFF",  paddingTop: "100px" }}>
        <Container className="mt-5 mb-5" style={{ paddingBottom: "50px" }}>
          <Row>
            <Col md="5" className="ml-auto mt-5">
              <Container className="mt-2" style={{width:"500px" ,marginLeft:"-40px", marginRight: "-10px"}}>
                <Row>
                  <Col>
                    <h2 style={{ fontWeight: 600, 
                      fontFamily: "Museo Sans Rounded, sans-serif", fontSize: "46px" }}>Ready for greatness? Transform your talent process with AI.</h2>
                    
                    <button
  className="hover-white-button"
   style={{
    borderRadius: "60px",
    backgroundColor: "#fff",
    color: "#026df5",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
    fontWeight: "bolder",
    fontSize: "17px",
    width: "230px",
    padding: "12px",
    fontFamily: "Museo Sans Rounded, sans-serif"
  }}
>
  Request demo
</button>
                

                    </Col>
                </Row>
              </Container>
            </Col>
            <Col md="7" >
              <img
                src={intImg}
                alt="Eightfold.ai Logo"
                className="navbar-logo"
                style={{ width: "1080px", height: "auto" }} // Adjust the margin-top value as needed
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default NucleoIcons;
