import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import lead1 from "../../../../assets/img/lead1.webp";
import lead2 from "../../../../assets/img/lead2.jpg";
import lead3 from "../../../../assets/img/lead3.webp";
import lead4 from "../../../../assets/img/lead4.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
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
      duration: 1,
      ease: "easeInOut",
    },
  }),
};


function Company3() {
  const [pills, setPills] = useState("2");
  const [dropdownVisible, setDropdownVisible] = useState([false, false, false]);

  const toggleDropdown = (index) => {
    const updatedVisibility = [...dropdownVisible];
    updatedVisibility[index] = !updatedVisibility[index];
    setDropdownVisible(updatedVisibility);
  };

  return (
    <>
      <div
        className=""
        style={{
          background: "rgb(250, 250, 250)",
}}
      >
      <Container
          className="pt-5 pb-5"
          style={{ 
  maxWidth: "95%", 
  // display: "flex", 
  // flexDirection: "row", 
  marginTop: "5%", 
  justifyContent: "center", 
  alignItems: "center",
          }}
        >
    <h2 
    className="pt-3"
style={{
  color: "#484B58",
  fontFamily: "Museo Sans Rounded, sans-serif",
        fontWeight: 900,
        fontSize: "32px",
      }}
                >
Office locations
                  </h2>

<Row style={{ display: "flex", flexWrap: "wrap" }}>
            <Col
              xs={12}
              md={6}
              xl={6}
              style={{ margin: "10px 0", display: "flex" }}
            >
<motion.Card
                style={{ 
   borderTop: "none",
   borderRight: "none",
   borderBottom: "none",
   background: "rgb(255, 255, 255)",
   borderRadius: "10px",
   height: "100%",
   borderLeftTopRadius: "20px",
   borderLeftBottomRadius: "20px",
   flex: 1,
   display: "flex",
   flexDirection: "column",
   alignItems: "flex-start",
   margin: "0 0",
   width: "100%",
   borderLeft: "10px solid transparent",
   borderImage:
     "linear-gradient(to bottom, #0582a8, #013f52, #a90be3) 1",
   borderImageSlice: "1",
}}
variants={fadeInAnimationVariants}
initial="initial"
whileInView="animate"
viewport={{ once: true }}
custom={2}
              >
    <h4
                  style={{
                    paddingLeft: "5%",
                    paddingRight: "2%",
fontWeight: 900,
                    maxWidth: "100%", 
    fontFamily: "Museo Sans Rounded, sans-serif",
                    fontSize: "72%",
    letterSpacing: "0.3em",
    }}
                >
WORLDWIDE CORPORATE HEADQUARTERS
 </h4>
 <p
                  style={{
                    paddingTop: "5%",
                    paddingLeft: "5%",
                    paddingRight: "2%",
fontSize: "80%",
                    fontWeight: 700,
                    color: "#484B58",
                    lineHeight: "0.05em",
                  }}
                >
                  Eightfold AI® Inc
                </p>
    <p
                  style={{
                    paddingLeft: "5%",
                    paddingRight: "2%",
fontWeight: 400,
                    fontSize: "80%",
                    maxWidth: "100%",
                    color: "#484B58",
}}
                >
2625 Augustine Drive<br />
Suite 601<br />
Santa Clara, CA 95054<br />
888-325-8222<br />
<span style={{ color: "#2285ba" }}>
                    Contact Sales<br />
info@eightfold.ai
                  </span>
                </p>
   </motion.Card>
</Col>
<Col
              xs={12}
              md={6}
              xl={6}
              style={{ margin: "10px 0", display: "flex" }}
            >
<motion.Card
  style={{
    borderTop: "none",
  borderRight: "none",
  borderBottom: "none",
  background: "rgb(255, 255, 255)",
  borderRadius: "10px",
  height: "100%",
  borderLeftTopRadius: "20px",
  borderLeftBottomRadius: "20px",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  margin: "0 0",
  width: "100%",
  borderLeft: "10px solid transparent",
  borderImage:
    "linear-gradient(to bottom, #0582a8, #013f52, #a90be3) 1",
  borderImageSlice: "1",
  }}
  variants={fadeInAnimationVariants}
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
  custom={3}
>
<h4
                  style={{
                    paddingLeft: "5%",
                    paddingRight: "2%",
fontWeight: 900,
                    maxWidth: "100%", 
    fontFamily: "Museo Sans Rounded, sans-serif",
                    fontSize: "72%",
    letterSpacing: "0.3em",
    }}
                >
    EUROPE
  </h4>

  <div style={{ display: "flex", width: "100%" }}>
    <div
      style={{
        flex: 1,
        paddingLeft: "5%",
        paddingRight: "2%",
        paddingTop: "5%",
        maxWidth: "100%",
      }}
    >
      {/* Left half of the card */}
      <p
        style={{
          // paddingLeft: "5%",
                      // paddingRight: "2%",
          fontWeight: 700,
maxWidth: "100%",
          color: "#484B58",
          
                      // fontFamily: "Museo Sans Rounded, sans-serif",
                      fontSize: "80%",
        }}
      >
Eightfold AI UK Limited
      </p>
      <p
        style={{
// paddingLeft: "5%",
                      // paddingRight: "2%",
          fontWeight: 400,
          maxWidth: "100%",
          color: "#484B58",

                      // fontFamily: "Museo Sans Rounded, sans-serif",
                      fontSize: "80%",
                   
        }}
      >
        Highlands House<br />
Basingstoke Road<br />
Spencers Wood<br />
Reading<br />
RG7 1NT<br />
        <span style={{ color: "#2285ba" }}>
          info@eightfold.ai
        </span>
      </p>
    </div>

    <div
      style={{
        flex: 1,
        paddingLeft: "8%",
        paddingRight: "2%",
        paddingTop: "5%",
        maxWidth: "100%",
      }}
    >
      {/* Right half of the card */}
      <p
        style={{
          // paddingLeft: "5%",
                      // paddingRight: "2%",
          fontWeight: 700,
maxWidth: "100%",
          color: "#484B58",
          
                      // fontFamily: "Museo Sans Rounded, sans-serif",
                      fontSize: "80%",
        }}
      >
Eightfold AI IRE Limited
                    </p>
      <p
        style={{
maxWidth: "100%",
          fontWeight: 400,
          fontSize: "80%",
          color: "#484B58",
        }}
      >
        32 Merrion Street Upper Dublin <br />
        Ireland Dublin<br />
D02KW80<br />
        <span style={{ color: "#2285ba" }}>
          info@eightfold.ai
        </span>
      </p>
    </div>
  </div>
</motion.Card>

</Col>
<Col
              xs={12}
              md={6}
              xl={6}
              style={{ margin: "10px 0", display: "flex" }}
            >
<motion.Card
 style={{
  borderTop: "none",
  borderRight: "none",
  borderBottom: "none",
  background: "rgb(255, 255, 255)",
  borderRadius: "10px",
  height: "100%",
  borderLeftTopRadius: "20px",
  borderLeftBottomRadius: "20px",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  margin: "0 0",
  width: "100%",
  borderLeft: "10px solid transparent",
  borderImage:
    "linear-gradient(to bottom, #0582a8, #013f52, #a90be3) 1",
  borderImageSlice: "1",
}}
  variants={fadeInAnimationVariants}
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
  custom={3}
>
<h4
                  style={{
                    paddingLeft: "5%",
                    paddingRight: "2%",
fontWeight: 900,
                    maxWidth: "100%", 
    fontFamily: "Museo Sans Rounded, sans-serif",
                    fontSize: "72%",
    letterSpacing: "0.3em",
    }}
                >
ASIA PACIFIC​
  </h4>

  <div style={{ display: "flex", width: "100%" }}>
    <div
      style={{
        flex: 1,
        paddingLeft: "5%",
        paddingRight: "2%",
        paddingTop: "5%",
        maxWidth: "100%",
      }}
    >
      
      <p
        style={{
          // paddingLeft: "5%",
                        // paddingRight: "2%",
          fontWeight: 700,
maxWidth: "100%",
          color: "#484B58",
          
                        // fontFamily: "Museo Sans Rounded, sans-serif",
                        fontSize: "80%",
        }}
      >
Eightfold AI India Pvt Ltd
      </p>
      <p
        style={{
maxWidth: "100%",
          fontWeight: 400,
          fontSize: "80%",
          color: "#484B58",
        }}
      >
     WeWork Berger Delhi One<br />
Floor 18, C-001/A2, Sector 16B,<br />
Noida, Uttar Pradesh, 201301<br />
        <span style={{ color: "#2285ba" }}>
        india@eightfold.ai

</span>
      </p>
    </div>

    <div
      style={{
        flex: 1,
        paddingLeft: "5%",
        paddingRight: "2%",
        paddingTop: "5%",
        maxWidth: "100%",
// overflowWrap: "break-word", // Add this line to allow text to break and wrap
      }}
    >
      {/* Right half of the card */}
      <p
        style={{
          // paddingLeft: "5%",
                      // paddingRight: "2%",
          fontWeight: 700,
maxWidth: "100%",
          color: "#484B58",
          
                      // fontFamily: "Museo Sans Rounded, sans-serif",
                      fontSize: "80%",
        }}
      >
Eightfold AI India Pvt Ltd
      </p>
      <p
        style={{
maxWidth: "100%",
          fontWeight: 400,
          fontSize: "80%",
          color: "#484B58",
        }}
      >
        WeWork Prestige Cube<br />
Site No. 26 Laskar, Hosur Road,<br />
Bengaluru, Karnataka 560029<br />
        <span style={{ color: "#2285ba" }}>
        india@eightfold.ai
        </span>
      </p>
    </div>
  </div>
</motion.Card>

</Col>
          </Row>
</Container>
      </div>
    </>
  );
}

export default Company3;
