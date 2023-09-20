import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import forbes from "../../../assets/img/forbes.webp";
import rightImg from "../../../assets/img/company_right.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
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

function Company6() {
  const [pills, setPills] = useState("2");
  const [dropdownVisible, setDropdownVisible] = useState([false, false, false]);

  const toggleDropdown = (index) => {
    const updatedVisibility = [...dropdownVisible];
    updatedVisibility[index] = !updatedVisibility[index];
    setDropdownVisible(updatedVisibility);
  };

  return (
    <>
      <div className="company6-container ml-2" style={{maxWidth:"100vw"}}>
        <Container className="company6-main-container">
          <Row>
            <Col md="12" className="company6-header">
              <Row>
                <Col xs="12" md="5" xl="5" className="company6-logo-container">
                  <img
                    src={forbes}
                    alt="Eightfold.ai Logo"
                    className="company6-logo"
                  />
                </Col>
                <Col xs="12" md="7" xl="7" className="company6-info-container">
                  <h3 className="company6-title">
                    Eightfold featured
                  </h3>
                  <h3 className="company6-subtitle">
                    in Forbes AI 50 2023
                  </h3>
                  <p className="company6-description">
                    Forbes fifth annual list recognizes the most promising
                    privately held global companies building businesses out of
                    artificial intelligence.
                  </p>
                  <motion.button
                    className="company6-button"
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={1}
                  >
                    Read article
                  </motion.button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <Container className="company6-secondary-container">
          <Row>
            <Col md="12" className="company6-secondary-content">
              <Row>
                <Col xs="12" md="9" xl="9" className="company6-content-left">
                  <img
                    alt="..."
                    className="company6-wave-image"
                    src={require("assets/img/dotted_waves-modified.png")}
                  />
                  <h3 className="company6-content-title">
                    Diversity. Anonymization. Prediction
                  </h3>
                </Col>
                <Col xs="12" md="3" xl="3" className="company6-content-right">
                  <motion.button
                    className="company6-button"
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={1}
                  >
                    See our patents
                  </motion.button>
                  <img
                    alt="..."
                    className="company6-wave-image-reversed"
                    src={require("assets/img/dotted_waves_reversed.png")}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <style>
        {`
        /* Company6.css */

        /* Container styles */
        .company6-container {
          width: 95%;
        }
        
        /* Main container styles */
        .company6-main-container {
          padding: 5%;
          background: linear-gradient(to right, #199BC2, #043a4a);
          color: #FFFFFF;
          border-top-left-radius: 80px;
          border-top-right-radius: 25px;
          border-bottom-left-radius: 25px;
          border-bottom-right-radius: 25px;
          margin-top: 5%;
          margin-bottom: 5%;
        }
        
        /* Logo styles */
        .company6-logo {
          width: 90%;
          height: auto;
          border-radius: 15px;
        }
        
        /* Header styles */
        .company6-title {
          font-size: 230%;
          font-weight: 600;
          margin-bottom: 0;
        }
        
        .company6-subtitle {
          font-size: 230%;
          font-weight: 600;
          margin-top: -10px;
        }
        
        .company6-description {
          font-size: 90%;
          font-weight: 600;
          margin-top: -10px;
        }
        
        /* Button styles */
        .company6-button {
          border-radius: 60px;
          background-color: white;
          color: #199BC2;
          border: none;
          cursor: pointer;
          margin-top: 10px;
          font-weight: bolder;
          font-size: 15px;
          width: 180px;
          padding: 2%;
          font-family: "Museo Sans Rounded", sans-serif;
        }
        
        /* Secondary container styles */
        .company6-secondary-container {
          background: linear-gradient(to right, #3decf2 5%, #008BE8 95%);
          color: #FFFFFF;
          border-radius: 15px;
          margin-bottom: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        /* Secondary content styles */
        .company6-content-left {
          padding: 4%;
          position: relative;
          text-align: center;
        }
        
        .company6-wave-image {
          width: 25%;
          height: auto;
          position: absolute;
          top: 0%;
          left: 0.5%;
        }
        
        .company6-content-title {
          font-size: 150%;
          font-weight: 900;
          padding-top: 3%;
        }
        
        .company6-content-right {
          padding: 60px;
          text-align: center;
          color: white;
        }
        
        .company6-wave-image-reversed {
          width: 25%;
          height: auto;
          position: absolute;
          bottom: 0%;
          right: 0.5%;
        }
        
        /* Media queries for responsiveness */
        @media (max-width: 768px) {
          .company6-title {
            font-size: 150%;
          }
          .company6-subtitle {
            font-size: 150%;
          }
          .company6-description {
            font-size: 80%;
          }
          .company6-button {
            font-size: 14px;
            width: 150px;
          }
          .company6-content-title {
            font-size: 120%;
          }
        }
        
        `}
      </style>
    </>
  );
}

export default Company6;
