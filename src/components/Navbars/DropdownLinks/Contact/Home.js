import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import mapImage from '../../../../assets/img/worldmap.jpg';

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
useEffect(() => {
    document.body.style.backgroundImage = `linear-gradient(rgba(2, 115, 191, 0.9), rgba(67, 50, 87, 0.9)), url(${mapImage})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    // document.body.style.borderBottomRadius = "120%";

    return () => {
      document.body.style.backgroundImage = null;
      document.body.style.backgroundSize = null;
      document.body.style.backgroundPosition = null;
      document.body.style.backgroundRepeat = null;
      document.body.style.backgroundAttachment = null;
      document.body.style.backgroundColor = null;
      // document.body.style.borderBottomRadius = null;

    };
  }, []);

  return (
    <div style={{borderBottomRadius: "0%",minHeight:"570px", height: "100%"}}>
      <div
        className="page-header clear-filter"
        filter-color="black"
        style={{
          // background: "linear-gradient(to right, #008BE8, #5B4B6E )",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        // borderRadius: "100px",

        }}
      >
        <div className="space-50"></div>

          {/* <div style={{textAlign: "left"}}>
        <p className="ml-5 mt-5" style={{ fontSize: "13px", fontWeight: 500 }}>
      Company  {`  >  `}  Contact Us     
        </p>
        </div> */}

        <Container style={{              
           //  borderRadius: "30px",
}}>
        

          <div
            className="brand"
            style={{
              textAlign: "center",
              maxWidth: "100%",
              borderBottomLeftRadius: "5vw",
            }}
          >
            <motion.h2
              style={{
                
                fontFamily: "Museo Sans Rounded, sans-serif",
                fontWeight: "bolder",
                fontSize: "270%",
                // marginTop: "10vw",
              }}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={3}
            >
              Get in touch with our team 

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
            bottom: "0",
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
