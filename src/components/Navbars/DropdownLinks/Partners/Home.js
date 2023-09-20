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
    <div style={{maxWidth:"100vw"}}>
      
      <div
        className="page-header clear-filter"
        filter-color="black"
        style={{
minHeight: "700px",
          background: "linear-gradient(to right, #008BE8, #5B4B6E )",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
borderBottomLeftRadius: "15%"

        }}
      >
{/* <p className="ml-5" style={{ textAlign: "left",fontSize: "13px", fontWeight: 500 }}>
      Company  {`  >  `}  Contact Us     
        </p> */}
        
        <Container>
          <div
            className="brand"
            style={{
              textAlign: "center",
              maxWidth: "100%",
              borderBottomLeftRadius: "5vw",
              // bottom: "30%"
            }}
          >
            <motion.h2
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
              Our partners in driving 

            <br />
talent transformation
            </motion.h2>
            
          </div>

         
        </Container>

      
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
    </div>
  );
}

export default CompanyLeadership;
