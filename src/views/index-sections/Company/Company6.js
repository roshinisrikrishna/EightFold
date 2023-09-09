import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import forbes from "../../../assets/img/forbes.webp";
import rightImg from "../../../assets/img/company_right.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion";

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

function Company6() {
  const [pills, setPills] = useState("2");
  const [dropdownVisible, setDropdownVisible] = useState([false, false, false]);

  const toggleDropdown = (index) => {
    const updatedVisibility = [...dropdownVisible];
    updatedVisibility[index] = !updatedVisibility[index];
    setDropdownVisible(updatedVisibility);
  };

  return (
    <>
      <div className="mt-5 mb-5">
        <Container className="mt-5 mb-5 ml-5 mr-auto" style={{ padding: "50px",
        // width: "1400px",
        fontFamily: "Museo Sans Rounded, sans-serif" ,
         background:
         "linear-gradient(to right , #199BC2, #043a4a)",
         color: "#FFFFFF",
         maxWidth: "1050px",
         borderTopLeftRadius: "80px",
         borderTopRightRadius: "25px",
         borderBottomLeftRadius: "25px",
         borderBottomRightRadius: "25px",


     }}>
          <Row>
          <Col md="12" style={{ marginTop: "-1%" ,height: "111%", color: "white", display: "flex", flexDirection: "row", alignItems: "center", borderTopRightRadius: "20px", borderBottomRightRadius: "20px" }}>

{/* First Column */}
<div style={{ flex: 1.2, display: "flex", justifyContent: "flex-start", alignItems: "center", height: "100%" }}>
  <img
    src={forbes}
    alt="Eightfold.ai Logo"
    className="navbar-logo"
    style={{ width: "100%", height: "auto", borderRadius: "15px" }}
  />
</div>
<div style={{ flex: 2, padding: "50px", color: "white" }}>
<h3 style={{ fontSize: "45px", fontWeight: 600,  marginBottom: "0" }}>
    Eightfold featured
</h3>
<h3 style={{ fontSize: "45px", fontWeight: 600,  marginTop: "-10px" }}>
    in Forbes AI 50 2023
</h3>

  <p style={{ fontSize: "17px", fontWeight: 500, marginTop: "-10px" }}>
  Forbes fifth annual list recognizes the most promising privately held global companies 
  building businesses out of artificial intelligence.
  </p>

  <motion.button
  style={{
    borderRadius: "60px",
    backgroundColor: "white", // Set the color to white
    color: "#199BC2", // Set the background color
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
    fontWeight: "bolder",
    fontSize: "15px",
    width: "180px",
    padding: "2%",
    fontFamily: "Museo Sans Rounded, sans-serif",
  }}
  variants={fadeInAnimationVariants}
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
  custom={1}
>
  Read article
</motion.button>

</div>

{/* Second Column */}

</Col>
                  

               
          </Row>
        </Container>

        <Container className="mt-5 ml-5 mr-auto" style={{ 
        // width: "1400px",
        fontFamily: "Museo Sans Rounded, sans-serif" ,
         background:
         "linear-gradient(to right , #3decf2 5%, #008BE8 95%)",
         color: "#FFFFFF",
         maxWidth: "1050px",
         borderRadius: "15px",
         marginBottom: "100px"
     }}>
  <Row>
    <Col md="12" style={{ height: "10%", color: "white", display: "flex", flexDirection: "row", alignItems: "center"}}>

      {/* First Column */}
      <div style={{ flex: 3, display: "flex", justifyContent: "center", alignItems: "center", height: "50%" }}>
        <img
          alt="..."
          className="n-logo"
          src={require("assets/img/dotted_waves-modified.png")}
          style={{ width: "25%", height: "auto", position: "absolute", top: "0%", left: "0.5%" }}
        />
      <h3 style={{ fontSize: "30px", fontWeight: 900, paddingTop: "30px" }}>
  Diversity.  Anonymization.  Prediction
</h3>

      </div>
      <div style={{ flex: 1, padding: "60px", color: "white" }}>
      <motion.button
  style={{
    borderRadius: "60px",
    backgroundColor: "white", // Set the color to white
    color: "#008FBF", // Set the background color
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
    fontWeight: 900, // Increase the fontWeight value for more boldness
    fontSize: "15px",
    // width: "300px",
    padding: "5% 15%",
    fontFamily: "Museo Sans Rounded, sans-serif",
  }}
  variants={fadeInAnimationVariants}
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
  custom={1}
>
  See our patents
</motion.button>

        <img
          alt="..."
          className="n-logo"
          src={require("assets/img/dotted_waves_reversed.png")}
          style={{ width: "25%", height: "auto", position: "absolute", bottom: "0%", right: "0.5%" }}
        />
      </div>
    </Col>
  </Row>
</Container>



     
      </div>
    </>
  );
}

export default Company6;
