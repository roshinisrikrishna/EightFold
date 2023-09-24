// import React from "react";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";
// plugin that creates slider
import Slider from "nouislider";
import React, { useEffect, useRef, useState } from "react";
import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";
import {motion} from "framer-motion";


// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Card,
  CardBody
} from "reactstrap";

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

// Import statements...

function BasicElements() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update the screenWidth when the window is resized
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sliderRegularRef = useRef(null);
  const sliderDoubleRef = useRef(null);

  useEffect(() => {
    if (sliderRegularRef.current && sliderRegularRef.current.noUiSlider === undefined) {
      noUiSlider.create(sliderRegularRef.current, {
        start: [50],
        connect: [true, false],
        step: 0.5,
        range: { min: 0, max: 100 },
      });
    }

    if (sliderDoubleRef.current && sliderDoubleRef.current.noUiSlider === undefined) {
      noUiSlider.create(sliderDoubleRef.current, {
        start: [20, 80],
        connect: [false, true, false],
        step: 1,
        range: { min: 0, max: 100 },
      });
    }
  }, []);

  return (
    <>
      <div className="section section-basic" id="basic-elements" style={{ minHeight: "10vh",maxWidth: "100vw", paddingTop: "12%", fontFamily: "Museo Sans Rounded, sans-serif", justifyContent: "flex-start" }}>
        <Container className="page-header-image">
          <Row>
            {/* Use d-none d-md-block to hide the column on screens smaller than md (medium) */}
            {screenWidth >= 912 && (

            <Col className="justify-content-start d-none d-md-block" lg="1" md="0">
              <Card style={{
                background: "linear-gradient(45deg, rgba(0, 139, 232, 0.2) 50%, rgba(147, 112, 219, 0.5)) 50%",
                width: "100%",
                height: "250px",
                borderRadius: "0px 50px 50px 0px",
                filter: "blur(60px)"
              }}>
                <CardBody>
                </CardBody>
              </Card>
            </Col>
            )}

            <Col md="12" xl="12" xs="12">
              <div className="content-center gradient-background">
                <Container >
                  <div className="dashboard" style={{ height: "50%",marginLeft: "0%", textAlign: "center", width: "100%" }}>
                    <motion.h1
                    className="dashboard-h1"
                      style={{
                        // marginTop: "-70%",
                        fontWeight: 600,
                        letterSpacing: "0.01em",
                        fontSize: "200%",
                        background: "-webkit-linear-gradient(45deg, #008BE8, #5B4B6E 85%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                      variants={fadeInAnimationVariants}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true, }}
                      custom={1}
                    >
                      We are transforming the world of work by pairing people with possibilities. From talent acquisition to <a href="/link-to-text-management" style={{ background: "-webkit-linear-gradient(45deg, #008BE8, #5B4B6E 85%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>text management</a> and talent insights, this is the single AI platform that does it all.
                    </motion.h1>
                  </div>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <style>
        {`
        /* Media query for screens less than 768px wide */
        /* CSS for screen width 280px to 540px */
        @media only screen and (min-width: 280px) and (max-width: 766px) {
          
          .dashboard {   
            // height: 10% !important;  
        
            .dashboard-h1 {
              // margin-top: -40% !important;
              font-size: 28px !important;
              font-weight : 900 !important;
              margin-top: 10% !important;
            }
           
            
          }
          
        }
        
        /* CSS for screen width 768px to 912px */
        @media only screen and (min-width: 767px) and (max-width: 912px) {
          
          .section{
            // margin-bottom: -40% !important;

          }
            .dashboard {
              // margin-bottom: -100% !important;
              // height: 50% !important;
        
            .dashboard-h1 {
              // margin-top: -40% !important;
              font-size: 28px !important;
              font-weight: 900 !important;
            }
           
            
          }
        
        }
        
        /* CSS for screen width above 1023px */
        @media only screen and (min-width: 1024px) {
          .page-header-image {
            // min-height: 1vh !important;
            // height: 60% !important;
          }
            .dashboard {
              // min-height: 1vh !important;
            // height: 20% !important;
        
            .dashboard-h1 {
              margin-top: -30% !important;
              // margin-bottom: -50vh;
              // background: red !important;
              font-size: 36px !important;
              font-weight: bolder !important;
            }
           
            
          }
        
        }
        `}
      </style>
    </>
  );
}

export default BasicElements;
