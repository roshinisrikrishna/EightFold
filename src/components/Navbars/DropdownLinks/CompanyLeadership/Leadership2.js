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
          background: "linear-gradient(to right, #000 70%, #263440)",
          color: "#FFF",
          display: "flex",
          flexDirection: "column", // Display items in a column
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "100vw", // Adjust this value to match the screen width

        }}
      >
          <Container 
            style={{
              background: "#fff",
              maxWidth: "98%",
              height: "auto", // Adjust the height as needed
              padding: "2vw",
              borderRadius: "0.5vw",
              justifyContent: "center",
              textAlign: "center",
              marginTop: "-12%",

            }}
          >
            <h4
              style={{
                color: "#484B58",
                fontWeight: "normal",
                fontFamily: "roboto, sans-serif",
                fontSize: "22px"
                            }}
              
            >
              Our team has deep expertise in developing and implementing
              best-in-class 
            <br/>
               AI-powered HR technology that delivers results
            </h4>
          </Container>
        <motion.h2
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={1}
          style={{fontSize: "40px", paddingTop: "7vw", textAlign:"center"
        }}
        >
          Grounded in AI, passionate about talent
        </motion.h2>
        <motion.p
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={2}
          style={{fontSize: "17px", fontWeight: 400, textAlign: "center", maxWidth: "75%"}}
        >
          Our company started based on the mission of finding everyone the right career in the 
          world. Our founders come from some of the world’s leading tech companies, including 
          Google and Facebook. Together, they’ve applied their talents in search, machine 
          learning, and deep-learning AI to transform the talent industry by finding the best 
          roles for everyone while driving extraordinary business outcomes.
        </motion.p>
 <Row style={{
            maxWidth: "93%",
            // display: "flex",
            // flexWrap: "wrap" ,
            marginTop: "40px",
            // justifyContent: "center",
            // alignItems: "stretch",
            paddingBottom: "7vw"
          }}>

<Col xs={12} md={6} xl={6} style={{
  //  margin: "10px 0", 
   display: "flex" }}>

          <motion.Card
            style={{
              borderBottom: "2px solid transparent",
              borderRight: "2px solid transparent",
              borderLeft: "2px solid transparent",
              borderTop: "2px solid transparent",
              borderImage: "linear-gradient(to right, #a90bde, #002aeb) 2",
              padding: "4%",
              height: "auto",
              // flex: "0.5",
              // display: "flex",
              // flexDirection: "column",
              margin: "0 2px", 
              justifyContent: "center",
              alignItems: "flex-start",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={2}
          >
            <img src={img1} alt="Logo" style={{  width: "10vw", height: "auto" }} />
            <h4 style={{ fontWeight: 700, fontFamily: "Museo Sans Rounded, sans-serif", fontSize: "120%" }}>
              Ashutosh Garg
            </h4>
            <h4 style={{ marginTop : "0%", fontWeight: 500, fontFamily: "roboto, sans-serif", fontSize: "90%" }}>
              CEO & Co-Founder
            </h4>

            <p style={{ paddingTop: "5%", fontWeight: 400, fontSize: "70%" }}>
              With 6000+ research citations, 50+ patents, 35+ peer-reviewed research publications, and the
              outstanding PhD thesis award from UIUC for his PhD thesis in Machine Learning, it’s fair to say
              that Ashu is one of the world’s experts in machine learning.
            </p>

            <div className="dropdown">
              {dropdownVisible[0] && (
                <div className="dropdown-content">
                  <p style={{ fontWeight: 400, fontSize: "70%" }}>
                    Co-Author of the books “What’s Next for You – The Eightfold Path To Transforming The Way We
                    Hire And Manage Talent” and “Deep Talent – How to transform your organization and empower your
                    employees through AI.”
                  </p>
                </div>
              )}

              <p
                style={{
                  fontSize: "13px",
                  color: "#008FBF",
                  fontWeight: "normal",
                  cursor: "pointer",
                }}
                onClick={() => toggleDropdown(0)}
              >
                Expand{" "}
                <FontAwesomeIcon
                  icon={faAngleDown}
                  style={{
                    fontSize: "20px",
                    transform: dropdownVisible[0] ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </p>
            </div>
          </motion.Card>
</Col>
<Col xs={12} md={6} xl={6} style={{ 
  // margin: "10px 0", 
  display: "flex" 
  }}>

          <motion.Card
            style={{
              borderBottom: "2px solid transparent",
              borderRight: "2px solid transparent",
              borderLeft: "2px solid transparent",
              borderTop: "2px solid transparent",
              borderImage: "linear-gradient(to right, #a90bde, #002aeb) 2",
              padding: "5vw",
              height: "auto",
              // flex: "0.5",
              // display: "flex",
              // flexDirection: "column",
              margin: "0 2px", 
              justifyContent: "center",
              alignItems: "flex-start",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={2}
          >
  <img src={img2} alt="Logo" style={{ width: "10vw", height: "auto" }} />
  <h4
    style={{
      fontWeight: 700,
      fontFamily: "Museo Sans Rounded, sans-serif",
      fontSize: "20px",
      marginTop: "7%", // Margin from the top
    }}
  >
    Varun Kacholia
  </h4>
  <h4 style={{ marginTop : "0%", fontWeight: 500, fontFamily: "roboto, sans-serif", fontSize: "90%" }}>
    CEO & Co-Founder
  </h4>

  <p style={{ fontWeight: 400, fontSize: "70%" }}>
    Varun Kacholia is one of the world’s leaders when it comes to search, ranking and machine-learning. Prior to
    founding Eightfold, Varun led the News Feed team at Facebook and the YouTube Search and Recommendations team at
    Google.
  </p>
</motion.Card>
</Col>
</Row>


        
      </div>
    </>
  );
}

export default Typography;

