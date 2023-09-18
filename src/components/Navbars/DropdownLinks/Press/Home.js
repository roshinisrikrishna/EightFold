import React from "react";
import { Container, Row, Col } from "reactstrap";
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
const fadeImageVariants = {
  animate: {
    opacity: 1,
    visibility: "visible",
    transform: "translateY(0px)",
    transition: {
      delay: 0.5,
      duration: 1,
      ease: "ease",
    },
  },
  initial: {
    opacity: 0,
    visibility: "hidden",
    transform: "translateY(-20px)",
    transition: {
      delay: 0.1,
      duration: 2,
      ease: "ease",
    },
  },
};

function CompanyLeadership() {
  return (
    <div style={{  
  }}>
      <div
        className="page-header clear-filter"
        filter-color="black"
        style={{
          background: "linear-gradient(to right, #008BE8, #5B4B6E )",
          // height: "100%",
width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
borderBottomRadius: "80%",
          minHeight: "570px", height: "100%"

        }}
      >
        <Container style={{  borderBottomRadius: "20vw"
}}>
          <div
            className="brand"
            style={{
              textAlign: "center",
              maxWidth: "100%",
              borderBottomLeftRadius: "5vw"
            }}
          >
            <motion.h2 className="pt-5"
              style={{
                
                fontFamily: "Museo Sans Rounded, sans-serif",
                fontWeight: "bolder",
                fontSize: "52px",
                // marginTop: "10vw",
              }}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={3}
            >
             Eightfold


            <br/>
news center
            </motion.h2>
            
          </div>

         
        </Container>

      

        {/* Your image */}
        <motion.img
          alt="..."
          className="n-logo"
          src={require("assets/img/dotted_waves_reversed.png")}
          style={{
            width: "50vw",
            height: "auto",
            position: "absolute",
            top: "0",
            right: "0",
          }}
          variants={fadeImageVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        />
<motion.img
          alt="..."
          className="n-logo"
          src={require("assets/img/dotted_waves.png")}
          style={{
            width: "50vw",
            height: "auto",
            position: "absolute",
            bottom: "0",
            left: "0",
          }}
          variants={fadeImageVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        />
      </div>
     

      <style>
        {`
          .hover-white-button {
            background-color: #1b9af5;
            color: #fff;
            transition: background-color 0.3s, color 0.3s;
          }
          .hover-white-button:hover {
            background-color: #28607E;
          }

          @media (max-width: 768px) {
            .brand h2 {
              font-size: 6vw;
              margin-top: -2vw;
            }
          }
        `}
      </style>
    </div>
  );
}

export default CompanyLeadership;
