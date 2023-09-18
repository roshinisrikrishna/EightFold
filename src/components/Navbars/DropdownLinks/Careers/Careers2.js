import React, { useState } from "react";

// reactstrap components
import { Container, Row, Col, Card } from "reactstrap";

import logo from "../../../../assets/img/careers.jpg";

import { motion } from "framer-motion";


const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      duration: 1, // Duration set to 1000ms (1 second)
      ease: "easeInOut", // Use a valid easing function here
    },
  }),
};

function Typography() {
  const [dropdownVisible, setDropdownVisible] = useState([false, false, false]);

  const toggleDropdown = (index) => {
    const updatedVisibility = [...dropdownVisible];
    updatedVisibility[index] = !updatedVisibility[index];
    setDropdownVisible(updatedVisibility);
  };
  return (
    <>
    
      <div
        style={{
          
          background: "linear-gradient(to right, #000 70%, #263440)",
          color: "#FFF",
          display: "flex",
          flexDirection: "column", // Display items in a column
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "100%", // Adjust this value to match the screen width
        }}
      >
          <Container 
            style={{
marginTop: "-5%",
              background: "#fff",
              maxWidth: "98%",
              height: "100%", // Adjust the height as needed
              padding: "3%",
              borderRadius: "0.5vw",
              justifyContent: "center",
              textAlign: "center",
              lineHeight: "1.2em"
            }}
          >
            <h4
              style={{
                color: "#484B58",
                fontWeight: "normal",
                fontFamily: "roboto, sans-serif",
                fontSize: "120%",
lineHeight: "2em"
                // maxWidth: "70%"
                            }}
              
            >
              We believe every person — including you — deserves the right job. 
<br/>
Join our mission to help everyone fulfill their potential  and change         
<br />
  the future of work.          
            </h4>
          

          </Container>
        
        
          <Container className="mt-5" style={{ maxWidth: "100%",minHeight: "100vh", paddingTop: "100px" }}>
        <Container className="ml-3 mt-5" style={{ maxWidth: "100%",paddingBottom: "150px" }}>
          <Row>
            
            <Col md="5" style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start" }}>
  <Container className="pr-5" style={{ position: "relative" }}>
    <img
      src={logo}
      alt="Eightfold.ai Logo"
      className="navbar-logo"
      style={{ width: "100%", height: "100%", marginTop: "0px", borderRadius: "15px" }} // Adjust the margin-top value as needed
    />
    
  </Container>
 
</Col>
<Col md="7" className="">
              <Container className="mt-2" style={{display: "flex", justifyContent: "flex-start", alignItems: "flex-start"}}>
                <Row>
                  <Col>
                    <h2 style={{ 
  background: "-webkit-linear-gradient(top, #FFFFFF, #1eb5e3)",
  WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "160%", 
                fontWeight: 900,
                lineHeight: "1.5em", 
                fontFamily: "Museo Sans Rounded, sans-serif" }}>
                    Autonomy, innovation, ownership,<br />
                     and good people. The innovation I've <br />
                     witnessed at Eightfold has also been <br />
                     tremendous. People take ownership<br />
                      of their work, which allows us to be <br />
                      creative and try new things.</h2>

            <div className="elementor-element color-bar" 
                      // style={{alignItems: "flex-start",justifyContent: "flex-start"}}
                      >
        <div className="elementor-testimonial__cite:before" style={{
            content: "",
            width: "240px",
            height: "3px",
            position: "relative",
            top: 0,
            left: "25%",
            transform: "translateX(-50%)",
            marginBottom: "20px",
            background: "linear-gradient(115.67deg, #008FBF 15.9%, #7E3A77 67.54%)",
            borderRadius: "5px",
                  }}></div>
            </div>
          
    <h2 style={{ 
                fontSize: "100%", 
                fontWeight: 500,
                lineHeight: "1.5em", 
                fontFamily: "Museo Sans Rounded, sans-serif" }}>
                    Eightfold employee</h2>
                    </Col>
                </Row>
              </Container>
            </Col>


          </Row>
          <Container style={{alignItems: "center", justifyContent: "center", textAlign: "center"}}>
          <motion.button
  className="hover-white-button"
            style={{
              borderRadius: "60px",
    color: "#fff",
              backgroundColor: "#2285ba",
              border: "none",
    cursor: "pointer",
    marginTop: "20px",
    fontWeight: "bolder",
    fontSize: "80%", // Set font size relative to viewport width
    maxWidth: "80%", // Ensure the button takes up the full width
    padding: "1.1% 4%", // Set padding as a percentage of the button's width and height
    fontFamily: "Museo Sans Rounded, sans-serif",
            }}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={1}
          >
  View open roles
</motion.button>
</Container>
        </Container>
        </Container>

        
      </div>
    </>
  );
}

export default Typography;

