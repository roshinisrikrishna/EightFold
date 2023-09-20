import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import typoImg from "../../../assets/img/woman.jpg";
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

function Typography() {
  return (
    <>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // marginLeft: "30px",
          // marginTop: "130px",
          // marginBottom: "130px",
          maxWidth: "100vw",
          margin: "0 auto", // Center the content horizontally
        }}
      >
        <motion.h1
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={1}
          style={{ textAlign: "center", paddingTop: "13%", fontSize: "250%", fontWeight: 600,
        fontFamily: "Museo Sans Rounded, sans-serif" }}
          
        >
          What's new?
        </motion.h1>
        <img
          src={typoImg}
          alt="Logo"
          style={{
            width: "70%",
            height: "auto",
            borderRadius: "1%",
            display: "block",
            marginTop: "20px",
          }}
        />

<Container
          style={{
            maxWidth: "95%",
            marginTop: "40px",
          }}
        >
           <Row style={{ display: "flex" }}>
            <Col xs={12} md={4} xl={4} style={{ margin: "10px 0", display: "flex" , 
}}>
              <motion.Card
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  margin: "0 1%",
                  paddingLeft: "5%",
                  paddingRight: "5%",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  height: "100%", // Set the height to 100% to match the height of other cards
                }}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={4}
              >
                <h4 style={{ fontWeight: 900 , maxWidth: "100%", 
    fontFamily: "Museo Sans Rounded, sans-serif", fontSize: "100%", 
    //  marginTop: "0px" 
    }}>
      State of AI in HR: Josh Bersin and our CEO Ashutosh Garg talk emerging tech in talent
    </h4>
    <div style={{ alignItems: "center", justifyContent: "center", fontWeight: "bold", 
    fontSize: "60%", backgroundColor: "#7E3A77", color: "white", borderRadius: "25px", 
    display: "flex", alignItems: "center", padding: "1%" }}>
  <i className="fas fa-folder" style={{ marginRight: "5px" }}></i>
  <p className="mt-0 ml-1 mr-1 mb-0" style={{ fontWeight: 400 }}>Blog</p>
</div>

    <p style={{ fontWeight: 400, fontSize: "80%", maxWidth: "100%", 
     marginTop: "10px" }}>
      In this exclusive Q&A, HR expert Josh Bersin interviews our CEO and Co-founder
      Ashutosh Garg on the state of AI - the benefits, regulations, and how this revolutionary
      technology can help any organization reach its goals.
    </p>
    <p style={{ fontSize: "70%", fontWeight: "bold", color: "#008FBF", 
    //  marginTop: "0px" 
    }}>Read blog</p>
              </motion.Card>
            </Col>
            <Col xs={12} md={4} xl={4} style={{ margin: "10px 0", display: "flex" }}>
              <motion.Card
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  margin: "0 1%",
                  paddingLeft: "5%",
                  paddingRight: "5%",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  height: "100%", // Set the height to 100% to match the height of other cards
                }}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={4}
              >
                       <h4 style={{ fontWeight: "bolder" , maxWidth: "100%", 
    fontFamily: "Museo Sans Rounded, sans-serif", fontSize: "100%", 
    //  marginTop: "0px" 
    }}>
      Eightfold recognised as a Strategic Leader by Europe's #1 HR industry analyst
    </h4>
    <div style={{ alignItems: "center", justifyContent: "center", fontWeight: "bold", 
    fontSize: "60%", backgroundColor: "#7E3A77", color: "white", borderRadius: "25px", 
    display: "flex", alignItems: "center", padding: "1%" }}>
  <i className="fas fa-folder" style={{ marginRight: "5px" }}></i>
  <p className="mt-0 ml-1 mr-1 mb-0" style={{ fontWeight: 400 }}>Blog</p>
</div>

<p style={{ fontWeight: 400, fontSize: "80%", maxWidth: "100%", 
     marginTop: "10px" }}>
      This achievement is a testament to Eightfold's unwavering dedication to delivering
      top-notch solutions in the Talent Acquisition space.
    </p>
    <p style={{ fontSize: "70%", fontWeight: "bold", color: "#008FBF", paddingTop: "15%" ,
 }}>Download report</p>
              </motion.Card>
            </Col>
            <Col xs={12} md={4} xl={4}  style={{ margin: "10px 0", display: "flex" }}>
              <motion.Card
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  margin: "0 1%",
                  paddingLeft: "5%",
                  paddingRight: "5%",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  height: "100%", // Set the height to 100% to match the height of other cards
                }}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={4}
              >
                        <h4 style={{ fontWeight: 900 , maxWidth: "100%", 
    fontFamily: "Museo Sans Rounded, sans-serif", fontSize: "100%", paddingBottom: "8%"
    //  marginTop: "0px" 
    }}>
      Why it's time for AI-powered talent intelligence in your HR tech stack
    </h4>
    <div style={{ alignItems: "center", justifyContent: "center", fontWeight: "bold", 
    fontSize: "60%", backgroundColor: "#7E3A77", color: "white", borderRadius: "25px", 
    display: "flex", alignItems: "center", padding: "1%" }}>
  <i className="fas fa-folder" style={{ marginRight: "5px" }}></i>
  <p className="mt-0 ml-1 mr-1 mb-0" style={{ fontWeight: 400 }}>Blog</p>
</div>

<p style={{ fontWeight: 400, fontSize: "80%", maxWidth: "100%", 
     marginTop: "10px" }}>      AI-powered talent intelligence is the key to building a stronger, adaptable, and more agile 
      workforce to face the many business challenges ahead.
    </p>
    <p style={{ fontSize: "70%", fontWeight: "bold", color: "#008FBF", paddingTop: "15%"
 }}>Read blog</p>
 
              </motion.Card>
            </Col>
          </Row>
        </Container>

        <p
          style={{
            fontSize: "1.0625rem", // Adjust font size
            fontWeight: 500,
            color: "#008FBF",
            paddingTop: "80px",
            textAlign: "center",
          }}
        >
          View all resources
        </p>
      </Container>
    </>
  );
}

export default Typography;
