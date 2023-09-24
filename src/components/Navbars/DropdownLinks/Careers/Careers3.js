import React, { useState, useEffect } from "react";

// reactstrap components
import { Container, Row, Col, Card } from "reactstrap";
import icon1 from "../../../../assets/img/iconcareer1.svg";
import icon2 from "../../../../assets/img/iconcareer2.svg";
import icon3 from "../../../../assets/img/iconcareer3.svg";
import icon4 from "../../../../assets/img/iconcareer4.svg";
import icon5 from "../../../../assets/img/iconcareer5.svg";
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


function Javascript() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update the screenWidth when the window is resized
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
style={{ fontSize: "230%", textAlign: "center", fontWeight: 600, fontFamily: "Museo Sans Rounded, sans-serif" }}
variants={fadeInAnimationVariants}
initial="initial"
whileInView="animate"
viewport={{once: true,}}
custom={1}>
  Our values
</motion.h2>

<motion.h2 
style={{ fontSize: "100%", textAlign: "center", fontWeight: 400 }}
variants={fadeInAnimationVariants}
initial="initial"
whileInView="animate"
viewport={{once: true,}}
custom={1}>
Our values guide everything we do.

</motion.h2>

 

<Container style={{ 
  maxWidth: "100%", 
  // display: "flex", 
  // flexDirection: "row", 
  marginTop: "3%", 
  justifyContent: "center", 
  alignItems: "center" }}>
{screenWidth >= 1000 && (

<Row style={{ display: "flex" }}>

            <Col style={{ maxWidth:"20%",margin: "0 0", display: "flex" , 
}}>

<motion.Card style={{ 
  border: "1px solid #d6d6d6" ,
  borderRadius: "10px",
  height: "100%", 
  
  // maxWidth: "100%", 
  flex: 1, 
  display: "flex", 
  flexDirection: "column", 
  alignItems: "center", 
  justifyContent: "center",
  textAlign: "center",
  margin: "0 0"
  
//   boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Adding a subtle shadow
}}
variants={fadeInAnimationVariants}
initial="initial"
whileInView="animate"
viewport={{once: true,}}
custom={2}>
    <img src={icon1} alt="Logo" 
  style={{ paddingTop: "20%",
   width: "50%", height: "auto" }} 
  />
    <h4 style={{   paddingBottom: "12%",paddingLeft: "10%",paddingRight: "10%",
fontWeight: 600, maxWidth: "80%", marginTop: "-2%",
     fontSize: "100%",color: "#484B58",
    }}>
Extreme ownership    </h4>
    

</motion.Card>
            </Col>
          <Col style={{ maxWidth:"20%",margin: "0 0", display: "flex" , 
}}>

<motion.Card style={{ 
  border: "1px solid #d6d6d6" ,
  borderRadius: "10px",
  height: "100%", 
  
  // maxWidth: "100%", 
  flex: 1, 
  display: "flex", 
  flexDirection: "column", 
  alignItems: "center", 
  justifyContent: "center",
  textAlign: "center",
  margin: "0 0"
  
//   boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Adding a subtle shadow
}}
variants={fadeInAnimationVariants}
initial="initial"
whileInView="animate"
viewport={{once: true,}}
custom={2}>
    <img src={icon2} alt="Logo" 
  style={{ paddingTop: "20%",
   width: "50%", height: "auto" }} 
  />
    <h4 style={{   paddingBottom: "12%",paddingLeft: "10%",paddingRight: "10%",
fontWeight: 600, maxWidth: "80%", marginTop: "-2%",
     fontSize: "100%",color: "#484B58",
    }}>
Integrity    </h4>
    

</motion.Card>
            </Col>
          <Col style={{ maxWidth:"20%",margin: "0 0", display: "flex" , 
}}>

<motion.Card style={{ 
  border: "1px solid #d6d6d6" ,
  borderRadius: "10px",
  height: "100%", 
  
  // maxWidth: "100%", 
  flex: 1, 
  display: "flex", 
  flexDirection: "column", 
  alignItems: "center", 
  justifyContent: "center",
  textAlign: "center",
  margin: "0 0"
  
//   boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Adding a subtle shadow
}}
variants={fadeInAnimationVariants}
initial="initial"
whileInView="animate"
viewport={{once: true,}}
custom={2}>
    <img src={icon3} alt="Logo" 
  style={{ paddingTop: "20%",
   width: "50%", height: "auto" }} 
  />
    <h4 style={{   paddingBottom: "12%",paddingLeft: "10%",paddingRight: "10%",
fontWeight: 600, maxWidth: "80%", marginTop: "-2%",
     fontSize: "100%",color: "#484B58",
    }}>
Openness & transparency   </h4>
    

</motion.Card>
                  </Col>
                <Col style={{ maxWidth:"20%",margin: "0 0", display: "flex" , 
}}>

<motion.Card style={{ 
  border: "1px solid #d6d6d6" ,
  borderRadius: "10px",
  height: "100%", 
  
  // maxWidth: "100%", 
  flex: 1, 
  display: "flex", 
  flexDirection: "column", 
  alignItems: "center", 
  justifyContent: "center",
  textAlign: "center",
  margin: "0 0"
  
//   boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Adding a subtle shadow
}}
variants={fadeInAnimationVariants}
initial="initial"
whileInView="animate"
viewport={{once: true,}}
custom={2}>
    <img src={icon4} alt="Logo" 
  style={{ paddingTop: "20%",
   width: "50%", height: "auto" }} 
  />
    <h4 style={{   paddingBottom: "12%",paddingLeft: "10%",paddingRight: "10%",
fontWeight: 600, maxWidth: "80%", marginTop: "-2%",
     fontSize: "100%",color: "#484B58",
    }}>
Excellence    </h4>
    

</motion.Card>
            </Col>
            <Col xs={12} xl={4} style={{ maxWidth:"20%",margin: "0 0", display: "flex" , 
}}>

<motion.Card style={{ 
  border: "1px solid #d6d6d6" ,
  borderRadius: "10px",
  height: "100%", 
  
  // maxWidth: "100%", 
  flex: 1, 
  display: "flex", 
  flexDirection: "column", 
  alignItems: "center", 
  justifyContent: "center",
  textAlign: "center",
  margin: "0 0"
  
//   boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Adding a subtle shadow
}}
variants={fadeInAnimationVariants}
initial="initial"
whileInView="animate"
viewport={{once: true,}}
custom={2}>
    <img src={icon5} alt="Logo" 
  style={{ paddingTop: "20%",
   width: "50%", height: "auto" }} 
  />
    <h4 style={{   paddingBottom: "12%",paddingLeft: "10%",paddingRight: "10%",
fontWeight: 600, maxWidth: "80%", marginTop: "-2%",
     fontSize: "100%",color: "#484B58",
    }}>
Compassion  </h4>
    

</motion.Card>
            </Col>
            </Row>
)}
{screenWidth < 1000 && (
            <Row style={{display: "flex"}}>

<Col xs={12} xl={4} style={{ margin: "0 0", display: "flex" , 
}}>

<motion.Card style={{ 
border: "1px solid #d6d6d6" ,
borderRadius: "10px",
height: "100%", 

// maxWidth: "100%", 
flex: 1, 
display: "flex", 
flexDirection: "column", 
alignItems: "center", 
justifyContent: "center",
textAlign: "center",
margin: "0 0"

//   boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Adding a subtle shadow
}}
variants={fadeInAnimationVariants}
initial="initial"
whileInView="animate"
viewport={{once: true,}}
custom={2}>
<img src={icon1} alt="Logo" 
style={{ paddingTop: "20%",
width: "50%", height: "auto" }} 
/>
<h4 style={{   paddingBottom: "12%",paddingLeft: "10%",paddingRight: "10%",
fontWeight: 600, maxWidth: "80%", marginTop: "-2%",
fontSize: "100%",color: "#484B58",
}}>
Extreme ownership    </h4>


</motion.Card>
</Col>
<Col xs={12} xl={4} style={{ margin: "0 0", display: "flex" , 
}}>

<motion.Card style={{ 
border: "1px solid #d6d6d6" ,
borderRadius: "10px",
height: "100%", 

// maxWidth: "100%", 
flex: 1, 
display: "flex", 
flexDirection: "column", 
alignItems: "center", 
justifyContent: "center",
textAlign: "center",
margin: "0 0"

//   boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Adding a subtle shadow
}}
variants={fadeInAnimationVariants}
initial="initial"
whileInView="animate"
viewport={{once: true,}}
custom={2}>
<img src={icon2} alt="Logo" 
style={{ paddingTop: "20%",
width: "50%", height: "auto" }} 
/>
<h4 style={{   paddingBottom: "12%",paddingLeft: "10%",paddingRight: "10%",
fontWeight: 600, maxWidth: "80%", marginTop: "-2%",
fontSize: "100%",color: "#484B58",
}}>
Integrity    </h4>


</motion.Card>
</Col>
<Col xs={12} xl={4} style={{ margin: "0 0", display: "flex" , 
}}>

<motion.Card style={{ 
border: "1px solid #d6d6d6" ,
borderRadius: "10px",
height: "100%", 

// maxWidth: "100%", 
flex: 1, 
display: "flex", 
flexDirection: "column", 
alignItems: "center", 
justifyContent: "center",
textAlign: "center",
margin: "0 0"

//   boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Adding a subtle shadow
}}
variants={fadeInAnimationVariants}
initial="initial"
whileInView="animate"
viewport={{once: true,}}
custom={2}>
<img src={icon3} alt="Logo" 
style={{ paddingTop: "20%",
width: "50%", height: "auto" }} 
/>
<h4 style={{   paddingBottom: "12%",paddingLeft: "10%",paddingRight: "10%",
fontWeight: 600, maxWidth: "80%", marginTop: "-2%",
fontSize: "100%",color: "#484B58",
}}>
Openness & transparency   </h4>


</motion.Card>
      </Col>
    <Col xs={12} xl={4} style={{ margin: "0 0", display: "flex" , 
}}>

<motion.Card style={{ 
border: "1px solid #d6d6d6" ,
borderRadius: "10px",
height: "100%", 

// maxWidth: "100%", 
flex: 1, 
display: "flex", 
flexDirection: "column", 
alignItems: "center", 
justifyContent: "center",
textAlign: "center",
margin: "0 0"

//   boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Adding a subtle shadow
}}
variants={fadeInAnimationVariants}
initial="initial"
whileInView="animate"
viewport={{once: true,}}
custom={2}>
<img src={icon4} alt="Logo" 
style={{ paddingTop: "20%",
width: "50%", height: "auto" }} 
/>
<h4 style={{   paddingBottom: "12%",paddingLeft: "10%",paddingRight: "10%",
fontWeight: 600, maxWidth: "80%", marginTop: "-2%",
fontSize: "100%",color: "#484B58",
}}>
Excellence    </h4>


</motion.Card>
</Col>
<Col xs={12} xl={4} style={{ margin: "0 0", display: "flex" , 
}}>

<motion.Card style={{ 
border: "1px solid #d6d6d6" ,
borderRadius: "10px",
height: "100%", 

// maxWidth: "100%", 
flex: 1, 
display: "flex", 
flexDirection: "column", 
alignItems: "center", 
justifyContent: "center",
textAlign: "center",
margin: "0 0"

//   boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Adding a subtle shadow
}}
variants={fadeInAnimationVariants}
initial="initial"
whileInView="animate"
viewport={{once: true,}}
custom={2}>
<img src={icon5} alt="Logo" 
style={{ paddingTop: "20%",
width: "50%", height: "auto" }} 
/>
<h4 style={{   paddingBottom: "12%",paddingLeft: "10%",paddingRight: "10%",
fontWeight: 600, maxWidth: "80%", marginTop: "-2%",
fontSize: "100%",color: "#484B58",
}}>
Compassion  </h4>


</motion.Card>
</Col>
          </Row>

)}
        </Container>

        

              </Container>
            
        </Container>
    </>
  );
}

export default Javascript;
