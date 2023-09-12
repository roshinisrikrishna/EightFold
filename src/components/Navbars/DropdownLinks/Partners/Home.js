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
    <>
      <div
        className="page-header clear-filter"
        filter-color="black"
        style={{
          background: "linear-gradient(to right, #008BE8, #5B4B6E )",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Container>
          <div
            className="brand"
            style={{
              textAlign: "center",
              maxWidth: "100%",
              borderBottomLeftRadius: "5vw"
            }}
          >
            <motion.h2
              style={{
                
                fontFamily: "Museo Sans Rounded, sans-serif",
                fontWeight: "bolder",
                fontSize: "4.5vw",
                marginTop: "10vw",
              }}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={3}
            >
              Our partners in driving 

            </motion.h2>
            <motion.h2
              style={{
                
                fontFamily: "Museo Sans Rounded, sans-serif",
                fontWeight: "bolder",
                fontSize: "4.5vw",
                marginTop: "-2vw",
              }}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={3}
            >
talent transformation
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
    </>
  );
}

export default CompanyLeadership;
