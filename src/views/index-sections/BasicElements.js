// import React from "react";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";
// plugin that creates slider
import Slider from "nouislider";
import React, { useEffect, useRef } from "react";
import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";
import {motion} from "framer-motion";


// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Card,
  CardBody
} from "reactstrap";

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

function BasicElements() {
  const sliderRegularRef = useRef(null);
  const sliderDoubleRef = useRef(null);

  useEffect(() => {
    if (sliderRegularRef.current && sliderRegularRef.current.noUiSlider === undefined) {
      noUiSlider.create(sliderRegularRef.current, {
        start: [50],
        connect: [true, false],
        step: 0.5,
        range: { min: 0, max: 100 },
      });
    }

    if (sliderDoubleRef.current && sliderDoubleRef.current.noUiSlider === undefined) {
      noUiSlider.create(sliderDoubleRef.current, {
        start: [20, 80],
        connect: [false, true, false],
        step: 1,
        range: { min: 0, max: 100 },
      });
    }
  }, []);

 return (
  <>
    <div className="section section-basic" id="basic-elements" style={{fontFamily: "Museo Sans Rounded, sans-serif"}}>
      <Container>
        <Row>
        <Col className="justify-content-start" md="3" style={{ paddingTop: "100px", marginLeft: "-120px" }}>
  <Card style={{ 
    background: "linear-gradient(45deg, rgba(0, 139, 232, 0.2) 50%, rgba(147, 112, 219, 0.5)) 50%", 
    width: "200px", 
    height: "250px",
    borderRadius: "0px 50px 50px 0px",
    filter: "blur(60px)"
  }}>
    <CardBody>
    </CardBody>
  </Card>
</Col>




          <Col md="10">
            <div className="content-center gradient-background">
              <Container>
                <Row>
                  <Col md="12">
                    <div className="brand" style={{ paddingTop: "160px", marginLeft: "-100px",textAlign: "center", width: "1000px" }}>
                      <motion.h1
                        style={{
                          fontWeight: 500,
                          fontSize: "40px",
                          background:
                            "-webkit-linear-gradient(45deg, #008BE8, #5B4B6E 85%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                        variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{once: true,}}
          custom={1}
                      >
                        We are transforming the world of work by pairing people with possibilities. From talent acquisition to <a href="/link-to-text-management" 
                        style={{background: "-webkit-linear-gradient(45deg, #008BE8, #5B4B6E 85%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent"}}>text management</a> and talent insights, this is the single AI platform that does it all.
                      </motion.h1>
        
                    </div>
                  </Col>
  
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);
}

export default BasicElements;