import React, {useState, useEffect} from "react";
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";
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


const items = [
  {
    src: require("assets/img/Activision.webp"),
    altText: "img1",
    caption: "img1"
  },
  {
    src: require("assets/img/BNY-Mellon.webp"),
    altText: "img2",
    caption: "img2"
  },
  {
    src: require("assets/img/bayer_logo.png"),
    altText: "img2",
    caption: "img2"
  }
  ,
  {
    src: require("assets/img/Chevron-modified.webp"),
    altText: "img4",
    caption: "img4"
  },
   ,
  {
    src: require("assets/img/logo_noom.webp"),
    altText: "img6",
    caption: "img6"
  }
  ,
  {
    src: require("assets/img/logo_nutanix.webp"),
    altText: "img7",
    caption: "img7"
  }
  ,
  {
    src: require("assets/img/Defense.webp"),
    altText: "img8",
    caption: "img8"
  }
  ,
  {
    src: require("assets/img/OneTen.webp"),
    altText: "img9",
    caption: "img9"
  }
  ,
  {
    src: require("assets/img/Vodaphone.webp"),
    altText: "img10",
    caption: "img10"
  }

];

function CarouselSection() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Function to update screen width when the window is resized
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    // Attach the event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container style={{ maxWidth: "100vw",fontWeight: "bolder", paddingTop: "7%" }}>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 15px", // Adjust margin
          paddingTop: "5vh", // Adjust padding based on height
          paddingBottom: "5vh", // Adjust padding based on height
          maxWidth: "100%",
        }}
      >
        <motion.h2
          style={{
            fontSize: screenWidth < 700 ? "6vw" : "2.5vw",
            maxWidth: "70vw",
            textAlign: "center",
            fontWeight: 900,
            fontFamily: "Museo Sans Rounded, sans-serif",
            paddingBottom: "3%"
          }}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={1}
        >
          Companies trust Eightfold with their talent transformation
        </motion.h2>
        <Container className="logos" style={{maxWidth: "100%", paddingBottom: "10%"
}}>
          <Container className="logos-slide">
            {items.map((item, index) => (
              <img
                key={index}
                src={item.src}
                alt={item.altText}
                className="carousel-image"
                style={{ paddingRight: "10vw" }} // Adjust spacing based on width
              />
            ))}
             {items.map((item, index) => (
              <img
                key={index}
                src={item.src}
                alt={item.altText}
                className="carousel-image"
                style={{ paddingRight: "10vw" }} // Adjust spacing based on width
              />
            ))}
          </Container>
        </Container>
      </Container>
      <style>
        {`
          .logos {
            overflow: hidden;
            padding: 2vh 0; // Adjust padding based on height
            background: white;
          }
          .logos-slide {
            display: flex;
            align-items: center;
            white-space: nowrap;
            animation: 20s slide infinite linear;
          }

          .carousel-image {
            height: 15vh; // Set a fixed height based on height
            max-width: 100%; // Adjust based on width
            margin-right: 2vw; // Adjust spacing based on width
          }

          .carousel-image:hover {
            fill: blue;
          }

          @keyframes slide {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-100%);
            }
          }

          @media (max-width: 768px) {
            // Adjust styles for smaller screens (e.g., tablets and mobile)
            .logos-slide {
              animation: none; // Disable the animation on small screens
              justify-content: center; // Center logos on smaller screens
            }
            .carousel-image {
              height: 10vh; // Adjust height for smaller screens
              margin-right: 1vw; // Adjust spacing for smaller screens
            }
          }
        `}
      </style>
    </Container>
  );
}

export default CarouselSection;