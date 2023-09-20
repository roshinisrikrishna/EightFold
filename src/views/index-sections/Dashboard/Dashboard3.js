import React, {useState, useEffect} from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";
import Widget from "react-widgets/cjs/Widget";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


import logo from "../../../assets/img/ryan.jpg";


// core components

function Tabs() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  const [selectedTab, setSelectedTab] = useState("1"); // Add this state variable


  const handleTabChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedTab(selectedValue);
  };

  // Add this function to handle dropdown selection change
  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    setPills(selectedValue);
  };

  useEffect(() => {
    // Add a window resize event listener to update the screen width state
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="mt-4" style={{maxWidth: "100vw"}}>
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="12" style={{maxWidth:"100vw"}}>
            <div className="brand" >
                      <h1
                        style={{
                          textAlign: "center",
                          fontWeight: 600,
                          fontSize: "230%",
                          fontFamily: "Museo Sans Rounded, sans-serif",
                          // fontStyle: "museo-sans-rounded, sans-serif"
                        }}
                      >
                       The Talent Intelligence Platform
                      </h1>
                    </div>
                    <p className="ml-auto mr-auto" 
                    style={{color: "rgb(72, 75, 88, 0.8)",fontWeight: 400,
                    fontSize: "90%", textAlign: "center", width: "92%"}}>
                      Powered by deep-learning AI, our unrivaled Talent Intelligence Platform shows you what you need, when you need it. Whether you’re finding or developing talent, our skills-driven approach backed by our unparalleled talent insights enables the outcomes you need to stay ahead.</p>
 
                      {screenWidth < 1000 ? (

<select
style={{
  fontSize: "90%",
  color: "#484B58",
  borderRadius: "10px",
  padding: "8px",
  border: "1px solid #ccc",
  backgroundColor: "#fff",
  fontSize: "16px",
  width: "100%",
}}
value={pills} // Set the selected value
onChange={handleDropdownChange} // Handle dropdown selection change
>
<option value="1">Talent Acquisition</option>
<option value="2">Talent Management</option>
<option value="3">Talent Flex</option>
<option value="4">Workforce Exchange</option>
</select>
                      ) : (
                        <Widget>

                  <Nav
                    className="justify-content-center"
                    role="tablist"
                    tabs
                    style={{maxWidth: "100vw"}}
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        Talent Acquisition
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        Talent Management
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("3");
                        }}
                      >
                        Talent Flex
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "4" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("4");
                        }}
                      >
                        Workforce Exchange
                      </NavLink>
                    </NavItem>
                  </Nav>
                  </Widget>

                )}

                <Container className="mt-0" style={{maxWidth:"100%", fontFamily: "Museo Sans Rounded, sans-serif"}}>
                  <TabContent
                    className="text-center"
                    activeTab={"pills" + pills}
                  >
                    <TabPane tabId="pills1" style={{fontSize:"16px", textAlign:"left"}}>
                            <Row>
                            <Col className="mt-5" xs="12" md="5" lg="5" xl="5" style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start" }}>
                                <iframe
                                className="mt-5"
                                  width="85%"
                                  height="55%"
                                  src="https://www.youtube.com/embed/DwajEW_8k4s?controls=0&rel=0"
                                  title="YouTube Video"
                                  frameBorder="0"
                                  allowFullScreen
                                  style={{ borderRadius: "15px" }}
                                ></iframe>
                              </Col>


                              <Col xs="12" md="7" lg="7" xl="7" style={{minWidth:"30vw"}}>
  <h4 style={{ fontWeight: "600", fontSize: "140%", textAlign: "center"}}>Go beyond reviewing résumés</h4>
  <p style={{ fontSize: "90%", width: "100%", fontWeight: 500, color: "RGB(72, 75, 88)" }}>
    Our intuitive and agile deep-learning AI makes it easier to find candidates and work with your talent management team to overcome informational silos.
  </p>
  <Row style={{maxWidth: "100vw"}}>
  <Col md="4" className="icon-column">
<Row>
  <Col xs="2" md="12">
     <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
     </Col>
     <Col  xs="10" md="12">
    <p style={{ fontSize: "14.5px", fontWeight: 400, color: "RGB(72, 75, 88)" }}> 
Find great new talent, anytime</p>
</Col>
</Row>
  </Col>
  <Col md="4" className="icon-column">
  <Row>

  <Col xs="2" md="12">

     <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
     </Col>
     <Col  xs="10" md="12">
    <p style={{ fontSize: "14.2px", fontWeight: 400, color: "RGB(72, 75, 88)" }}> 
    Surface the skills you need, build your workforce</p>
  </Col>
  </Row>
  </Col>
  <Col md="4" className="icon-column">
  <Row>

<Col xs="2" md="12">
     <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
     </Col>
     <Col  xs="10" md="12">
 <p style={{ fontSize: "14.2px", fontWeight: 400, color: "RGB(72, 75, 88)" }}> 
 Discover greatness — see what candidates can do</p>
 </Col>
 </Row>
  
  </Col>
</Row>
<div style={{ width: "100%",backgroundColor: "#f5f5f5", borderRadius: "15px", padding: "10px", marginTop: "20px" }}>
  <div style={{ display: "flex", alignItems: "center" }}>
    <div style={{ border: "2px solid #007bff", borderRadius: "50%", padding: "5px", marginRight: "10px" }}>
      <img src={logo} alt="Logo" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
    </div>
    <div style={{ borderRadius: "10px", padding: "10px", flex: 1, fontStyle: "italic" }}>
      <p style={{ fontSize: "14.2px", fontWeight: 600, color: "RGB(72, 75, 88)" }}>
        <span style={{
          background: "-webkit-linear-gradient(45deg, #008BE8, #3F036E 85%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          “We wanted something that created a rich, digital experience and allows people to feel like we are a leading technology company. Eightfold is helping us do this.”
        </span>
        <span style={{ color: "RGB(72, 75, 88)" }}>
          — Marc Starfield, Group Head of HR Programmes and Systems, Vodafone
        </span>
      </p>
    </div>
  </div>
</div>
<Container className="brand-button" >
<button style={{
        backgroundColor: "#2f77ba",
        borderRadius: "60px",
        color: "#fff",
        padding: "2% 1%",
        border: "none",
        cursor: "pointer",
        marginTop: "10px",
        fontWeight: "bold",
        fontSize: "90%",
        width: "220px", 
        fontFamily: "Museo Sans Rounded, sans-serif",
      }}>
        Explore Talent Acquisition
      </button>
      </Container>

</Col>


                            </Row>
                          </TabPane>
                          <TabPane tabId="pills2" style={{fontSize:"16px", textAlign:"left"}}>
                            <Row>
                            <Col className="mt-5" xs="12" md="5" lg="5" xl="5" style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start" }}>
                            <iframe
                                className="mt-5"
                                  width="85%"
                                  height="55%"
                                  src="https://www.youtube.com/embed/DwajEW_8k4s?controls=0&rel=0"
                                  title="YouTube Video"
                                  frameBorder="0"
                                  allowFullScreen
                                  style={{ borderRadius: "15px" }}
                                ></iframe>
                              </Col>


                              <Col xs="12" md="7" lg="7" xl="7" style={{minWidth:"30vw",}}>
                              <h4 style={{ fontWeight: "600", fontSize: "140%",textAlign: "center"}}>
                                Retain, engage, and champion your workforce</h4>
     <p style={{ fontSize: "90%", width: "100%", fontWeight: 500, color: "RGB(72, 75, 88)" }}>
     Use data-driven insights to develop meaningful and rewarding career paths
  </p>
  <Row style={{maxWidth: "100vw"}}>
  <Col md="4" className="icon-column">
<Row>
  <Col xs="2" md="12">
     <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
     </Col>
     <Col  xs="10" md="12">
    <p style={{ fontSize: "14.5px", fontWeight: 400, color: "RGB(72, 75, 88)" }}> 
      Match employees with the right internal jobs</p>
      </Col>
</Row>
  </Col>
  <Col md="4" className="icon-column">
  <Row>

  <Col xs="2" md="12">

     <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
     </Col>
     <Col  xs="10" md="12">
    <p style={{ fontSize: "14.2px", fontWeight: 400, color: "RGB(72, 75, 88)" }}> 
      Offer learning and development opportunities to advance your people's skills — and set them up for success</p>
      </Col>
  </Row>
  </Col>
  <Col md="4" className="icon-column">
  <Row>

<Col xs="2" md="12">
     <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
     </Col>
     <Col  xs="10" md="12">
 <p style={{ fontSize: "14.2px", fontWeight: 400, color: "RGB(72, 75, 88)" }}> 
  Connect people with the right upskilling and reskilling options, at the right time</p>
  </Col>
 </Row>
  
  </Col>
</Row>
<div className="brand-div" style={{ maxWidth: "100vw",backgroundColor: "#f5f5f5", borderRadius: "15px", padding: "10px", marginTop: "20px" }}>
  <div style={{ display: "flex", alignItems: "center" }}>
    <div style={{ border: "2px solid #007bff", borderRadius: "50%", padding: "5px", marginRight: "10px" }}>
      <img src={logo} alt="Logo" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
    </div>
    <div style={{ borderRadius: "10px", padding: "10px", flex: 1, fontStyle: "italic" }}>
      <p style={{ fontSize: "14.2px", fontWeight: 600, color: "RGB(72, 75, 88)" }}>
        <span style={{
          background: "-webkit-linear-gradient(45deg, #008BE8, #3F036E 85%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          “Eightfold has helped us uncover our 300,000 person talent database, making it easier for us to source and ultimately serve them with opportunities that they would engage in. It has become our talent relationship management platform of choice.”
        </span>
        <span style={{ color: "RGB(72, 75, 88)" }}>
        — Grace Cecilio, Manager of Sourcing, Talent Acquisition, Dexcom
        </span>
      </p>
    </div>
  </div>
</div>
<Container className="brand-button" >

<button style={{
        backgroundColor: "#2f77ba",
        borderRadius: "60px",
        color: "#fff",
        padding: "2% 1%",
        border: "none",
        cursor: "pointer",
        marginTop: "10px",
        fontWeight: "bold",
        fontSize: "90%",
        width: "220px", 
        fontFamily: "Museo Sans Rounded, sans-serif",
      }}>
        Explore Talent Acquisition
      </button>

</Container>
</Col>


                            </Row>
                          </TabPane>
                          <TabPane tabId="pills3" style={{fontSize:"16px", textAlign:"left"}}>
                            <Row>
                            <Col className="mt-5" md="5" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <iframe
                                className="mt-5"
                                  width="85%"
                                  height="235"
                                  src="https://www.youtube.com/embed/DwajEW_8k4s?controls=0&rel=0"
                                  title="YouTube Video"
                                  frameBorder="0"
                                  allowFullScreen
                                  style={{ borderRadius: "15px" }}
                                ></iframe>
                              </Col>


                              <Col md="7">
  <h4 style={{ fontWeight: 500 }}>Find better contingent talent, faster</h4>
  <p style={{ fontSize: "14.5px", width: "600px", fontWeight: 400, color: "RGB(72, 75, 88)" }}>
  Build a stronger network of contingent workers with the skills you need
  </p>
  <Row>
  <Col md="4" className="icon-column">
  <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
    <p style={{ fontSize: "14.5px", fontWeight: 400, color: "RGB(72, 75, 88)" }}>Get the flexibility you need to support your organization, no matter what comes your way</p>
  </Col>
  <Col md="4" className="icon-column">
  <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
    <p style={{ fontSize: "14.5px", fontWeight: 400, color: "RGB(72, 75, 88)" }}>Access a strong talent pool that's always ready to deliver</p>
  </Col>
  <Col md="4" className="icon-column">
    
  <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
 <p style={{ fontSize: "14.5px", fontWeight: 400, color: "RGB(72, 75, 88)" }}>Directly engage — and rehire — contingent workers who know your organization</p>
  </Col>
</Row>
<div style={{ width: "600px",backgroundColor: "#f5f5f5", borderRadius: "15px", padding: "10px", marginTop: "20px" }}>
  <div style={{ display: "flex", alignItems: "center" }}>
    <div style={{ border: "2px solid #007bff", borderRadius: "50%", padding: "5px", marginRight: "10px" }}>
      <img src={logo} alt="Logo" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
    </div>
    <div style={{ borderRadius: "10px", padding: "10px", flex: 1, fontStyle: "italic" }}>
      <p style={{ fontSize: "14.2px", fontWeight: 500, color: "RGB(72, 75, 88)" }}>
        <span style={{
          background: "-webkit-linear-gradient(45deg, #008BE8, #3F036E 85%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          “Gone are the days of working for a company for 30 years and staffing up a bunch of folks. Instead, we use AI, automation, and candidate-relationship management to build talent pools that we can releverage. It’s a fundamental shift from the traditional.”
        </span>
        <span style={{ color: "RGB(72, 75, 88)" }}>
        — Alan Kumar, Elastic Talent Program Manager, Dolby
        </span>
      </p>
    </div>
  </div>
</div>




</Col>


                            </Row>
                          </TabPane>
                          <TabPane tabId="pills4" style={{fontSize:"16px", textAlign:"left"}}>
                            <Row>
                            <Col className="mt-5" md="5" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <iframe
                                className="mt-5"
                                  width="85%"
                                  height="235"
                                  src="https://www.youtube.com/embed/DwajEW_8k4s?controls=0&rel=0"
                                  title="YouTube Video"
                                  frameBorder="0"
                                  allowFullScreen
                                  style={{ borderRadius: "15px" }}
                                ></iframe>
                              </Col>


                              <Col md="7">
  <h4 style={{ fontWeight: 500 }}>Engage people with rewarding work and opportunities</h4>
  <p style={{ fontSize: "14.5px", width: "600px", fontWeight: 400, color: "RGB(72, 75, 88)" }}>
  Connect job seekers, career supporters, and employers through public and private sector sponsored workforce exchanges.
  </p>
  <Row>
  <Col md="4" className="icon-column">
  <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
    <p style={{ fontSize: "14.5px", fontWeight: 400, color: "RGB(72, 75, 88)" }}>Deliver the best job and training recommendations to candidates</p>
  </Col>
  <Col md="4" className="icon-column">
  <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
    <p style={{ fontSize: "14.5px", fontWeight: 400, color: "RGB(72, 75, 88)" }}>See the potential of job seekers to succeed in roles</p>
  </Col>
  <Col md="4" className="icon-column">
    
  <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
 <p style={{ fontSize: "14.5px", fontWeight: 400, color: "RGB(72, 75, 88)" }}>Enable faster employment while supporting economic growth and diversity</p>
  </Col>
</Row>
<div style={{ width: "600px",backgroundColor: "#f5f5f5", borderRadius: "15px", padding: "10px", marginTop: "20px" }}>
  <div style={{ display: "flex", alignItems: "center" }}>
    <div style={{ border: "2px solid #007bff", borderRadius: "50%", padding: "5px", marginRight: "10px" }}>
      <img src={logo} alt="Logo" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
    </div>
    <div style={{ borderRadius: "10px", padding: "10px", flex: 1, fontStyle: "italic" }}>
      <p style={{ fontSize: "14.2px", fontWeight: 500, color: "RGB(72, 75, 88)" }}>
        <span style={{
          background: "-webkit-linear-gradient(45deg, #008BE8, #3F036E 85%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          “New York has made remarkable progress in reducing unemployment, creating quality, high-paying jobs, and connecting job seekers all over the state to fulfilling work opportunities. With this expansion of the Virtual Career Center, we are leveraging the very best technology to give New Yorkers a world-class job-finding tool completely free-of-charge.”
        </span>
        <span style={{ color: "RGB(72, 75, 88)" }}>
        -— Governor Kathy Hochul, Governor of New York State
        </span>
      </p>
    </div>
  </div>
</div>




</Col>


                            </Row>
                          </TabPane>
                  </TabContent>
                </Container>
              
            </Col>
          </Row>
        </Container>
      </div>
      <style>
        {`
        /* Media query for screens less than 768px wide */
        @media (max-width: 700px) {
          
          .brand-button {
            justify-content: center;
             align-items: center;
              text-align: center;
          }
        }

        /* For small screens (e.g., mobile phones) */
        @media (max-width: 576px) {
          /* Add your responsive styles here */
          .mt-4 {
            margin-top: 1rem;
          }
          /* Adjust other styles as needed */
        }
        
        /* For medium screens (e.g., tablets) */
        @media (min-width: 576px) and (max-width: 992px) {
          /* Add your responsive styles here */
          .mt-4 {
            margin-top: 2rem;
          }
          /* Adjust other styles as needed */
        }
        
        /* For large screens (e.g., desktops) */
        @media (min-width: 992px) {
          /* Add your responsive styles here */
          .mt-4 {
            margin-top: 4rem;
          }
          /* Adjust other styles as needed */
        }
        `}
      </style>
    </>
  );
}

export default Tabs;
