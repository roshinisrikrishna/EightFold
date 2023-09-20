import React from "react";

// reactstrap components
import { Container, Row, Col, Card } from "reactstrap";

import icon3 from "../../../../assets/img/careers2.svg";



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
    // background:
      // "linear-gradient(to right , rgba(0, 0, 0, 0.9) 50%, rgba(23, 2, 41, 0.88) , rgba(0, 0, 0, 0.9) 50%)",
        display: "flex",
    flexDirection: "column", // Display items in a column
    justifyContent: "center",
    alignItems: "center",
    // color: "#FFFFFF",
    // marginLeft: "30px",
    // marginTop: "130px",
    // marginBottom: "130px",
    maxWidth: "100vw", // Adjust this value to match the screen width
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
    paddingTop: "8%",
    textAlign:"center",
    fontFamily: "Museo Sans Rounded, sans-serif",

    fontWeight: "bold", fontSize: "230%"}}
  >What we believe in
  </motion.h3>
  <motion.img src={icon3} alt="Logo" 
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{once: true,}}
        custom={2}
  style={{     paddingTop: "5%" ,
  width: "55%", height: "auto" }} 
  />
 
<Container style={{ 
    width: "100vw",
    // display: "flex",
    // flexDirection: "row",
    paddingTop: "1%" ,
    marginBottom: "8vw",
    color: "#484B58",
    justifyContent: "center", 
    alignItems: "center",
    textAlign: "center" }}>
 
<Row>
  <Col md={4} lg={4} xs={12}>
  <motion.Card   style={{
    flex: 1,
    display: "flex",
    flexDirection: "column",
    // marginTop: "-2vw", 
    // marginRight: "-4%",
//     margin: "0 6%",
// width: "30%"

    // Adjust this value to move the image upwards
    // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Add box shadow here
  }}
   variants={fadeInAnimationVariants}
   initial="initial"
   whileInView="animate"
   viewport={{once: true,}}
   custom={3}>
      
    <h4 style={{ fontWeight: 900, 
    // maxWidth: "300px", 
    fontFamily: "Museo Sans Rounded, sans-serif", 
    fontSize: "125%", 
    // paddingRight: "20px", 
    // marginTop: "-5px" 
    }}>
        AI<br/>
      for good
    </h4>
<p style={{fontWeight: 400, 
    // maxWidth: "300px", 
    fontSize: "90%",
    color: "gray" // Change the color to gray
  }}>We deeply believe technology can improve people’s lives. As one of the most advanced AI companies in the world, we’re determined to make a positive impact.</p>
    <p style={{fontWeight: 400, 
    // maxWidth: "70%", 
    fontSize: "75%",
    color: "#008FBF" // Change the color to gray
  }}>Discover how</p>
  
  </motion.Card>

  </Col>
  <Col md={4} lg={4} xs={12}>

  <motion.Card   style={{
    flex: 1,
    display: "flex",
    flexDirection: "column",
    // marginTop: "-2vw", 
    // marginRight: "-4%",
//     margin: "0 6%",
// width: "30%"


    // margin: "0 -1px", // Reduce the margin here
    // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Add box shadow here
  }}
  variants={fadeInAnimationVariants}
  initial="initial"
  whileInView="animate"
  viewport={{once: true,}}
  custom={4}>
      
    <h4 style={{ fontWeight: 900, 
    // maxWidth: "300px", 
    fontFamily: "Museo Sans Rounded, sans-serif", 
    fontSize: "125%", 
    // paddingRight: "20px", marginTop: "-40px"
     }}>
        Workforce <br />
transformation
    </h4>
<p style={{fontWeight: 400, 
    // maxWidth: "70%", 
    fontSize: "90%",
    color: "gray" // Change the color to gray
  }}>Our mission is to help organizations unlock the potential of their workforces and help everyone fulfill their career potential.</p>
    <p style={{fontWeight: 400, 
    // maxWidth: "70%", 
    fontSize: "75%",
    color: "#008FBF" // Change the color to gray
  }}>Plan your ideal workforce</p>
    
    
  </motion.Card>
 </Col>
 <Col md={4} lg={4} xs={12}>


  <motion.Card   style={{
    flex: 1,
    display: "flex",
    flexDirection: "column",
    // marginTop: "-2vw", 
    // marginRight: "-4%",
    // margin: "0 3%",
// width: "30%"

    // margin: "0 -1px", // Reduce the margin here
    // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Add box shadow here
  }}
   variants={fadeInAnimationVariants}
   initial="initial"
   whileInView="animate"
   viewport={{once: true,}}
   custom={3}>
      {/* <motion.img src={icon4} alt="Logo" 
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{once: true,}}
        custom={2}
  style={{ width: "55%", height: "auto" }} 
  /> */}
    <h4 style={{ fontWeight: 900,
    // maxWidth: "300px", 
    fontFamily: "Museo Sans Rounded, sans-serif", 
    fontSize: "125%",
    }}>
Diversity, equity
and inclusion    </h4>
<p style={{fontWeight: 400, 
    // maxWidth: "300px", 
    fontSize: "90%",
    color: "gray" // Change the color to gray
  }}>Our commitment to diversity starts internally. Our diverse and highly skilled team is building an AI-driven platform that helps positively impact DEI issues on a global scale.</p>
<p style={{fontWeight: 400, 
    // maxWidth: "70%", 
    fontSize: "75%",
    color: "#008FBF" // Change the color to gray
  }}>Improve DEI
</p>
   
   
  </motion.Card>
  </Col>
  </Row>


</Container>


</div>

    </>
  );
}

export default Company4;
