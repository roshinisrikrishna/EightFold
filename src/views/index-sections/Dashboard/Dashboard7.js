import React from "react";
// react plugins that creates an input with a date picker
import Datetime from "react-datetime";
// reactstrap components
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
import {motion} from "framer-motion";

import js1Img from "../../../assets/img/JS1.webp";
import js2Img from "../../../assets/img/JS2.jpg";
import js3Img from "../../../assets/img/JS3.jpg";

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

function Javascript() {
  const [modal1, setModal1] = React.useState(false);
  const [modal2, setModal2] = React.useState(false);
  return (
    <>
     
     <Container className="mt-5" 
     style={{ backgroundColor: "#242f40", 
     color: "#FFFFFF",  
     paddingTop: "5%", 
     paddingBottom: "1%",
     maxWidth: "100%",

     }}>
     <Container
  style={{
    display: "flex",
    flexDirection: "column", // Display items in a column
    justifyContent: "center",
    alignItems: "center",
    // marginLeft: "30px",
    // marginTop: "130px",
    // marginBottom: "130px",
    maxWidth: "100%", // Adjust this value to match the screen width
  }}
>
<motion.h2 
style={{ fontSize: "230%", textAlign: "center", fontWeight: 600, fontFamily: "Museo Sans Rounded, sans-serif" }}
variants={fadeInAnimationVariants}
initial="initial"
whileInView="animate"
viewport={{once: true,}}
custom={1}>
  See how great organizations<br />are transforming their workforces with AI.
</motion.h2>


 

<Container style={{ 
  maxWidth: "100%", 
  // display: "flex", 
  // flexDirection: "row", 
  marginTop: "5%", 
  justifyContent: "center", 
  alignItems: "center" }}>

<Row style={{ display: "flex" }}>
            <Col xs={12} md={4} xl={4} style={{ margin: "10px 0", display: "flex" , 
}}>

<motion.Card style={{ 
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
    <h4 style={{   paddingLeft: "5%",paddingRight: "2%",
fontWeight: 700, maxWidth: "100%", 
    fontFamily: "Museo Sans Rounded, sans-serif", fontSize: "100%",
    }}>
      Talent acquisition & talent management improvements at Vodafone
    </h4>
    

    <p style={{   paddingLeft: "5%",paddingRight: "2%",
fontWeight: 400, fontSize: "80%", maxWidth: "100%", }}>
      Vodafone has created a system that makes learning personal and purposeful. 
    </p>
    <p style={{   paddingLeft: "5%",paddingRight: "2%",
fontSize: "80%", fontWeight: 500, }}>Read customer story</p>
</motion.Card>
</Col>
<Col xs={12} md={4} xl={4} style={{ margin: "10px 0", display: "flex" }}>

<motion.Card style={{ 
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
    <h4 style={{   paddingLeft: "5%",paddingRight: "2%",
fontWeight: 700, maxWidth: "100%", 
    fontFamily: "Museo Sans Rounded, sans-serif", fontSize: "100%", 
     }}>
      A new way to find talent at Chevron
    </h4>
    

    <p style={{   paddingLeft: "5%",paddingRight: "2%",
fontWeight: 400, fontSize: "80%", maxWidth: "100%",  }}>
    How Chevron drilled into its HR data to tap into new talent.
    </p>
    <p style={{   paddingLeft: "5%",paddingRight: "2%",
fontSize: "80%", fontWeight: 500,  }}>Read customer story</p>
</motion.Card>
</Col>
<Col xs={12} md={4} xl={4} style={{ margin: "10px 0", display: "flex" }}>
<motion.Card style={{ 
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
    <h4 style={{    paddingLeft: "5%",paddingRight: "2%",
fontWeight: 700, maxWidth: "100%", 
    fontFamily: "Museo Sans Rounded, sans-serif", fontSize: "100%", 
     }}>
      Transforming talent at scale at Bayer
    </h4>
    

    <p style={{    paddingLeft: "5%",paddingRight: "2%",
fontWeight: 400, fontSize: "80%", maxWidth: "100%",  }}>
      How Eightfold helped Bayerto deliver its technology ambitions from a talent perspective
      at scale.
          </p>
    <p style={{    paddingLeft: "5%",paddingRight: "2%",
fontSize: "80%", fontWeight: 500,  }}>View customer story</p>
</motion.Card>
</Col>
          </Row>
</Container>

<p style={{ fontSize: "17px", fontWeight: 500,  
     paddingTop: "80px" }}>See more customer stories</p>

</Container>

      </Container>
    </>
  );
}

export default Javascript;
