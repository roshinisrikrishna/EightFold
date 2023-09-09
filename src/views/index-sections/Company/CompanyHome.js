import React from "react";
import { Container } from "reactstrap";
import {motion} from "framer-motion";

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
const fadeImageVariants = {
  animate: {
    opacity: 1,
    visibility: "visible",
    transform: "translateY(0px)",
    transition: {
      delay: 0.5,
      duration: 1,
      ease: "ease"
    }
  },
  initial: {
    opacity: 0,
    visibility: "hidden",
    transform: "translateY(-20px)",
    transition: {
      delay: 0.1,
      duration: 2,
      ease: "ease"
    }
  },
};

function CompanyHome() {
 

  return (
    <>
      <div className="page-header clear-filter" filter-color="black"
      style={{
        background:
          "linear-gradient(to right , #045d78, #043a4a)",
      }}>
      

        <Container>
          
        <div className="brand" style={{ paddingTop: "200px",textAlign: "center", width: "1000px" }}>

  <motion.h2
    style={{
      background: "-webkit-linear-gradient(45deg, #FFFFFF, #199BC2)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontFamily: "Museo Sans Rounded, sans-serif",
      fontWeight: "bolder",
      fontSize: "60px",

      marginTop: "-30px", // Adjust this margin to reduce space
    }}
    variants={fadeInAnimationVariants}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    custom={3}
  >
          The right career for 
  </motion.h2>
  <motion.h2
    style={{
      background: "-webkit-linear-gradient(45deg, #FFFFFF, #199BC2)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontFamily: "Museo Sans Rounded, sans-serif",
      fontWeight: "bolder",
      fontSize: "60px",
      fontWeight: 800,
      marginTop: "-30px", // Adjust this margin to reduce space
    }}
    variants={fadeInAnimationVariants}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    custom={3}
  >
           everyone in the world
  </motion.h2>

        
          </div>
        </Container>
        <motion.img
          alt="..."
          className="n-logo"
          src={require("assets/img/dotted_waves_reversed.png")}
          style={{
            width: "450px",
            height: "auto",
            position: "absolute",
            top: 0,
            right: 0,
          }}
          variants={fadeImageVariants}
          initial="initial"
          whileInView="animate"
          viewport={{once: true,}}
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
        `}
      </style>
    </>
  );
}

export default CompanyHome;