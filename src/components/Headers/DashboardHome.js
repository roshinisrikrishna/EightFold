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
            // minHeight: "120vh",
            // height: '100%',
            background:
              "linear-gradient(to right , rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9) 50%, rgba(6, 18, 70, 0.88))",
          }}
          ref={pageHeader}
        >
          <motion.img
            alt="..."
            className="n-logo-top"
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
          <div className="content-center brand" style={{ 
            // paddingBottom: "10%" 
            }}>
            <Container  style={{  
              minWidth:"47vw",
              marginLeft:"-7%",
              // paddingTop: "55%", 
              justifyContent: "flex-start", 
              alignItems: "flex-start", 
              textAlign: "left" }}>
              <motion.h1
                style={{
                  fontWeight: "bolder",
                  fontFamily: "Museo Sans Rounded, sans-serif",
                  fontSize: "64px"
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
                className="brand-p"
              >
                Our AI platform for all talent brings to light everything you need
                to hire and develop people to their highest potential
              </motion.p>
              <motion.button
                className="hover-white-button brand-button"
                style={{
                  borderRadius: "60px",
                  color: "#fff",
                  backgroundColor: "#2285ba",
                  border: "none",
                  cursor: "pointer",
                  marginTop: "10px",
                  fontWeight: "bolder",
                  // fontSize: "70%", // Set font size relative to viewport width
                  // maxWidth: "100%", // Ensure the button takes up the full width
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
          className="n-logo-bottom"
          src={require("assets/img/dotted_waves_reversed.png")}
          style={{
            width: "35%",
            height: "auto",
            position: "absolute",
            // bottom: 0,
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
         
          /* CSS for screen width 280px to 540px */
@media only screen and (min-width: 280px) and (max-width: 766px) {
  .page-header-image {
    margin-top: -100% !important;

        min-height: 15vh !important;
        height: 105% !important;
      }
  .brand {
    margin-top: 10vh;
    min-height: 10vh;

  }
  .brand > div {
    min-width: 100vw !important;


    .brand-h1 {
      margin-top: -50% !important;
      font-size: 40px !important;
      font-weight : 900 !important;
    }
    .brand-p {
      font-size: 17px !important;
    }
    .brand-button {
      font-size: 16px !important;
      width: 180px !important;
      padding: 2% 1% 2% 1% !important;
    }

    
  }
  .n-logo-bottom{
    bottom: 35% !important;  

  }
  .n-logo-top{
    top: 50% !important;  
    left: -5% !important;

  }
  
}

/* CSS for screen width 768px to 912px */
@media only screen and (min-width: 767px) and (max-width: 912px) {
  .page-header-image {
    margin-top: -50% !important;
    min-height: 10vh !important;
    height: 100% !important;
  }
  .brand {
    margin-top: 10vh;
    height: 10% !important;
    min-height: 50vh;
  }
  .brand > div {
    min-width: 100vw !important;
  

    .brand-h1 {
      font-size: 40px !important;
      font-weight : 900 !important;
    }
    .brand-p {
      max-width: 95vw !important;
      font-size: 18px !important;
      font-weight : 500 !important;

    }
    .brand-button {
      font-size: 17px !important;
      width: 280px !important;
      padding: 2% 1% 2% 1% !important;
     
  
    }
  }
  .n-logo-bottom{
    bottom: 30% !important;  

  }
  .n-logo-top{
    top: 45% !important;  
    left: -5% !important;

  }
  
  
 

}

/* CSS for screen width above 1023px */
@media only screen and (min-width: 1024px) {
    .brand {
              margin-top: 30vh;
              padding-top: 15%; /* Add padding for smaller screens */
            }
  .brand > div {
    min-width: 47vw !important;

    .brand > h1 {
      font-size: 66px !important;
      font-weight: 900 !important;
    }
    .brand-p {
      font-size: 18px !important;
    }
    .brand-button {
      font-size: 16px !important;
      max-width: 100% !important;
      padding: 2% 7% !important; // Set padding as a percentage of the button's width and height
  
    }
    
  }
  .n-logo-bottom{
    bottom: 0 !important;  

  }
  // .n-logo-top{
  //   top: 45% !important;  
  //   left: -5% !important;

  // }

}



        `}
      </style>
    </>
  );
}

export default IndexHeader;