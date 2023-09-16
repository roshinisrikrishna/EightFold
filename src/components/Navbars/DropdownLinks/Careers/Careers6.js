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

import js1Img from "../../../../assets/img/soldier.jpg";
import js2Img from "../../../../assets/img/toysoldier.jpg";
import js3Img from "../../../../assets/img/careerglobe.jpg";

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
     style={{ 
    //     backgroundColor: "#242f40", 
    //  color: "#FFFFFF",  
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
style={{ fontSize: "250%", textAlign: "center", fontWeight: 600,color: "#222222",
 fontFamily: "Museo Sans Rounded, sans-serif" 
}}
variants={fadeInAnimationVariants}
initial="initial"
whileInView="animate"
viewport={{once: true,}}
custom={1}>
How we’re changing work
</motion.h2>
<motion.p 
style={{ fontSize: "100%", textAlign: "center", fontWeight: 600, color: "#484B58",
 fontFamily: "Museo Sans Rounded, sans-serif" 
}}
variants={fadeInAnimationVariants}
initial="initial"
whileInView="animate"
viewport={{once: true,}}
custom={1}>
See how we’re making a difference for workers around the world.

</motion.p>

 

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
  border: "1px solid #d6d6d6" ,
  borderRadius: "10px",
  height: "100%", 
  borderTopLeftRadius: "10px",borderTopRightRadius: "10px",
  // maxWidth: "100%", 
  background: "rgb(252,252,252)",
  flex: 1, 
  display: "flex", 
  flexDirection: "column", 
  alignItems: "flex-start", 
  margin: "0 0", 
  
//   boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Adding a subtle shadow
}}
variants={fadeInAnimationVariants}
initial="initial"
whileInView="animate"
viewport={{once: true,}}
custom={2}>
    <img src={js1Img} alt="Logo" 
  style={{borderTopLeftRadius: "10px",borderTopRightRadius: "10px",
   width: "100%", height: "40%" }} 
  />
    <h4 style={{   paddingLeft: "5%",paddingRight: "2%",
fontWeight: 900, maxWidth: "100%", 
    fontFamily: "Museo Sans Rounded, sans-serif", fontSize: "100%",
    }}>
Veterans    </h4>
    

    <p style={{   paddingLeft: "5%",paddingRight: "2%",
fontWeight: 400, fontSize: "80%", maxWidth: "100%",    color: "#484B58",
}}>
      We help veterans find jobs based on their experience
    </p>
    <p style={{   paddingLeft: "5%",paddingRight: "2%",
fontSize: "80%", fontWeight: 500, color: "#2285ba"}}>Discover how {`>`}</p>
</motion.Card>
</Col>
<Col xs={12} md={4} xl={4} style={{ margin: "10px 0", display: "flex" }}>

<motion.Card style={{ 
 border: "1px solid #d6d6d6" ,
 borderRadius: "10px",
 height: "100%", 
 borderTopLeftRadius: "10px",borderTopRightRadius: "10px",
 // maxWidth: "100%", 
 background: "rgb(252,252,252)",
 flex: 1, 
 display: "flex", 
 flexDirection: "column", 
 alignItems: "flex-start", 
 margin: "0 0", 
}}
variants={fadeInAnimationVariants}
initial="initial"
whileInView="animate"
viewport={{once: true,}}
custom={3}>
    <img src={js2Img} alt="Logo" 
  style={{ borderTopLeftRadius: "10px",borderTopRightRadius: "10px",
  width: "100%", height: "40%" }} 
  />
    <h4 style={{   paddingLeft: "5%",paddingRight: "2%",
fontWeight: 700, maxWidth: "100%", 
    fontFamily: "Museo Sans Rounded, sans-serif", fontSize: "100%", 
     }}>
      Frontline workers
    </h4>
    

    <p style={{      color: "#484B58",
 paddingLeft: "5%",paddingRight: "2%",
fontWeight: 400, fontSize: "80%", maxWidth: "100%",  }}>
    Building real careers through workforce development
    </p>
    <p style={{   paddingLeft: "5%",paddingRight: "2%",
fontSize: "80%", fontWeight: 500,color: "#2285ba"  }}>See the exchange {`>`}</p>
</motion.Card>
</Col>
<Col xs={12} md={4} xl={4} style={{ margin: "10px 0", display: "flex" }}>
<motion.Card style={{ 
 border: "1px solid #d6d6d6" ,
 borderRadius: "10px",
 height: "100%", 
 borderTopLeftRadius: "10px",borderTopRightRadius: "10px",
 // maxWidth: "100%", 
 background: "rgb(252,252,252)",
 flex: 1, 
 display: "flex", 
 flexDirection: "column", 
 alignItems: "flex-start", 
 margin: "0 0", 
}}
variants={fadeInAnimationVariants}
initial="initial"
whileInView="animate"
viewport={{once: true,}}
custom={4}>
    <img src={js3Img} alt="Logo" 
  style={{ borderTopLeftRadius: "10px",borderTopRightRadius: "10px",width: "100%", height: "40%" }} 
  />
    <h4 style={{    paddingLeft: "5%",paddingRight: "2%",
fontWeight: 700, maxWidth: "100%", 
    fontFamily: "Museo Sans Rounded, sans-serif", fontSize: "100%", 
     }}>
      Diversity, equity, and inclusion
    </h4>
    

    <p style={{    paddingLeft: "5%",paddingRight: "2%",
fontWeight: 400, fontSize: "80%", maxWidth: "100%",    color: "#484B58",
}}>
      We're helping organizations make a meaningful impact on diversity, equity,
      and inclusion.
          </p>
    <p style={{    paddingLeft: "5%",paddingRight: "2%",
fontSize: "80%", fontWeight: 500,color: "#2285ba"  }}>Improve DEI {`>`}</p>
</motion.Card>
</Col>
          </Row>
</Container>

<h1 style={{ fontSize: "45px", fontWeight: 600,  
     paddingTop: "80px",  fontFamily: "Museo Sans Rounded, sans-serif" 
    }}>Our commitment to diversity, equity, and inclusion</h1>

    <p style={{ maxWidth: "99%",fontSize: "17px", fontWeight: 400,  color: "#484B58",
     paddingTop: "10px",  textAlign: "center"
    }}>We embrace diverse perspectives, ideas, and backgrounds. We’re committed to providing equal employment opportunities for all applicants and employees. We strive to ensure fair opportunities for all and do not discriminate based upon race, religion, color, national origin, sex, sexual orientation, gender identity, gender expression, age, status as a protected veteran, status as an individual with a disability, genetic information, political views or activity, or any other characteristic protected by U.S. federal, state or local laws, or the laws of the country or jurisdiction where you work.</p>
     <p style={{ maxWidth: "99%",fontSize: "17px", fontWeight: 700,  color: "#484B58",
     paddingTop: "10px",  textAlign: "center"
    }}>
Notice to candidates who are New York City residents:
        </p>
     <p style={{ maxWidth: "99%",fontSize: "17px", fontWeight: 400,  color: "#484B58",
     paddingTop: "0px",  textAlign: "center"
    }}>
The Eightfold Matching Model is used to assess candidates. For this model, the job 
qualifications and characteristics used, the types of data collected, the sources of that 
data, Eightfold’s data retention policy, and other information is located <span style={{color: "#2285ba"}}>here</span> . You may 
request an alternative selection process or a reasonable accommodation under other laws, if
 available, by emailing <span style={{color: "#2285ba"}}>careers@eightfold.ai</span> . The results of the bias audit of this model 
 are <span style={{color: "#2285ba"}}>available here</span>.        
 </p>

</Container>

      </Container>
    </>
  );
}

export default Javascript;
