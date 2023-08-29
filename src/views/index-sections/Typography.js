import React from "react";

// reactstrap components
import { Container, Row, Col, Card } from "reactstrap";
import typoImg from "../../assets/img/woman.jpg";
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

function Typography() {
  return (
    <>
<div
  style={{
    display: "flex",
    flexDirection: "column", // Display items in a column
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "30px",
    marginTop: "130px",
    marginBottom: "130px",
    maxWidth: "1280px", // Adjust this value to match the screen width
  }}
>
  <motion.h1
   variants={fadeInAnimationVariants}
   initial="initial"
   whileInView="animate"
   viewport={{once: true,}}
   custom={1}
  >What's new?
  </motion.h1>
  <img src={typoImg} alt="Logo" 
    style={{ width: "800px", height: "auto", borderRadius: "1%", display: "block", marginTop: "20px" }} 
  />

<div style={{ width: "1200px", display: "flex", flexDirection: "row", marginTop: "40px", justifyContent: "center", alignItems: "center" }}>
  <motion.Card   style={{
    paddingLeft: "20px",
    backgroundColor: "#FFFFFF",
    height: "400px",
    maxWidth: "380px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    margin: "0 10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Add box shadow here
  }}
  variants={fadeInAnimationVariants}
  initial="initial"
  whileInView="animate"
  viewport={{once: true,}}
  custom={2}
  >
    <h4 style={{ fontWeight: 700, maxWidth: "320px", 
    fontFamily: "Museo Sans Rounded, sans-serif", fontSize: "20px", 
    paddingRight: "20px", marginTop: "0px" }}>
      State of AI in HR: Josh Bersin and our CEO Ashutosh Garg talk emerging tech in talent
    </h4>
    <div style={{ alignItems: "center", justifyContent: "center", fontWeight: "bold", 
    fontSize: "12px", backgroundColor: "#7E3A77", color: "white", borderRadius: "25px", 
    display: "flex", alignItems: "center", padding: "5px" }}>
  <i className="fas fa-folder" style={{ marginRight: "5px" }}></i>
  <p className="mt-0 ml-1 mr-1 mb-0" style={{ fontWeight: 400 }}>Blog</p>
</div>

    <p style={{ fontWeight: 400, fontSize: "16px", maxWidth: "330px", paddingRight: "20px",
     marginTop: "10px" }}>
      In this exclusive Q&A, HR expert Josh Bersin interviews our CEO and Co-founder
      Ashutosh Garg on the state of AI - the benefits, regulations, and how this revolutionary
      technology can help any organization reach its goals.
    </p>
    <p style={{ fontSize: "14px", fontWeight: "bold", color: "#008FBF", 
    paddingRight: "20px", marginTop: "0px" }}>Read blog</p>
  </motion.Card>

  <motion.Card   style={{
    paddingLeft: "20px",
    backgroundColor: "#FFFFFF",
    height: "400px",
    maxWidth: "380px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    margin: "0 10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Add box shadow here
  }}
   variants={fadeInAnimationVariants}
   initial="initial"
   whileInView="animate"
   viewport={{once: true,}}
   custom={3}>
    <h4 style={{ fontWeight: 700, maxWidth: "300px", 
    fontFamily: "Museo Sans Rounded, sans-serif", fontSize: "20px", paddingRight: "20px", 
    marginTop: "-5px" }}>
      Eightfold recognised as a Strategic Leader by Europe's #1 HR industry analyst
    </h4>
    <div style={{ alignItems: "center", justifyContent: "center", fontWeight: "bold", 
    fontSize: "12px", backgroundColor: "#7E3A77", color: "white", borderRadius: "25px", 
    display: "flex", alignItems: "center", padding: "5px" }}>
  <i className="fas fa-folder" style={{ marginRight: "5px" }}></i>
  <p className="mt-0 ml-1 mr-1 mb-0" style={{ fontWeight: 400 }}>Blog</p>
</div>

    <p style={{ fontWeight: 400, fontSize: "16px", maxWidth: "280px", paddingRight: "20px", 
    marginTop: "10px" }}>
      This achievement is a testament to Eightfold's unwavering dedication to delivering
      top-notch solutions in the Talent Acquisition space.
    </p>
    <p style={{ fontSize: "14px", fontWeight: "bold", color: "#008FBF", 
    paddingRight: "20px", paddingTop: "40px" }}>Download report</p>
  </motion.Card>

  <motion.Card   style={{
    paddingLeft: "20px",
    backgroundColor: "#FFFFFF",
    height: "400px",
    maxWidth: "380px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    margin: "0 10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Add box shadow here
  }}
  variants={fadeInAnimationVariants}
  initial="initial"
  whileInView="animate"
  viewport={{once: true,}}
  custom={4}>
    <h4 style={{ fontWeight: 700, maxWidth: "300px", 
    fontFamily: "Museo Sans Rounded, sans-serif", fontSize: "20px", 
    paddingRight: "20px", marginTop: "-40px" }}>
      Why it's time for AI-powered talent intelligence in your HR tech stack
    </h4>
    <div style={{ alignItems: "center", justifyContent: "center", fontWeight: "bold", 
    fontSize: "12px", backgroundColor: "#7E3A77", color: "white", borderRadius: "25px", 
    display: "flex", alignItems: "center", padding: "5px" }}>
  <i className="fas fa-folder" style={{ marginRight: "5px" }}></i>
  <p className="mt-0 ml-1 mr-1 mb-0" style={{ fontWeight: 400 }}>Blog</p>
</div>

    <p style={{ fontWeight: 400, fontSize: "16px", maxWidth: "350px", paddingRight: "20px", marginTop: "10px" }}>
      AI-powered talent intelligence is the key to building a stronger, adaptable, and more agile 
      workforce to face the many business challenges ahead.
    </p>
    <p style={{ fontSize: "14px", fontWeight: "bold", color: "#008FBF", 
    paddingRight: "20px", marginTop: "40px", marginBottom:"-20px" }}>Read blog</p>
  </motion.Card>
</div>

<p style={{ fontSize: "17px", fontWeight: 500, color: "#008FBF", 
     paddingTop: "80px" }}>View all resources</p>

</div>

    </>
  );
}

export default Typography;
