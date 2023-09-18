import React, { useState, useRef, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";
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

const items = [
  {
    src: require("assets/img/logo_capital_one_ventures.png"),
    altText: "img1",
    caption: "img1"
  },
  {
    src: require("assets/img/logo_lightspeed.png"),
    altText: "img2",
    caption: "img2"
  },
  {
    src: require("assets/img/logo_general_catalyst.png"),
    altText: "img2",
    caption: "img2"
  }
  ,
  {
    src: require("assets/img/logo_citi_ventures.png"),
    altText: "img4",
    caption: "img4"
  },
   ,
  {
    src: require("assets/img/logo_softbank.png"),
    altText: "img6",
    caption: "img6"
  }
  

];

function CarouselSection() {
  return (
    <div style={{fontWeight:"bolder"}} >
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // marginLeft: "30px",
          marginTop: "130px",
          marginBottom: "130px",
          maxWidth: "1280px",
        }}
      >
        <motion.h2
          style={{
            fontSize: "180%",
            textAlign: "center",
            fontWeight: "bolder", // Increase the fontWeight
            fontFamily: "Museo Sans Rounded, sans-serif"
          }}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{once: true,}}
          custom={1}
        >
          Investors
        </motion.h2>
        <div className="logos">
          <div className="logos-slide">
            {items.map((item, index) => (
              <img
                key={index}
                src={item.src}
                alt={item.altText}
                className="carousel-image" 
                style={{paddingRight: "100px"}}
              />
            ))}
            {items.map((item, index) => (
              <img
                key={index}
                src={item.src}
                alt={item.altText}
                className="carousel-image" 
                style={{paddingRight: "100px"}}
              />
            ))}
          </div>
        </div>
      </Container>
      <style>
        {`
          .logos {
            overflow: hidden;
            padding: 60px 0;
            background: white;
          }
          .logos-slide {
            display: flex;
            align-items: center;
            white-space: nowrap;
            animation: 20s slide infinite linear;
          }
          
          .carousel-image {
            5height: 120px; // Set a fixed height
            margin-right: 120px;
          }
          .carousel-image:hover {
            fill: blue; /* Increase brightness on hover */
          }
          @keyframes slide{
            from{
              transform: translateX(-100%);
            }
            to{
              transform: translateX(0);
            }
          }
        `}
      </style>
    </div>
  );
}

export default CarouselSection;