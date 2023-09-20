import React, { useState, useRef, useEffect } from "react";
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import lead1 from "../../../../assets/img/lead1.webp";
import lead2 from "../../../../assets/img/lead2.jpg";
import lead3 from "../../../../assets/img/lead3.webp";
import lead4 from "../../../../assets/img/lead4.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { zoomIn } from "react-animations";
import { keyframes } from "styled-components";
import styled from "styled-components";

const ZoomIn = styled.div`animation: 1s ${keyframes`${zoomIn}`}`;

function Company3() {
  const [pills, setPills] = useState("2");
  const [dropdownVisible, setDropdownVisible] = useState([false, false, false]);
const [animationCompleted, setAnimationCompleted] = useState([false, false, false]);

  // Create a separate ref for each image
  const imageRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  useEffect(() => {
    const observers = imageRefs.map((imageRef, index) => {
      return new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting && !animationCompleted[index]) {
            // Trigger animation when the image is in the viewport
            setAnimationCompleted((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.5, // Adjust the threshold as needed
        }
      );
    });

    // Observe each image with its corresponding observer
    imageRefs.forEach((imageRef, index) => {
      if (imageRef.current) {
        observers[index].observe(imageRef.current);
      }
    });

    // Cleanup the observers when the component unmounts
    return () => {
      observers.forEach((observer) => {
        observer.disconnect();
      });
    };
  }, [animationCompleted]);

  return (
    <>
      <div className="mt-5 mb-5" style={{ maxWidth: "100vw" }}>
        <Container className="mt-5 mb-5" style={{ maxWidth:"90vw",paddingTop: "2vh"}}>
          <Row>
            <Col  md="6" xs="12" style={{ marginTop: "5%" }}>
              <Container className="mt-5 ml-1">
                <Row>
                  <Col style={{textAlign: "left", alignItems: "flex-start"}}>
                    <h3 style={{ fontSize: "160%", fontWeight: "bolder", fontFamily: "Museo Sans Rounded, sans-serif" }}>
                    AI thought leaders​
                    </h3>
                    <p style={{ color: "#484b58", fontSize: "95%", maxWidth: "90vw", fontWeight: 500, fontFamily: "Roboto, sans-serif" }}>
                    Our AI thought leaders drive innovation and are shaping the future of <span style={{color: "#008FBF"}}>talent acquisition</span> and management. 
                    They are experts in AI, machine learning, data science, and business dedicated to creating exceptional 
                    workforces through cutting-edge solutions.
                    </p>
                    <a href="" style={{color: "#008FBF"}}>Meet with team
                    <FontAwesomeIcon
                          icon={faAngleDown}
                          style={{ color: "#000",fontSize: "80%", marginLeft: "1%"}}
                        />
                    </a>

                  </Col>
                </Row>
              </Container>
            </Col>
            <Col md="6" xs="12" style={{ marginRight: "-20%", display: "flex", justifyContent: "flex-end", alignItems: "flex-end" }}>
              <div style={{ position: "relative" }}>
<div ref={imageRefs[0]}> {/* Use imageRefs[0] */}
                  {animationCompleted[0] && ( // Conditionally apply the animation
                    <ZoomIn>               
                <img
                  src={lead1}
                  alt="Eightfold.ai Logo"
                  className="navbar-logo"
                  style={{ width: "90%", height: "auto", marginTop: "20%", borderRadius: "15px" }}
                />
</ZoomIn>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="mt-5 mb-5 ml-1" style={{ paddingTop: "5vh", maxWidth: "90vw" }}>
          <Row>
            <Col md="6" xs="12" style={{ display: "flex", justifyContent: "left", alignItems: "flex-start" }}>
              <div style={{ position: "relative" }}>
<div ref={imageRefs[1]}> {/* Use imageRefs[0] */}
                  {animationCompleted[1] && ( // Conditionally apply the animation
                    <ZoomIn>          
                <img
                  src={lead2}
                  alt="Eightfold.ai Logo"
                  className="navbar-logo"
                  style={{ width: "90%", height: "auto", marginTop: "20%", borderRadius: "15px" }}
                />
</ZoomIn>
                  )}
                </div>
              </div>
            </Col>
            <Col md="6" xs="12" style={{ maxWidth:"90vw", marginTop: "5%", justifyContent: "left", alignItems: "flex-start" }}>
              <Container className="mt-5">
                <Row>
                  <Col>
                    <h3 style={{ fontSize: "160%", fontWeight: 600, fontFamily: "Museo Sans Rounded, sans-serif" }}>
                    Economists
                    </h3>
                    <p style={{ color: "#484b58", fontSize: "95%", fontWeight: 500, fontFamily: "Roboto, sans-serif" }}>
                    Our economists use data to promote a skills-based approach that encourages diversity and more inclusive 
                    workforces. Their expertise in economics, statistics, and data science helps our customers build exceptional
                     teams and drive business success.
                    </p>
                    <a href="" style={{color: "#008FBF"}}>Meet the team
                    <FontAwesomeIcon
                          icon={faAngleDown}
                          style={{ color: "#000",fontSize: "80%", marginLeft: "1%"}}
                        />
                    </a>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
        <Container className="mt-5 mb-5" style={{ paddingTop: "5vh", maxWidth: "90vw" }}>
          <Row>
            <Col md="6" xs="12" style={{ marginTop: "5%" }}>
              <Container className="mt-5 ml-1">
                <Row>
                  <Col>
                    <h3 style={{ fontSize: "160%", fontWeight: 600, fontFamily: "Museo Sans Rounded, sans-serif" }}>
                    HR and people experts
                    </h3>
                    <p style={{ color: "#484b58", fontSize: "95%", fontWeight: 500, fontFamily: "Roboto, sans-serif" }}>
                    Our HR and people experts are dedicated to transforming <span style={{color: "#008FBF"}}>talent management</span> through innovative AI-powered 
                    solutions and change management practices that transform workforces into productive powerhouses.
                    </p>
                    <a href="" style={{color: "#008FBF"}}>Meet the team
                    <FontAwesomeIcon
                          icon={faAngleDown}
                          style={{ color: "#000",fontSize: "80%", marginLeft: "1%"}}
                        />
                    </a>

                  </Col>
                </Row>
              </Container>
            </Col>
            <Col md="6" xs="12" style={{ marginRight: "-20%", display: "flex", justifyContent: "flex-end", alignItems: "flex-end" }}>
              <div style={{ position: "relative" }}>
<div ref={imageRefs[2]}> {/* Use imageRefs[0] */}
                  {animationCompleted[2] && ( // Conditionally apply the animation
                    <ZoomIn>           
                <img
                  src={lead3}
                  alt="Eightfold.ai Logo"
                  className="navbar-logo"
                  style={{ width: "90%", height: "auto", marginTop: "20%", borderRadius: "15px" }}
                />
</ZoomIn>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="mt-5 mb-5 ml-1" style={{ paddingTop: "5vh", maxWidth: "90vw" }}>
          <Row>
            <Col md="6" xs="12" style={{ display: "flex", justifyContent: "left", alignItems: "flex-start" }}>
              <div style={{ position: "relative" }}>
<div ref={imageRefs[3]}> {/* Use imageRefs[0] */}
                  {animationCompleted[3] && ( // Conditionally apply the animation
                    <ZoomIn>               
                <img
                  src={lead4}
                  alt="Eightfold.ai Logo"
                  className="navbar-logo"
                  style={{ width: "90%", height: "auto", marginTop: "20%", borderRadius: "15px" }}
                />
</ZoomIn>
                  )}
                </div>
              </div>
            </Col>
            <Col md="6" xs="12" style={{ marginTop: "5%", justifyContent: "left", alignItems: "flex-end" }}>
              <Container className="mt-5">
                <Row>
                  <Col>
                    <h3 style={{ fontSize: "160%", fontWeight: 900, fontFamily: "Museo Sans Rounded, sans-serif" }}>
                    Advisory board
                    </h3>
                    <p style={{ color: "#484b58", fontSize: "90%",  fontWeight: 500, fontFamily: "Roboto, sans-serif" }}>
                    These thought leaders share business expertise and feedback from a variety of backgrounds and experiences to 
                    help shape our mission, strategy, products, and services so that we can best serve our customers in every 
                    way.
                    </p>
                    <a href="" style={{color: "#008FBF"}}>Meet the team  
                    <FontAwesomeIcon
                          icon={faAngleDown}
                          style={{ color: "#000",fontSize: "80%", marginLeft: "1%"}}
                        />
                        </a>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Company3;
