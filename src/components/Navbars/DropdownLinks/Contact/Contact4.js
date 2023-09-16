import React from "react";

// reactstrap components
import { Container, Row, Col, Card } from "reactstrap";
import icon1 from "../../../../assets/img/icon_01.svg";
import icon2 from "../../../../assets/img/icon_02.svg";
import icon3 from "../../../../assets/img/icon_03.svg";
import icon4 from "../../../../assets/img/icon_04.svg";
import icon5 from "../../../../assets/img/icon_05.svg";
import upImg from "../../../../assets/img/arc_up.svg";
import downImg from "../../../../assets/img/arc_down.svg";


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

function Company4() {

    
  return (
    <>
<div 
style={{
    background:
      "linear-gradient(to right , rgba(0, 0, 0, 0.9) 50%, rgba(23, 2, 41, 0.88) , rgba(0, 0, 0, 0.9) 50%)",
    fontFamily: "Museo Sans Rounded, sans-serif",
    display: "flex",
    flexDirection: "column", // Display items in a column
    justifyContent: "center",
    alignItems: "center",
    color: "#FFFFFF",
    // marginLeft: "30px",
    // marginTop: "130px",
    // marginBottom: "130px",
    // maxWidth: "1500px", // Adjust this value to match the screen width
  }}
>

  <motion.h3
   variants={fadeInAnimationVariants}
   initial="initial"
   whileInView="animate"
   viewport={{once: true,}}
   custom={1}
   className="mt-5 mb-3"
   style={{    
    paddingTop: "80px",
    fontWeight: "bold", fontSize: "190%"}}
  >What we believe in
  </motion.h3>
  <motion.p
   variants={fadeInAnimationVariants}
   initial="initial"
   whileInView="animate"
   viewport={{once: true,}}
   custom={2}
   style={{fontWeight: "normal", fontSize: "100%"}}

  >Our core values drive everything we do
  </motion.p>
<div style={{ 
    width: "100%", 
    display: "flex", 
    flexDirection: "row", 
    marginTop: "6vw", 
    marginBottom: "8vw",
    justifyContent: "center", 
    alignItems: "center" }}>
  <motion.Card   style={{
    flex: 1,
    display: "flex",
    flexDirection: "column",
    marginRight: "-5vw",
    // margin: "0 -1px", // Reduce the margin here
    // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Add box shadow here
  }}
  variants={fadeInAnimationVariants}
  initial="initial"
  whileInView="animate"
  viewport={{once: true,}}
  custom={2}
  >
    <motion.img src={icon1} alt="Logo" 
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{once: true,}}
        custom={2}
  style={{ width: "55%", height: "auto" }} 
  />
    <h4 style={{ fontWeight: 700, 
    // maxWidth: "320px", 
    fontFamily: "Museo Sans Rounded, sans-serif", fontSize: "100%", 
    // paddingRight: "20px", marginTop: "0px" 
    }}>
        Extreme ownership
    </h4>
 

   
  </motion.Card>
  <motion.Card
  style={{
    flex: 1,
    display: "flex",
    flexDirection: "column",
    marginRight: "2vw",

    // margin: "0 -1px", // Remove or adjust the margin here
    // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Add box shadow here
    marginTop: "-2vw", // Adjust this value to move the image upwards
  }}
  variants={fadeInAnimationVariants}
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
  custom={2}
>
  <motion.img
    src={upImg}
    alt="Logo"
    variants={fadeInAnimationVariants}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    custom={2}
    style={{ width: "90%", height: "auto" }}
  />
</motion.Card>


  <motion.Card   style={{
    flex: 1,
    display: "flex",
    flexDirection: "column",
    marginTop: "-2vw", 
    marginRight: "-4vw",
    // Adjust this value to move the image upwards
    // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Add box shadow here
  }}
   variants={fadeInAnimationVariants}
   initial="initial"
   whileInView="animate"
   viewport={{once: true,}}
   custom={3}>
      <motion.img src={icon2} alt="Logo" 
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{once: true,}}
        custom={2}
  style={{ width: "55%", height: "auto" }} 
  />
    <h4 style={{ fontWeight: 700, 
    // maxWidth: "300px", 
    fontFamily: "Museo Sans Rounded, sans-serif", 
    fontSize: "100%", 
    // paddingRight: "20px", 
    // marginTop: "-5px" 
    }}>
        Compassion
    </h4>
  
  </motion.Card>
  <motion.Card   style={{
    flex: 1,
    display: "flex",
    flexDirection: "column",
    marginTop: "-4vw", // Adjust this value to move the image upwards
    marginRight: "1vw",

    // margin: "0 -1px", // Reduce the margin here
    // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Add box shadow here
  }}
   variants={fadeInAnimationVariants}
   initial="initial"
   whileInView="animate"
   viewport={{once: true,}}
   custom={3}>
      <motion.img src={downImg} alt="Logo" 
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{once: true,}}
        custom={2}
  style={{ width: "90%", height: "auto" }} 
  />
    
  </motion.Card>

  <motion.Card   style={{
    flex: 1,
    display: "flex",
    flexDirection: "column",
    marginTop: "-2vw", // Adjust this value to move the image upwards
    marginRight: "-4vw",


    // margin: "0 -1px", // Reduce the margin here
    // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Add box shadow here
  }}
  variants={fadeInAnimationVariants}
  initial="initial"
  whileInView="animate"
  viewport={{once: true,}}
  custom={4}>
      <motion.img src={icon3} alt="Logo" 
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{once: true,}}
        custom={2}
  style={{ width: "55%", height: "auto" }} 
  />
    <h4 style={{ fontWeight: 700, 
    // maxWidth: "300px", 
    fontFamily: "Museo Sans Rounded, sans-serif", 
    fontSize: "100%", 
    // paddingRight: "20px", marginTop: "-40px"
     }}>
        Integrity
    </h4>
    
    
  </motion.Card>
  <motion.Card
  style={{
    flex: 1,
    display: "flex",
    flexDirection: "column",
    // margin: "0 -1px", // Remove or adjust the margin here
    // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Add box shadow here
    marginTop: "-2vw", // Adjust this value to move the image upwards
    marginRight: "1vw",

  }}
  variants={fadeInAnimationVariants}
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
  custom={2}
>
  <motion.img
    src={upImg}
    alt="Logo"
    variants={fadeInAnimationVariants}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    custom={2}
    style={{ width: "90%", height: "auto" }}
  />
</motion.Card>

  <motion.Card   style={{
    flex: 1,
    display: "flex",
    flexDirection: "column",
    marginTop: "-3vw", // Adjust this value to move the image upwards
    marginRight: "-4vw",


    // margin: "0 -1px", // Reduce the margin here
    // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Add box shadow here
  }}
   variants={fadeInAnimationVariants}
   initial="initial"
   whileInView="animate"
   viewport={{once: true,}}
   custom={3}>
      <motion.img src={icon4} alt="Logo" 
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{once: true,}}
        custom={2}
  style={{ width: "55%", height: "auto" }} 
  />
    <h4 style={{ fontWeight: 700,
    //  maxWidth: "300px", 
    fontFamily: "Museo Sans Rounded, sans-serif", fontSize: "100%", 
    // paddingRight: "20px", 
    // marginTop: "-5px" 
    }}>
        Excellence
    </h4>
   
   
  </motion.Card>
  <motion.Card   style={{
    flex: 1,
    display: "flex",
    flexDirection: "column",
    marginTop: "-4%", // Adjust this value to move the image upwards
    marginRight: "0%",

    // margin: "0 -1px", // Reduce the margin here
    // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Add box shadow here
  }}
   variants={fadeInAnimationVariants}
   initial="initial"
   whileInView="animate"
   viewport={{once: true,}}
   custom={3}>
      <motion.img src={downImg} alt="Logo" 
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{once: true,}}
        custom={2}
  style={{ width: "90%", height: "auto" }} 
  />
    
  </motion.Card>
  <motion.Card   style={{
    flex: 1,
    display: "flex",
    flexDirection: "column",

    // margin: "0 -1px", // Reduce the margin here
    // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Add box shadow here
  }}
   variants={fadeInAnimationVariants}
   initial="initial"
   whileInView="animate"
   viewport={{once: true,}}
   custom={3}>
      <motion.img src={icon5} alt="Logo" 
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{once: true,}}
        custom={2}
  style={{ width: "55%", height: "auto" }} 
  />
    <h4 style={{ fontWeight: 700, 
    // maxWidth: "300px", 
    fontFamily: "Museo Sans Rounded, sans-serif", fontSize: "100%",
    //  paddingRight: "20px", 
    // marginTop: "-5px" 
    }}>
        Openness & transparency
    </h4>
    
  </motion.Card>
 

</div>


</div>

    </>
  );
}

export default Company4;
