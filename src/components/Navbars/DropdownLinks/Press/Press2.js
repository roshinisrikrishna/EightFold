import React, { useState } from "react";

// reactstrap components
import { Container, Row, Col, Card } from "reactstrap";
import img1 from "../../../../assets/img/Ashutosh-Garg.webp";
import img2 from "../../../../assets/img/Varun-Kacholia.webp";

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
    <div style={{minHeight: "28vh",height: "100%",  
    background: "linear-gradient(rgba(0, 139, 232, 0.2), rgba(147, 112, 219, 0.2), rgba(255,255,255))",
    backdropFilter: "blur(10px)", // Add this line for blur effect    
              // color: "#FFF",
    // filter: "blur(60px)",
  }}
    >
    
      <div
        style={{
         
          display: "flex",
          flexDirection: "column", // Display items in a column
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "100%", // Adjust this value to match the screen width
        }}
      >
          <Container 
            style={{
              background: "#fff",
              maxWidth: "95%",
              height: "auto", // Adjust the height as needed
              padding: "2vw",
              borderRadius: "0.5vw",
              justifyContent: "center",
              textAlign: "center",
              marginTop: "-20px"
            }}
          >
              <h4
              style={{
                color: "#484B58",
                fontWeight: "normal",
                fontFamily: "roboto, sans-serif",
                fontSize: "2vw",
                // maxWidth: "70%"
                            }}
              
            >
              The latest news and announcements from the Eightfold AI team
            </h4>
            
          </Container>
        
 

        
      </div>
    </div>
  );
}

export default Typography;

