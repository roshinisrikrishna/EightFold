import React, {useState, useRef, useEffect} from "react";
import { Button, Container, Row, Col } from "reactstrap";
import intImg from "../../../../assets/img/partner_contact_img.jpg.webp";
import { motion } from "framer-motion";
import { zoomIn } from "react-animations";
import { keyframes } from "styled-components";
import styled from "styled-components";

const ZoomIn = styled.div`animation: 1s ${keyframes`${zoomIn}`}`;

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

  const [animationCompleted, setAnimationCompleted] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !animationCompleted) {
          // Trigger animation when the image is in the viewport
          setAnimationCompleted(true);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Adjust the threshold as needed
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    // Cleanup the observer when the component unmounts
    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [animationCompleted]);

  return (
    <>
      <Container
        style={{
          background: "linear-gradient(to right, #01546e ,#04b6d1)",
          color: "#FFFFFF",
          paddingTop: "5%",
          paddingBottom: "5%",
          position: "relative",
          maxWidth: "100vw",
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
        <Container style={{ paddingBottom: "70px" }}>
          <Row>
            <Col md="6" className="mt-5" >
              <Container
                className="mt-2"
                style={{ width: "100%",  marginRight: "0", 
                justifyContent: "flex-start", alignItems: "flex-start", textAlign: "left" }}
              >
                <Row>
                  <Col>
                    <motion.h2
                      style={{
                        fontWeight: 600,
                        fontFamily: "Museo Sans Rounded, sans-serif",
                        fontSize: "230%",
                      }}
                      variants={fadeInAnimationVariants}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      custom={2}
                    >
                     Join our global network of talent partners
                    </motion.h2>

                    <motion.button
                      className="hover-white-button"
                      style={{
                        borderRadius: "60px",
                        backgroundColor: "#fff",
                        color: "#028fba",
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
                      Become a partner
                    </motion.button>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col md="6" className="mt-4" >
              <div ref={imageRef}>
                  {animationCompleted && ( // Conditionally apply the animation
                    <ZoomIn>
              <img
                  src={intImg}
                  alt="Eightfold.ai Logo"
                  className="navbar-logo"
                  style={{ width: "100%", height: "auto",  borderRadius: "10px"
              }}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={1}
                />
</ZoomIn>
                  )}
                </div>
            </Col>
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
            right: "5%",
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
