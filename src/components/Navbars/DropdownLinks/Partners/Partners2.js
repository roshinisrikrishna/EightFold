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
    <>
    
      <div
        style={{
          // background: "#000",
          // color: "#FFF",
          display: "flex",
          flexDirection: "column", // Display items in a column
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "100%", // Adjust this value to match the screen width
        }}
      >
          <Container 
            style={{
marginTop: "-10%",

              background: "#fff",
              maxWidth: "98%",
              height: "auto", // Adjust the height as needed
              padding: "0vw",
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
                fontSize: "22px",
lineHeight: "2em"
                // maxWidth: "70%"
                            }}
              
            >
              We're proud to work with exceptional partners who share our vision of talent
            <br/>
greatness. Together, we're revolutionizing the ways organizations manage talent,         
<br />
  create more equitable workforces, drive innovation, and shape the future of work.           </h4>
          </Container>
       
 

        
      </div>
    </>
  );
}

export default Typography;

