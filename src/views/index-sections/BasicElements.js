// import React from "react";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";
// plugin that creates slider
import Slider from "nouislider";
import React, { useEffect, useRef } from "react";
import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";

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

// core components

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
      <div className="section section-basic" id="basic-elements">
        <Container>
          <div className="content-center">
            <div className="gradient-background">
              <Container>
                <Row>
                  <Col md="2">
                    <Card className="bg-primary">
                      <CardBody>
                        {/* Add content for the card */}
                       
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="10">
                    <div className="brand" style={{ paddingTop: "160px" }}>
                      <h1
                        style={{
                          fontWeight: 500,
                          fontSize: "40px",
                          background:
                            "-webkit-linear-gradient(45deg, #008BE8, #5B4B6E 85%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        We are transforming the world of work by pairing people with possibilities. From talent acquisition to talent management and talent insights, this is the single AI platform that does it all.
                      </h1>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default BasicElements;
