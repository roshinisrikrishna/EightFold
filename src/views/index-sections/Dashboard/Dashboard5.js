// Import necessary modules and components
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import thunderImg from "../../../assets/img/thunderimg.svg";
import fldrImg from "../../../assets/img/fldrImg.svg";
import magnetImg from "../../../assets/img/magnetImg.svg";
import { motion } from "framer-motion";

// Define animation variants for the fade-in animation
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index, // Delay animation for each element
      duration: 1, // Animation duration
      ease: "easeInOut", // Easing function
    },
  }),
};

function Notifications() {
  // State variable to track screen width
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Function to update screen width when the window is resized
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  // Effect to attach and clean up window resize event listener
  useEffect(() => {
    // Attach the event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <Container className="solutions-container"
    fluid // Add the fluid property to make it full-width
    style={{
      // background: "linear-gradient(180deg, rgba(252, 250, 250, 0.2), rgba(169, 11, 227, 0.2), rgba(24, 9, 230, 0.2))",
      // boxShadow: "15px 15px 30px #ffffff, -15px 15px 30px rgba(0, 0, 255, 0.4)",
    }}
  >
    <Container className="solutions-main"
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
              className="mt-5 solutions-main"
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
              <Col className="solutions-col1" xs={12} md={6}
               style={{  
                // border: "1px solid #ccc",
                //  borderTop: screenWidth < 700 ? "1px solid #ccc" : "none",
                //  borderLeft: screenWidth < 700 ? "1px solid #ccc" : "none", 
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
                <h2 className="solutions-h2"
                  style={{
                    fontSize: "110%",
                    fontWeight: 700,
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  Drive extraordinary results
                </h2>
                <p className="solutions-p" style={{ fontSize: "80%", fontWeight: 400, maxWidth: "90%" }}>
                  From <span style={{ color: "#008FBF" }}>talent acquisition</span> to management, our AI platform provides you a single view of talent across your entire workforce to inform every talent decision.
                </p>
                <p className="solutions-p1" style={{ fontSize: "70%", fontWeight: "bold", color: "#008FBF" }}>Build your dream workforce</p>
              </Col>

              {/* Right section */}
              <Col xs={12} md={6} className="solutions-col2"              
               style={{  
                // borderBottom: "1px solid #ccc", 
                // borderTop: screenWidth < 700 ? "1px solid #ccc" : "none",
                // borderLeft: screenWidth < 700 ? "1px solid #ccc" : "none",
                // borderRight: screenWidth < 700 ? "1px solid #ccc" : "none",
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
                <h2 className="solutions-h2"
                  style={{
                    fontSize: "110%",
                    fontWeight: 700,
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  Cultivate and discover new talent
                </h2>
                <p  className="solutions-p" style={{ fontSize: "80%", fontWeight: 400 }}>
                  Attract new employees and find existing talent ready for a new opportunity with AI-powered{" "}
                  <span style={{ color: "#008FBF" }}>talent intelligence</span>.
                </p>
                <p className="pt-4 solutions-p1" style={{ fontSize: "70%", fontWeight: "bold", color: "#008FBF" }}>
                  Elevate top talent in the public sector
                </p>
              </Col>
            </Row>

            <Row>
              {/* Left section */}
              <Col xs={12} md={6} className="solutions-col3"
                style={{  
                  // borderRight: "1px solid #ccc" ,
                // borderTop: screenWidth < 700 ? "1px solid #ccc" : "none",
                // borderLeft: screenWidth < 700 ? "1px solid #ccc" : "none",
                // borderBottom: screenWidth < 700 ? "1px solid #ccc" : "none",
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
    <h2 className="solutions-h2" style={{fontSize: "110%", fontWeight: 700 ,fontFamily: "Roboto, sans-serif"}}>Support and further DEI goals</h2>
    <p className="solutions-p" style={{ fontSize: "80%", fontWeight: 400 }}>Increase positive business outcomes with a strong DEI strategy powered by AI.</p>
    <p className="solutions-p1" style={{ fontSize: "70%", fontWeight: "bold", color: "#008FBF" }}>Create a more inclusive workforce</p>
              </Col>

              {/* Right section */}
              <Col className="solutions-col4" xs={12} md={6} style={{ padding: "3%", 
              // border: screenWidth < 700 ? "1px solid #ccc" : "none",
                                      }}>
              <motion.img src={magnetImg} alt="Logo"
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{once: true,}}
        custom={3} 
  // style={{ width: "50px", height: "50px", borderRadius: "50%" }} 
  />
    <h2 className="solutions-h2" style={{fontSize: "110%", fontWeight: 700 ,fontFamily: "Roboto, sans-serif"}}>Responsible and ethical Al</h2>
    <p className="solutions-p" style={{ fontSize: "80%", fontWeight: 400 }}>Our Talent Intelligence Platform 
      is committed to compliance, security, and accessibility.</p>
      <p className="solutions-p1" style={{ fontSize: "70%", fontWeight: "bold", color: "#008FBF" }}>Build a trustworthy talent experience</p>
              </Col>
            </Row>

          </Container>
        </Container>
        <style>
      {`
      
      /* CSS for screen width 280px to 540px */
      @media only screen and (min-width: 280px) and (max-width: 766px) {
        
        .solutions-container{
          // border: 1px solid black;
          // box-shadow: 15px 15px 30px #ffffff, -15px 15px 30px rgba(0, 0, 255, 0.4);
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.9) 5%,
            rgba(216, 194, 255, 0.1) 5%,
            rgba(164, 176, 247, 0.5) 20%,
            rgba(255, 255, 255, 0.1) 70%
          );
        }
       .solutions-main{     
        //  width: 47vw !important;
        //  margin-top: -10% !important;
        //  margin-left: -10% !important;
        border-radius: 25px !important;
        font-size: 28px !important;
        font-weight: 700 !important;




      
          .solutions-h2 {
            font-size: 24px !important;
            font-weight : 600 !important;
            padding-top: 4% !important;
          }
         
          .solutions-p {
           font-size: 17px !important;
           padding-bottom: 10% !important;
          //  width: 38vw !important;

           
         }
           .solutions-p1 {
             font-size: 15px !important;
             font-weight: 500 !important;
              // width: 40vw !important;

           }
           .solutions-col1 {
            // font-size: 20px !important;
            //  width: 40vw !important;
            border-bottom: 1px solid #ccc;

          }  .solutions-col2 {
              border-bottom: 1px solid #ccc;

          }  .solutions-col3 {
              border-bottom: 1px solid #ccc;

          }  .solutions-col4 {
              // border-bottom: 1px solid #ccc;

          }
         
         
        }
        
       
       
        
           }
      @media only screen and (min-width: 767px) and (max-width: 912px) {

        .solutions-container{
          // border: 1px solid black;
          // box-shadow: 15px 15px 30px #ffffff, -15px 15px 30px rgba(0, 0, 255, 0.4);
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.9) 5%,
            rgba(216, 194, 255, 0.1) 5%,
            rgba(164, 176, 247, 0.5) 20%,
            rgba(255, 255, 255, 0.1) 70%
          );
        }
       .solutions-main{     
        //  width: 47vw !important;
        //  margin-top: -10% !important;
        //  margin-left: -10% !important;
        border-radius: 25px !important;
        font-size: 28px !important;
        font-weight: 700 !important;




      
          .solutions-h2 {
            font-size: 24px !important;
            font-weight : 600 !important;
            width: 40vw !important;
            // padding-top: 4% !important;
          }
         
          .solutions-p {
           font-size: 17px !important;
           padding-bottom: 10% !important;
           width: 38vw !important;

           
         }
           .solutions-p1 {
             font-size: 15px !important;
             font-weight: 500 !important;
              // width: 40vw !important;

           }
           .solutions-col1 {
            // font-size: 20px !important;
            //  width: 40vw !important;
            border-bottom: 1px solid #ccc;
            border-right: 1px solid #ccc;


          }  .solutions-col2 {
              border-bottom: 1px solid #ccc;

          }  .solutions-col3 {
              border-right: 1px solid #ccc;

          }  .solutions-col4 {
              // border-bottom: 1px solid #ccc;

          }
         
         
        }
        
       
       
        
           }
      @media only screen and (min-width: 1024px) {
        
        .solutions-container{
          // border: 1px solid black;
          // box-shadow: 15px 15px 30px #ffffff, -15px 15px 30px rgba(0, 0, 255, 0.4);
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.9) 5%,
            rgba(216, 194, 255, 0.1) 5%,
            rgba(164, 176, 247, 0.5) 20%,
            rgba(255, 255, 255, 0.1) 70%
          );
        }
       .solutions-main{     
        //  width: 47vw !important;
        //  margin-top: -10% !important;
        //  margin-left: -10% !important;
        border-radius: 25px !important;
        font-size: 37px !important;
        font-weight: 700 !important;




      
          .solutions-h2 {
            font-size: 20px !important;
            font-weight : 600 !important;
            padding-top: 4% !important;
          }
         
          .solutions-p {
           font-size: 14px !important;
           padding-bottom: 10% !important;
          //  width: 38vw !important;

           
         }
           .solutions-p1 {
             font-size: 13px !important;
             font-weight: 700 !important;
              // width: 40vw !important;

           }
           .solutions-col1 {
            // font-size: 20px !important;
            //  width: 40vw !important;
            border-bottom: 1px solid #ccc;
            border-right: 1px solid #ccc;


          }  .solutions-col2 {
              border-bottom: 1px solid #ccc;

          }  .solutions-col3 {
              border-right: 1px solid #ccc;

          }  .solutions-col4 {
              // border-bottom: 1px solid #ccc;

          }
         
         
        }
        
       
       
        
           }
      
      /* CSS for screen width above 1023px */
      `}
    </style>
    </Container>
    
  );
}

export default Notifications;
