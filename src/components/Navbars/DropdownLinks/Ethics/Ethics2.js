import React, { useState } from "react";

// reactstrap components
import { Container, Row, Col, Card } from "reactstrap";
import img1 from "../../../../assets/img/Victoria-Lipnic.webp";
import img2 from "../../../../assets/img/Craig-Leen.webp";
import img3 from "../../../../assets/img/Roy-Wang.webp";
import img4 from "../../../../assets/img/Ayisha-Piotti.webp";


import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";


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
  const [dropdownVisible, setDropdownVisible] = useState([false, false, false]);

  const toggleDropdown = (index) => {
    const updatedVisibility = [...dropdownVisible];
    updatedVisibility[index] = !updatedVisibility[index];
    setDropdownVisible(updatedVisibility);
  };

  return (
    <>
    <div className="mb-5 pb-5"
        style={{
          // background: "#000",
          // color: "#FFF",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "100%",
        }}
      >
{/* <DottedWaves /> */}

          <Container 
            style={{
              background: "#fff",
              maxWidth: "97%", // Adjust the width as needed
height: "auto",
              padding: "2%",
              borderRadius: "0.5%",
              justifyContent: "flex-end",
              textAlign: "center",
            marginTop: "-10%",
            }}
          >

          <Container className="content-center">
         <h4
  style={{
    color: "#484B58",
    fontWeight: "normal",
    fontFamily: "roboto, sans-serif",
    fontSize: "120%",
    letterSpacing: "0.005em",
    lineHeight: "2em",
              width: "95%",
              paddingLeft: "15%"
  }}
>
  The Eightfold AI Ethics Council believes that AI can be used for
            good, mitigating bias and promoting equality throughout the entire
            talent experience, from acquisition to management. These leaders
            provide recommendations to Eightfold on how to responsibly use AI
            throughout our entire Talent Intelligence Platform.
</h4>
</Container>
          </Container>
     
        
 <Container className="pt-5"
          style={{
            maxWidth: "100%",
            alignItems: "stretch",
          }}
        >
         <Container style={{ maxWidth: "95%", height: "100%", display: "flex" , alignItems: "center", justifyContent: "center"}}>
      <Row>
      <Col md={2} xl={2} xs={6} >
  {/* Dropdown items */}
  <img src={img1} alt="Logo" style={{ width: "100%" }} />

  
    </Col>

                  <Col md={10} xl={10} xs={12} style={{ justifyContent: "center",alignItems: "center", width: "90%" }}>

      <h2 style={{ fontSize: "130%", fontWeight: 500 }}>Victoria Ann Lipnic</h2>
      <h4 style={{ fontSize: "90%", color: "#484B58", marginTop: "-2%" }}>Former EEOC Commissioner</h4>
      <h4 style={{fontSize: "87%", color: "#484B58",  lineHeight: "1.5em", }}>An American lawyer and public figure. She served in multiple senior United States
      government positions. She was Commissioner of the U.S. Equal Employment Opportunity 
      Commission (EEOC), nominated to two terms by President Barack Obama, 2010 – 2020.
      </h4>
      <Container className="dropdown" style={{marginLeft: "-3.5%"}}>
              {dropdownVisible[0] && (
                <Container className="dropdown-content">
              <h4 style={{
              fontSize: "87%", color: "#484B58", marginTop: "0%",
                  lineHeight: "1.5em", // Adjust the line height as needed
                }}>
                    She served as Chair (Acting) of the EEOC under President Donald J. Trump 
                  from 2017 – 2019. Before her appointment to the EEOC, she was Assistant 
                  Secretary of Labor under President George W. Bush. The United States 
                  Senate confirmed her unanimously to each of these positions.
                  </h4>
                </Container>
              )}

              <p
                style={{marginLeft: "2%",
                  fontSize: "17px",
                  color: "#008FBF",
                  fontWeight: "normal",
                  cursor: "pointer",
                }}
                onClick={() => toggleDropdown(0)}
              >Expand{" "}
                <FontAwesomeIcon
                  icon={faAngleDown}
                  style={{
                    fontSize: "20px",
                    transform: dropdownVisible[0] ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </p>
            </Container> 

  
</Col>





      </Row>
</Container>
         

        </Container>

        <Container className="mt-5"
          style={{
            maxWidth: "100%"
          }}
        >
           <Container style={{ maxWidth: "95%", height: "100%", display: "flex" , alignItems: "center", justifyContent: "center"}}>
      <Row>
      <Col md={2} xl={2} xs={6} >
  {/* Dropdown items */}
  <img src={img2} alt="Logo" style={{ width: "100%" }} />

  
    </Col>

                  <Col md={10} xl={10} xs={12} style={{ width: "90%" }}>

      <h2 style={{fontSize: "130%", fontWeight: 500}}>Craig E. Leen</h2>
      <h4 style={{fontSize: "90%", color: "#484B58", marginTop: "-2%"}}>Former OFCCP Director</h4>
      <h4 style={{fontSize: "87%", color: "#484B58",  lineHeight: "1.5em",  }}>
        Craig Leen is an attorney, adjunct  professor, and former senior executive, who has 
        served as a public official at the 
      federal and local levels, and also worked in the private sector. Craig was formerly 
      Director of the Office of Federal Contract Compliance Programs at the U.S. Department 
      of Labor, where he helped enforce federal civil rights requirements, including their 
      impact on artificial intelligence in employment.
      </h4>
      <Container className="dropdown" style={{marginLeft: "-3.5%"}}>
              {dropdownVisible[1] && (
                <Container className="dropdown-content">
              <h4 style={{fontSize: "87%", color: "#484B58", marginTop: "0%",
                              lineHeight: "1.5em", // Adjust the line height as needed
                            }}>
              Prior to serving at OFCCP, Craig also was formerly City Attorney of Coral Gables, Florida, where he served as the chief ethics officer among other responsibilities.

                  </h4>
                  <h4 style={{fontSize: "87%", color: "#484B58", marginTop: "0%",
                                  lineHeight: "1.5em", // Adjust the line height as needed
                                }}>

In addition to serving on Eightfold’s Advisory Board (including on this AI Ethics Council), Craig is a partner at K&L Gates in the Labor, Employment, and Workplace Safety practice group, where he co-leads the OFCCP & Affirmative Action Compliance area of focus. Craig also serves as a Professorial Lecturer in Law at The George Washington University Law School, Vice Chair of the DC Advisory Committee to the U.S. Commission on Civil Rights, Chair of the Civil and Human Rights Committee of the Bar Association of the District of Columbia, and as a member of various other boards and committees.
                  </h4>
                </Container>
              )}

              <p
                style={{marginLeft: "2%",
                  fontSize: "17px",
                  color: "#008FBF",
                  fontWeight: "normal",
                  cursor: "pointer",
                }}
                onClick={() => toggleDropdown(1)}
              >
                Expand{" "}
                <FontAwesomeIcon
                  icon={faAngleDown}
                  style={{
                    fontSize: "20px",
                    transform: dropdownVisible[1] ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </p>
            </Container> 

  
</Col>





      </Row>
</Container>
       

        </Container>

        <Container className="mt-5"
          style={{
            maxWidth: "100%",
            // display: "flex",
            // flexDirection: "row",
            // marginTop: "40px",
            // justifyContent: "center",
            // alignItems: "stretch",
            // paddingBottom: "7%"
          }}
        >
         <Container style={{ maxWidth: "95%", height: "100%", display: "flex" , alignItems: "center", justifyContent: "center"}}>
      <Row>
      <Col md={2} xl={2} xs={6} >
  {/* Dropdown items */}
  <img src={img3} alt="Logo" style={{  width: "100%" }} />

  
    </Col>

                  <Col md={10} xl={10} xs={12} style={{ width: "90%" }}>

      <h2 style={{fontSize: "130%", fontWeight: 500}}>Roy Wang</h2>
      <h4 style={{fontSize: "90%", color: "#484B58", marginTop: "-2%"}}>General Counsel</h4>
      <h4 style={{fontSize: "87%", color: "#484B58",  lineHeight: "1.5em",  }}>
      Roy is a seasoned business lawyer as well as an AI expert. He has spent his entire legal career advising technology companies on wide-ranging legal issues, from navigating complex commercial transactions and litigation issues to expanding enterprise value through numerous mergers and acquisitions.
      </h4>
      <Container className="dropdown" style={{marginLeft: "-3.5%"}}>
              {dropdownVisible[2] && (
                <div className="dropdown-content">
              <h4 style={{fontSize: "87%", color: "#484B58", marginTop: "0%",
                              lineHeight: "1.5em", // Adjust the line height as needed
                            }}>Before joining Eightfold, Roy was Associate General Counsel at Marvell Technology Group Ltd. Before that; he was a partner of Kirkland & Ellis LLP. He received his J.D. from U.C. Berkeley, and his Ph.D. in machine learning from UIUC.
      </h4>
                </div>
              )}

              <p
                style={{marginLeft: "2%",
                  fontSize: "17px",
                  color: "#008FBF",
                  fontWeight: "normal",
                  cursor: "pointer",
                }}
                onClick={() => toggleDropdown(2)}
              >
                Expand{" "}
                <FontAwesomeIcon
                  icon={faAngleDown}
                  style={{
                    fontSize: "20px",
                    transform: dropdownVisible[2] ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </p>
            </Container> 

  
</Col>





      </Row>
</Container>
       

        </Container>

        <Container className="mt-5"
          style={{
            maxWidth: "100%",
            // display: "flex",
            // flexDirection: "row",
            // marginTop: "40px",
            // justifyContent: "center",
            // alignItems: "stretch",
            // paddingBottom: "7%"
          }}
        >
         <Container style={{ maxWidth: "95%", height: "100%", display: "flex" , alignItems: "center", justifyContent: "center"}}>
      <Row>
      <Col md={2} xl={2} xs={6} >
  {/* Dropdown items */}
  <img src={img4} alt="Logo" style={{ width: "100%" }} />

  
    </Col>

                  <Col md={10} xl={10} xs={12} style={{ width: "90%" }}>
      <h2 style={{fontSize: "130%", fontWeight: 500}}>Ayisha Piotti</h2>
      <h4 style={{fontSize: "90%", color: "#484B58", marginTop: "-2%"}}>Managing Partner at RegHorizon,
<br />
Director of AI Policy at ETH Zurich</h4>
      <h4 style={{fontSize: "87%", color: "#484B58",  lineHeight: "1.5em", }}>Ayisha is the Managing Partner at the Swiss-based firm RegHorizon and the Director of AI Policy at the Center for Law and Economics of the Swiss Federal Institute of Technology (ETH Zurich).
      </h4>
      <Container className="dropdown" style={{marginLeft: "-3.5%"}}>
              {dropdownVisible[3] && (
                <div className="dropdown-content">
              <h4 style={{fontSize: "87%", color: "#484B58", marginTop: "0%",
                              lineHeight: "1.5em", // Adjust the line height as needed
                            }}>
              Ayisha is a strategic alliance builder with a strong business background and extensive experience in Government Affairs, tackling complex regulatory & fiscal challenges through working with politicians, diplomatic missions, international organizations, government ministries, and consumer and business associations.
                  </h4>
                </div>
              )}

              <p
                style={{marginLeft: "2%",
                  fontSize: "17px",
                  color: "#008FBF",
                  fontWeight: "normal",
                  cursor: "pointer",
                }}
                onClick={() => toggleDropdown(3)}
              >
                Expand{" "}
                <FontAwesomeIcon
                  icon={faAngleDown}
                  style={{
                    fontSize: "20px",
                    transform: dropdownVisible[3] ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </p>
            </Container> 

  
</Col>





      </Row>
</Container>
       

        </Container>


       

        
      </div>
    </>
  );
}

export default Typography;

