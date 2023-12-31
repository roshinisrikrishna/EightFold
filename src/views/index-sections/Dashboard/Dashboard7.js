import React, { useState, useEffect } from "react";
// Import necessary dependencies from React and other libraries

// Importing Date and Time picker component from react-datetime
import Datetime from "react-datetime";

// Importing various components and styles from the Reactstrap library
import {
  Button,
  FormGroup,
  Container,
  Modal,
  ModalBody,
  Row,
  Col,
  Card,
  UncontrolledTooltip,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover,
} from "reactstrap";

// Import motion for animations
import { motion } from "framer-motion";

// Importing images for use in the component
import js1Img from "../../../assets/img/JS1.webp";
import js2Img from "../../../assets/img/JS2.jpg";
import js3Img from "../../../assets/img/JS3.jpg";

// Define animation variants for the Framer Motion library
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

// Define the functional component named "Javascript"
function Javascript() {
  // Define a state variable "screenWidth" and a function "setScreenWidth" to manage it
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Function to update screen width when the window is resized
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  // Attach an event listener for window resize when the component mounts
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Return the JSX for the component

  return (
    <>
     
     <Container className="mt-5 see-main" 
     style={{ backgroundColor: "#242f40", 
     color: "#FFFFFF",  
     paddingTop: "5%", 
     paddingBottom: "1%",
     maxWidth: "100%",
      display: "flex",
    flexDirection: "column", // Display items in a column
    justifyContent: "center",
    alignItems: "center",
    // marginLeft: "30px",
    // marginTop: "130px",
    // marginBottom: "130px",
    // maxWidth: "100%", // Adjust this value to match the screen width
  }}
>
<motion.h2 
className="see-h2"
style={{ 
  paddingTop: "5vh",
  fontSize: screenWidth < 700 ? "8vw" : "4vw", 
  textAlign: "center", fontWeight: 600, fontFamily: "Museo Sans Rounded, sans-serif" }}
variants={fadeInAnimationVariants}
initial="initial"
whileInView="animate"
viewport={{once: true,}}
custom={1}>
  See how great organizations<br />are transforming their workforces with AI.
</motion.h2>


 

<Container style={{ 
  maxWidth: "100vw", 
  // display: "flex", 
  // flexDirection: "row", 
  marginTop: "5%", 
  justifyContent: "center", 
  alignItems: "center" }}>

<Row style={{ display: "flex" }}>
            <Col xs={12} md={6} lg={4} xl={4} style={{ margin: "10px 0", display: "flex" , 
}}>

<motion.Card className="see-card" style={{ 
  borderBottom: "1px solid transparent", 
  borderRight: "1px solid transparent", 
  borderLeft: "1px solid transparent", 
  backgroundColor: "#242f40", 
  color: "#FFFFFF", 
  height: "100%", 
  // maxWidth: "100%", 
  flex: 1, 
  display: "flex", 
  flexDirection: "column", 
  alignItems: "flex-start", 
  margin: "0 0", 
  borderRadius: "10px", 
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Adding a subtle shadow
  borderImage: "linear-gradient(to right, #a90bde, #002aeb) 1", // Gradient border
}}
variants={fadeInAnimationVariants}
initial="initial"
whileInView="animate"
viewport={{once: true,}}
custom={2}>
    <img src={js1Img} alt="Logo" 
  style={{ width: "100%", height: "40%" }} 
  />
    <h4 className="see-h4"
style={{   paddingLeft: "5%",paddingRight: "2%",
fontWeight: 700, maxWidth: "100%", 
    fontFamily: "Museo Sans Rounded, sans-serif", fontSize: "100%",
    }}>
      Talent acquisition & talent management improvements at Vodafone
    </h4>
    

    <p className="see-p"
style={{   paddingLeft: "5%",paddingRight: "2%",
fontWeight: 400, fontSize: "80%", maxWidth: "100%", }}>
      Vodafone has created a system that makes learning personal and purposeful. 
    </p>
    <p className="see-p1"
style={{   paddingLeft: "5%",paddingRight: "2%",
fontSize: "80%", fontWeight: 500, }}>Read customer story</p>
</motion.Card>
</Col>
<Col xs={12} md={6} lg={4} xl={4} style={{ margin: "10px 0", display: "flex" }}>

<motion.Card className="see-card" style={{ 
  borderBottom: "1px solid transparent", 
  borderRight: "1px solid transparent", 
  borderLeft: "1px solid transparent", 
  backgroundColor: "#242f40", 
  color: "#FFFFFF", 
  height: "100%", 
  // maxWidth: "100%", 
  flex: 1, 
  display: "flex", 
  flexDirection: "column", 
  alignItems: "flex-start", 
  margin: "0 0", 
  borderRadius: "10px", 
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Adding a subtle shadow
  borderImage: "linear-gradient(to right, #a90bde, #002aeb) 1", // Gradient border
}}
variants={fadeInAnimationVariants}
initial="initial"
whileInView="animate"
viewport={{once: true,}}
custom={3}>
    <img src={js2Img} alt="Logo" 
  style={{ width: "100%", height: "40%" }} 
  />
    <h4 className="see-h4"
style={{   paddingLeft: "5%",paddingRight: "2%",
fontWeight: 700, maxWidth: "100%", 
    fontFamily: "Museo Sans Rounded, sans-serif", fontSize: "100%", 
     }}>
      A new way to find talent at Chevron
    </h4>
    

    <p className="see-p mt-4"
style={{   paddingLeft: "5%",paddingRight: "2%",
fontWeight: 400, fontSize: "80%", maxWidth: "100%",  }}>
    How Chevron drilled into its HR data to tap into new talent.
    </p>
    <p className="see-p1"
style={{   paddingLeft: "5%",paddingRight: "2%",
fontSize: "80%", fontWeight: 500,  }}>Read customer story</p>
</motion.Card>
</Col>
<Col xs={12} md={6} lg={4} xl={4} style={{ margin: "10px 0", display: "flex" }}>
<motion.Card className="see-card" style={{ 
  borderBottom: "1px solid transparent", 
  borderRight: "1px solid transparent", 
  borderLeft: "1px solid transparent", 
  backgroundColor: "#242f40", 
  color: "#FFFFFF", 
  height: "100%", 
  // maxWidth: "380px", 
  flex: 1, 
  display: "flex", 
  flexDirection: "column", 
  alignItems: "flex-start", 
  margin: "0 10px", 
  borderRadius: "10px", 
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Adding a subtle shadow
  borderImage: "linear-gradient(to right, #a90bde, #002aeb) 1", // Gradient border
}}
variants={fadeInAnimationVariants}
initial="initial"
whileInView="animate"
viewport={{once: true,}}
custom={4}>
    <img src={js3Img} alt="Logo" 
  style={{ width: "100%", height: "40%" }} 
  />
    <h4 className="see-h4"
style={{    paddingLeft: "5%",paddingRight: "2%",
fontWeight: 700, maxWidth: "100%", 
    fontFamily: "Museo Sans Rounded, sans-serif", fontSize: "100%", 
     }}>
      Transforming talent at scale at Bayer
    </h4>
    

    <p className="see-p"
style={{    paddingLeft: "5%",paddingRight: "2%",
fontWeight: 400, fontSize: "80%", maxWidth: "100%",  }}>
      How Eightfold helped Bayerto deliver its technology ambitions from a talent perspective
      at scale.
          </p>
    <p className="see-p1"
style={{    paddingLeft: "5%",paddingRight: "2%",
fontSize: "80%", fontWeight: 500,  }}>View customer story</p>
</motion.Card>
</Col>
          </Row>
</Container>

<p className="see-p2"
style={{ fontSize: "17px", fontWeight: 500,  
     paddingTop: "80px" }}>See more customer stories</p>

</Container>

      <style>
        {`
          
      /* CSS for screen width 280px to 540px */
      @media only screen and (min-width: 280px) and (max-width: 766px) {
        
        .see-main {
          width: 100vw !important;
          
        }
        .see-card {
         height: 100% !important;
          
        }
       
          .see-h2 {
            font-size: 30px !important;
            font-weight: bold !important;
            line-height: 1.3em !important;
          }
         
           .see-h4{
             font-size: 20px !important;
             font-weight: 700 !important;

           }
           .see-p{
            // padding-top: -10% !important;
            font-size: 16px !important;
           }  
           .see-p1{
            // padding-top: -10% !important;
            font-size: 16px !important;
           } 
           .see-p2{
            // padding-top: -10% !important;
            font-size: 15px !important;
            padding-bottom: 10% !important;
           } 
         
           }
      @media only screen and (min-width: 767px) and (max-width: 912px) {

        .see-main {
          width: 100vw !important;
          
        }
        .see-card {
         height: 100% !important;
         border-radius: 10px !important;
          
        }
       
          .see-h2 {
            font-size: 32px !important;
            font-weight: 600 !important;
            line-height: 1.3em !important;
          }
         
           .see-h4{
             font-size: 20px !important;
             font-weight: 700 !important;

           }
           .see-p{
            // padding-top: -10% !important;
            font-size: 16px !important;
           }  
           .see-p1{
            // padding-top: -10% !important;
            font-size: 16px !important;
           } 
           .see-p2{
            // padding-top: -10% !important;
            font-size: 15px !important;
            padding-bottom: 10% !important;
           } 
         
           }
      @media only screen and (min-width: 1024px) {
        
        .see-main {
          width: 100vw !important;
          
        }
        .see-card {
         height: 75% !important;
          
        }
       
          .see-h2 {
            font-size: 43px !important;
            font-weight: bold !important;
            line-height: 1.3em !important;
          }
         
           .see-h4{
             font-size: 18px !important;
             font-weight: 700 !important;
             width: 25vw !important;

           }
           .see-p{
            // padding-top: -10% !important;
            font-size: 15px !important;
            width: 30vw !important;

           }  
           .see-p1{
            // padding-top: -10% !important;
            font-size: 14px !important;
           } 
           .see-p2{
            // padding-top: -10% !important;
            font-size: 15px !important;
            padding-bottom: 10% !important;
           } 
         
           }
      
        `}
      </style>
    </>
  );
}

export default Javascript;
