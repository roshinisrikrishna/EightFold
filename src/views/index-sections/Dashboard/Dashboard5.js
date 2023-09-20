import React, {useState, useEffect} from "react";
import { Container, Row, Col } from "reactstrap";
import thunderImg from "../../../assets/img/thunderimg.svg";
import fldrImg from "../../../assets/img/fldrImg.svg";
import magnetImg from "../../../assets/img/magnetImg.svg";
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

function Notifications() {

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
    <Container
    fluid // Add the fluid property to make it full-width
    style={{
      background: "linear-gradient(180deg, rgba(252, 250, 250, 0.2), rgba(169, 11, 227, 0.2), rgba(24, 9, 230, 0.2))",
      boxShadow: "15px 15px 30px #ffffff, -15px 15px 30px rgba(0, 0, 255, 0.4)",
    }}
  >
    <Container
      md="12"
      xl="12"
      style={{
        border: "1px solid #ccc",
        backgroundColor: "white",
        marginLeft: "0%",
        marginTop: "0%",
        maxWidth: "100vw",
      }}
    >
      <Container
        style={{
          padding: "20px",
          borderRadius: "20px",
          textAlign: "center",
        }}
      >
            <motion.h2
              style={{
                fontFamily: "Museo Sans Rounded, sans-serif",
                fontSize: "38px",
                fontWeight: 600,
                marginBottom: "60px",
              }}
              className="mt-5"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={1}
            >
              Solutions
            </motion.h2>
            <Row>
              {/* Left section */}
              <Col xs={12} md={6}
               style={{  
                border: "1px solid #ccc",
                 borderTop: screenWidth < 700 ? "1px solid #ccc" : "none",
                 borderLeft: screenWidth < 700 ? "1px solid #ccc" : "none", 
                 padding: "3%",
 

                 }}>
                <motion.img
                  src={thunderImg}
                  alt="Logo"
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={2}
                  className="img-fluid" // Make the image responsive
                />
                <h2
                  style={{
                    fontSize: "110%",
                    fontWeight: 700,
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  Drive extraordinary results
                </h2>
                <p style={{ fontSize: "80%", fontWeight: 400, maxWidth: "90%" }}>
                  From <span style={{ color: "#008FBF" }}>talent acquisition</span> to management, our AI platform provides you a single view of talent across your entire workforce to inform every talent decision.
                </p>
                <p style={{ fontSize: "70%", fontWeight: "bold", color: "#008FBF" }}>Build your dream workforce</p>
              </Col>

              {/* Right section */}
              <Col xs={12} md={6}              
               style={{  
                borderBottom: "1px solid #ccc", 
                borderTop: screenWidth < 700 ? "1px solid #ccc" : "none",
                borderLeft: screenWidth < 700 ? "1px solid #ccc" : "none",
                borderRight: screenWidth < 700 ? "1px solid #ccc" : "none",
                padding: "3%",
                }}>

                <motion.img
                  src={fldrImg}
                  alt="Logo"
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={2}
                  className="img-fluid" // Make the image responsive
                />
                <h2
                  style={{
                    fontSize: "110%",
                    fontWeight: 700,
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  Cultivate and discover new talent
                </h2>
                <p style={{ fontSize: "80%", fontWeight: 400 }}>
                  Attract new employees and find existing talent ready for a new opportunity with AI-powered{" "}
                  <span style={{ color: "#008FBF" }}>talent intelligence</span>.
                </p>
                <p className="pt-4" style={{ fontSize: "70%", fontWeight: "bold", color: "#008FBF" }}>
                  Elevate top talent in the public sector
                </p>
              </Col>
            </Row>

            <Row>
              {/* Left section */}
              <Col xs={12} md={6}
                style={{  borderRight: "1px solid #ccc" ,
                borderTop: screenWidth < 700 ? "1px solid #ccc" : "none",
                borderLeft: screenWidth < 700 ? "1px solid #ccc" : "none",
                borderBottom: screenWidth < 700 ? "1px solid #ccc" : "none",
                padding: "3%",
              }}>

              <motion.img src={magnetImg} alt="Logo" 
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{once: true,}}
        custom={3}
  // style={{ width: "50px", height: "50px", borderRadius: "50%" }} 
  />
    <h2 style={{fontSize: "110%", fontWeight: 700 ,fontFamily: "Roboto, sans-serif"}}>Support and further DEI goals</h2>
    <p style={{ fontSize: "80%", fontWeight: 400 }}>Increase positive business outcomes with a strong DEI strategy powered by AI.</p>
    <p style={{ fontSize: "70%", fontWeight: "bold", color: "#008FBF" }}>Create a more inclusive workforce</p>
              </Col>

              {/* Right section */}
              <Col xs={12} md={6} style={{ padding: "3%", border: screenWidth < 700 ? "1px solid #ccc" : "none",
                                      }}>
              <motion.img src={magnetImg} alt="Logo"
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{once: true,}}
        custom={3} 
  // style={{ width: "50px", height: "50px", borderRadius: "50%" }} 
  />
    <h2 style={{fontSize: "110%", fontWeight: 700 ,fontFamily: "Roboto, sans-serif"}}>Responsible and ethical Al</h2>
    <p style={{ fontSize: "80%", fontWeight: 400 }}>Our Talent Intelligence Platform 
      is committed to compliance, security, and accessibility.</p>
      <p style={{ fontSize: "70%", fontWeight: "bold", color: "#008FBF" }}>Build a trustworthy talent experience</p>
              </Col>
            </Row>

          </Container>
        </Container>
    </Container>
  );
}

export default Notifications;
