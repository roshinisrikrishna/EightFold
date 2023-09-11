import React from "react";
import { Container } from "reactstrap";
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

function Company2() {
  return (
    <>
      <div
        className="page-header clear-filter"
        style={{
          fontFamily: "Museo Sans Rounded, sans-serif",
          fontWeight: 700,
          paddingTop: "10px", // Adjust the top padding
          height: "10%"
        }}
      >
        <Container>
          <div
            className="brand"
            style={{ paddingTop: "30px", textAlign: "center", maxWidth: "100%" }}
          >
            <motion.h1
              style={{
                fontWeight: 500,
                fontSize: "4vw", // Responsive font size
                background:
                  "-webkit-linear-gradient(45deg, #008BE8, #5B4B6E 85%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={1}
            >
              We believe in helping everyone see their full potential
            </motion.h1>
            <motion.h1
              style={{
                fontWeight: 500,
                fontSize: "4vw", // Responsive font size
                background:
                  "-webkit-linear-gradient(45deg, #008BE8, #5B4B6E 85%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={1}
            >
              - and finding them the right job
            </motion.h1>
          </div>
        </Container>
        <motion.img
          alt="..."
          className="n-logo"
          src={require("assets/img/dotted_waves.png")}
          style={{
            width: "30%", // Responsive image width
            height: "auto",
            position: "absolute",
            top: 0,
            left: 0,
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
            /* Add styles for screens with a maximum width of 768px */
            // Example: Adjust font size for smaller screens
            .brand h1 {
              font-size: 5vw;
            }
          }
        `}
      </style>
    </>
  );
}

export default Company2;
