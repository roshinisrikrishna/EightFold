import React, {useState, useEffect} from "react";
import { Button, Container, Row, Col } from "reactstrap";
import intImg from "../../../assets/img/interface.webp";
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

function NucleoIcons() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Function to update screen width when the window is resized
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    // Attach the event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Container
        style={{
          background: "linear-gradient(to right, #008BE8, #5B4B6E)",
          color: "#FFFFFF",
          paddingTop: "5%",
          position: "relative",
          maxWidth: "100vw",
          justifyContent: "flex-start", alignItems:"flex-start",
                textAlign:"left",
        }}
      >
        <img
          alt="..."
          className="n-logo"
          src={require("assets/img/dotted_waves.png")}
          style={{
            width: "50%",
            height: "auto",
            position: "absolute",
            top: "0",
            left: "0",
          }}
        />
        <Container style={{ paddingBottom: "50px" }}>
          <Row>
            {screenWidth <700 && (
                <Col md="6">
              <motion.img
                src={intImg}
                alt="Eightfold.ai Logo"
                className="navbar-logo"
                style={{ width: "100%", height: "auto" }}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={1}
              />
            </Col>
                          )}
            <Col md="6" className="mt-5">
              <Container
                className="mt-2"
                style={{  maxWidth: screenWidth < 700 ? "100vw" : "50vw",
                justifyContent: screenWidth < 700 ? "center" : "flex-start",
                alignItems: screenWidth < 700 ? "center" : "flex-start",
                textAlign: screenWidth < 700 ? "center" : "left",
                 marginLeft: "0", marginRight: "0" }}
              >
                <Row>
                  

                  <Col>
                    <motion.h2
                      style={{
                        fontWeight: 600,
                        fontFamily: "Museo Sans Rounded, sans-serif",
                        fontSize: screenWidth < 700 ? "8vw" : "3.8vw",
                      }}
                      variants={fadeInAnimationVariants}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      custom={2}
                    >
                      Ready for greatness? Transform your talent process with AI.
                    </motion.h2>

                    <motion.button
                      className="hover-white-button"
                      style={{
                        borderRadius: "60px",
                        backgroundColor: "#fff",
                        color: "#026df5",
                        border: "none",
                        cursor: "pointer",
                        marginTop: "10px",
                        fontWeight: "bolder",
                        fontSize: "85%",
                        maxWidth: "100%",
                        padding: "2% 7%",
                        fontFamily: "Museo Sans Rounded, sans-serif",
                      }}
                      variants={fadeInAnimationVariants}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      custom={3}
                    >
                      Request demo
                    </motion.button>
                  </Col>
                 
                </Row>
              </Container>
            </Col>
             {screenWidth >= 700 && (
             <Col md="6">
              <motion.img
                src={intImg}
                alt="Eightfold.ai Logo"
                className="navbar-logo"
                style={{ width: "100%", height: "auto" }}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={1}
              />
            </Col>
                          )} 
          </Row>
        </Container>
        <img
          alt="..."
          className="n-logo"
          src={require("assets/img/dotted_waves_reversed-modified.png")}
          style={{
            width: "40%",
            height: "auto",
            position: "absolute",
            bottom: 0,
            right: "5px",
          }}
        />
      </Container>
      <style>
        {`
          /* Add responsive styles here using media queries */
          @media (max-width: 768px) {
            .mt-5 {
              margin-top: 3rem !important; /* Adjust margin for smaller screens */
            }
            /* Add more responsive styles as needed */
          }
        `}
      </style>
    </>
  );
}

export default NucleoIcons;
