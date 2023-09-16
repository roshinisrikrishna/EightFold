import React, { useState } from "react";

// reactstrap components
import { Container, Row, Col, Card, CardBody } from "reactstrap";

import logo from "../../../../assets/img/Globe-together-animated.svg";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

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
background: "linear-gradient(to right, #000 50%, #455e8f)",
          color: "#FFF",
          display: "flex",
          flexDirection: "column", // Display items in a column
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "100%", // Adjust this value to match the screen width
        }}
      >
         <Container className="" style={{ maxWidth: "100%",minHeight: "100vh", paddingTop: "100px" }}>
        <Container className="" style={{ maxWidth: "100%",paddingBottom: "150px" }}>
          <Row>
            
            <Col md="6" style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start" }}>
  <Container className="" style={{ position: "relative" }}>
  <Card style={{ 
    background: "transparent", 
    width: "900px", 
    left: "-70%"
  }}>
    <img
      src={logo}
      alt="Eightfold.ai Logo"
      className="navbar-logo"
      style={{ width: "100%", height: "auto", marginTop: "0px", borderRadius: "15px" }} // Adjust the margin-top value as needed
    />
     
  
  </Card>
   
    
  </Container>
 
</Col>
<Col md="6" className="pr-2">
              <Container className="" style={{paddingTop: "220px",display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Row>
                  <Col>
                    <h2 style={{ 
                fontSize: "450%", 
                fontWeight: 900,
                lineHeight: "1em", 
                fontFamily: "Museo Sans Rounded, sans-serif" }}>
                    Transforming work. One hire at a time.
                    </h2>

        

    <h2 style={{ 
      paddingTop: "50px",
                fontSize: "21px", 
                fontWeight: 600,
                lineHeight: "1.5em", 
                fontFamily: "roboto, sans-serif" }}>
                    We’re helping every worker and organization unlock their potential.</h2>

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
    maxWidth: "100%", // Ensure the button takes up the full width
    padding: "2% 6%", // Set padding as a percentage of the button's width and height
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
        </Col>
          </Row>
              </Container>
            </Col>


          </Row>
   
        </Container>
      </Container>
      
        
    </div>
</>
  );
}

export default Typography;

