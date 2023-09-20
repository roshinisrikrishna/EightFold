 import React, {useState, useEffect} from "react";
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

function IndexHeader() {
  let pageHeader = React.createRef();

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

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="black" style={{maxWidth:"100vw"}}>
        <div
          className="page-header-image"
          style={{
            minHeight: "120vh",
            height: '100%',
            background:
              "linear-gradient(to right , rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9) 50%, rgba(6, 18, 70, 0.88))",
          }}
          ref={pageHeader}
        >
          <motion.img
            alt="..."
            src={require("assets/img/dotted_waves.png")}
            style={{
              width: "30%",
              height: "auto",
              position: "absolute",
              top: 0,
              left: "10px",
            }}
            variants={fadeImageVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          />
        </div>

        <Container xs={12} lg={8}>
          <div className="content-center brand" style={{ paddingBottom: "10%" }}>
            <Container  style={{  
              minWidth:"47vw",
              marginLeft:"-7%",paddingTop: "55%", justifyContent: "flex-start", alignItems: "flex-start", textAlign: "left" }}>
              <motion.h1
                style={{
                  fontWeight: "bolder",
                  fontFamily: "Museo Sans Rounded, sans-serif",
                  fontSize: screenWidth < 700 ? "10vw" : "5.5vw",
                }}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={4}
                className="brand-h1" // Added a class name for better specificity

              >
                Everything talent,
                <span
                  style={{
                    background: "-webkit-linear-gradient(45deg, #FFFFFF, #0fb3fa 85%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={3}
                >
                  {` `} powered by AI
                </span>
              </motion.h1>

              <motion.p
                style={{
                  fontSize: "90%",
                  fontFamily: "Museo Sans Rounded, sans-serif",
                  fontWeight: "bold"
                }}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={2}
              >
                Our AI platform for all talent brings to light everything you need
                to hire and develop people to their highest potential
              </motion.p>
              <motion.button
                className="hover-white-button"
                style={{
                  borderRadius: "60px",
                  color: "#fff",
                  backgroundColor: "#2285ba",
                  border: "none",
                  cursor: "pointer",
                  marginTop: "10px",
                  fontWeight: "bolder",
                  fontSize: "70%", // Set font size relative to viewport width
                  maxWidth: "100%", // Ensure the button takes up the full width
                  padding: "2% 7%", // Set padding as a percentage of the button's width and height
                  fontFamily: "Museo Sans Rounded, sans-serif",
                }}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={1}
              >
                Ready for greatness?
              </motion.button>
            </Container>
          </div>
        </Container>
        <motion.img
          alt="..."
          className="n-logo"
          src={require("assets/img/dotted_waves_reversed.png")}
          style={{
            width: "35%",
            height: "auto",
            position: "absolute",
            bottom: 0,
            right: "5px",
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
          /* Media query for screens less than 768px wide */
          @media (max-width: 768px) {
            .page-header-image {
              min-height: 80vh;
            }
            .brand {
              margin-top: 10vh;
              padding-top: 10%; /* Add padding for smaller screens */
            }
            .brand > div {
              min-width: 100vw !important;
              
            }
            .brand-h1 {
              font-size: 10vw !important; /* Set font size to 52px with !important */
            }
            .brand p {
              font-size: 80% !important;
            }

            .brand button {
              max-width: 70vw !important;
              padding: 4% 12% !important;
              font-size: 90% !important;
            }
          }


        `}
      </style>
    </>
  );
}

export default IndexHeader;