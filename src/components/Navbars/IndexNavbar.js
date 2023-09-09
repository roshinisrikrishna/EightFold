import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Dropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Row,
  Col,
  Container,
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/img/logoeightfold-fotor-bg-remover-20230823133343.png";
import SearchModal from "./SearchModal";
import cmpImg from "../../assets/img/demo_tip_mega_menu.webp";
import learnImg from "../../assets/img/learn.webp";
import cmpnyImg from "../../assets/img/forbes.webp";
import evtImg from "../../assets/img/events.webp";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


function IndexNavbar() {
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);


  const [dropdowns, setDropdowns] = useState([
    { id: "products", isOpen: false },
    { id: "solutions", isOpen: false },
    { id: "learn", isOpen: false },
    { id: "customers", isOpen: false },
    { id: "events", isOpen: false },
    { id: "company", isOpen: false },


  ]);

  const [open, setOpen] = useState(false);

  const menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  },[]);
  const toggleDropdown = (dropdownId) => {
    setDropdowns((prevDropdowns) =>
      prevDropdowns.map((dropdown) =>
        dropdown.id === dropdownId ? { ...dropdown, isOpen: !dropdown.isOpen } : dropdown
      )
    );
  };


  const toggleSearchModal = () => {
    setSearchModalOpen(!searchModalOpen);
  };
  
  const openDropdownOnMouseEnter = (dropdownId) => {
    setDropdowns((prevDropdowns) =>
      prevDropdowns.map((dropdown) =>
        dropdown.id === dropdownId ? { ...dropdown, isOpen: true } : dropdown
      )
    );
  };

  const closeDropdownOnMouseLeave = (dropdownId) => {
    setDropdowns((prevDropdowns) =>
      prevDropdowns.map((dropdown) =>
        dropdown.id === dropdownId ? { ...dropdown, isOpen: false } : dropdown
      )
    );
  };

  return (
    <div ref={menuRef}>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className="fixed-top" expand="lg" color="default" style={{ fontFamily: "Museo Sans Rounded, sans-serif" }}>
        <Container fluid>
          <Collapse
            className="navbar-collapse justify-content-start"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
              <NavbarBrand
                  target="_blank"
                  id="navbar-brand"
                  href="/"
                  style={{fontFamily: "Museo Sans Rounded, sans-serif",fontWeight: "bold",
                fontSize: "80%"}}
                >
                  <img
                      src={logo}
                      alt="Eightfold.ai Logo"
                      className="navbar-logo"
                      style={{ width: "30px", height: "auto", marginRight: "2px" }} // Adjust the width as needed
                    />
                   
                  eightfold.ai
                </NavbarBrand>
              </NavItem>

              <Dropdown isOpen={dropdowns.find((d) => d.id === "products").isOpen} toggle={() => toggleDropdown("products")} nav onMouseEnter={() => openDropdownOnMouseEnter("products")} onMouseLeave={() => closeDropdownOnMouseLeave("products")}>
  <DropdownToggle color="default" nav className="custom-dropdown-toggle mr-2 menu-trigger" onClick={() => setOpen(!open)}>
    <p>Products</p>
  </DropdownToggle>
  <DropdownMenu className={`custom-dropdown-menu ${open ? 'active' : 'inactive'}`} 
  style={{ marginTop: "20%", marginLeft: "-100%", height: "500%" }}>
  <Container style={{ width: "950px", height: "100%", display: "flex" }}>
      <Row>
      <Col md="3" style={{ marginBottom: "-15px" }}>
        {/* Dropdown items */}
        <DropdownItem to="/index" tag={Link} style={{ marginBottom: "-20px" }}>
          Talent Intelligence Platform
        </DropdownItem>
        <DropdownItem
          href="https://demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-index-navbar"
          target="_blank"
          style={{ marginBottom: "-20px" }}
        >
          Talent Flex
        </DropdownItem>
        <DropdownItem
          href="https://demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-index-navbar"
          target="_blank"
          style={{ marginBottom: "-20px" }}
        >
          Talent Acquisition
        </DropdownItem>
        <DropdownItem
          href="https://demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-index-navbar"
          target="_blank"
          style={{ marginBottom: "-20px" }}
        >
          Talent Management
        </DropdownItem>
        <DropdownItem
          href="https://demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-index-navbar"
          target="_blank"
        >
          Workforce Exchange
        </DropdownItem>
      </Col>

 <Col md="9" style={{ marginTop: "-1%", height: "111%", background: "linear-gradient(to right, #7cf3f7, #04b6d1)", color: "black", display: "flex", flexDirection: "row", alignItems: "center", borderTopRightRadius: "20px", borderBottomRightRadius: "20px"}}>
          {/* Second Column */}
          <div style={{ flex: 1, height: "100%", paddingTop: "7%" }}>
            <h5 style={{ fontSize: "20px", fontWeight: 1000 }}>A single AI platform for all talent</h5>
            <p style={{ fontSize: "14px", fontWeight: 500, whiteSpace: "normal" }}>Powered by global talent datasets so you can realize the full potential of your workforce</p>
            <a href="your-link-url-here" style={{ fontSize: "13px", fontWeight: 500, color: "black" }}>Explore talent suite  <FontAwesomeIcon icon={faArrowRight} /></a>

          </div>
          <div style={{ flex: 1, display: "flex", justifyContent: "flex-end", alignItems: "center", height: "100%" }}>
            <img
              src={cmpImg}
              alt="Eightfold.ai Logo"
              className="navbar-logo"
              style={{ width: "90%", height: "auto", borderRadius: "15px" }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  </DropdownMenu>
</Dropdown>

          <Dropdown
            isOpen={dropdowns.find((d) => d.id === "solutions").isOpen}
            toggle={() => toggleDropdown("solutions")}
            nav
            onMouseEnter={() => openDropdownOnMouseEnter("solutions")}
            onMouseLeave={() => closeDropdownOnMouseLeave("solutions")}
          >     
          <DropdownToggle color="default" nav className="custom-dropdown-toggle mr-2">
              <p>Solutions</p>
            </DropdownToggle>
            <DropdownMenu className={`custom-dropdown-menu ${open? 'active' : 'inactive'}`} style={{marginTop: "20%",}}>
                  <DropdownItem to="/index" tag={Link}     style={{ marginBottom: "-20px" }}
>
                    {/* <i className="now-ui-icons business_chart-pie-36 mr-1"></i> */}
                    For enterprise
                  </DropdownItem>
                  <DropdownItem
                    href="https://demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-index-navbar"
                    target="_blank"
                    style={{ marginBottom: "-20px" }}

                  >
                    {/* <i className="now-ui-icons design_bullet-list-67 mr-1"></i> */}
                    For public sector
                  </DropdownItem>
                  <DropdownItem
                    href="https://demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-index-navbar"
                    target="_blank"
                    style={{ marginBottom: "-20px" }}

                  >
                    {/* <i className="now-ui-icons design_bullet-list-67 mr-1"></i> */}
                    For public sector
                  </DropdownItem>
                  <DropdownItem
                    href="https://demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-index-navbar"
                    target="_blank"
                    style={{ marginBottom: "-20px" }}

                  >
                    {/* <i className="now-ui-icons design_bullet-list-67 mr-1"></i> */}
                    For DE&I
                  </DropdownItem>
                  <DropdownItem
                    href="https://demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-index-navbar"
                    target="_blank"
                    style={{ marginBottom: "-20px" }}

                  >
                    {/* <i className="now-ui-icons design_bullet-list-67 mr-1"></i> */}
                    For governance
                  </DropdownItem>
                  <DropdownItem
                    href="https://demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-index-navbar"
                    target="_blank"
                    style={{ marginBottom: "15px" }}

                  >
                    {/* <i className="now-ui-icons design_bullet-list-67 mr-1"></i> */}
                    App marketplace
                  </DropdownItem>
                  </DropdownMenu>
          </Dropdown>
          <NavItem>
  <NavLink
    to="/services"
    tag={Link}
    className="nav-link"
  >
    <p style={{fontSize: "100%"}}>Services</p>
  </NavLink>
</NavItem>


<Dropdown
            isOpen={dropdowns.find((d) => d.id === "learn").isOpen}
            toggle={() => toggleDropdown("learn")}
            nav
            onMouseEnter={() => openDropdownOnMouseEnter("learn")}
            onMouseLeave={() => closeDropdownOnMouseLeave("learn")}
          >            <DropdownToggle color="default" nav className="custom-dropdown-toggle mr-2">
              <p>Learn</p>
            </DropdownToggle>
            <DropdownMenu
  className={`custom-dropdown-menu ${open ? 'active' : 'inactive'}`}
  style={{ marginTop: "20%", marginLeft: "-500%", height: "500%"}}
>
  <Container style={{ width: "950px", height: "100%" , display: "flex"}}>
    <Row>
      <Col md="3" style={{ marginBottom: "-15px" }}>
  {/* Dropdown items */}
  <DropdownItem to="/index" tag={Link} style={{ marginBottom: "-15px" }}>
    Talent intelligence library
  </DropdownItem>
  <DropdownItem
    href="https://demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-index-navbar"
    target="_blank"
    style={{ marginBottom: "-15px" }}
  >
    Eightfold AI talent research
  </DropdownItem>
  <DropdownItem
    href="https://demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-index-navbar"
    target="_blank"
    style={{ marginBottom: "-15px" }}
  >
    The New Talent Code podcast
  </DropdownItem>
  <DropdownItem
    href="https://demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-index-navbar"
    target="_blank"
  >
    Blog
  </DropdownItem>
  
</Col>

                  <Col md="9" style={{ marginTop: "-7px" ,height: "110%",background: "linear-gradient(to right, #008BE8, #5B4B6E )", color: "black", display: "flex", flexDirection: "row", alignItems: "center", borderTopRightRadius: "20px", borderBottomRightRadius: "20px" }}>
  {/* First Column */}
  <div style={{ flex: 1, padding: "20px" }}>
    <h5 style={{ fontSize: "20px", fontWeight: 700 }}>Responsible Al at Eightfold</h5>
    <p style={{ fontSize: "13px", fontWeight: 500 }}>We believe in helping everyone see their full potential - and the career opportunities 
    that come with that view</p>
    <a href="your-link-url-here" style={{ fontSize: "13px", fontWeight: 500, color: "black" }}>Learn more <FontAwesomeIcon icon={faArrowRight} /></a>

  </div>
  
  {/* Second Column */}
  <div style={{ height: "100%", flex: 1, display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
    <img
      src={learnImg}
      alt="Eightfold.ai Logo"
      className="navbar-logo"
      style={{ width: "90%", height: "auto", borderRadius: "0" }} // Adjust the width and other styles as needed
    />
  </div>
</Col>


      </Row>
    </Container>
  </DropdownMenu>
          </Dropdown>
          <Dropdown
            isOpen={dropdowns.find((d) => d.id === "customers").isOpen}
            toggle={() => toggleDropdown("customers")}
            nav
            onMouseEnter={() => openDropdownOnMouseEnter("customers")}
            onMouseLeave={() => closeDropdownOnMouseLeave("customers")}
          >           
           <DropdownToggle color="default" nav className="custom-dropdown-toggle mr-2"
           >
              <p>Customers</p>
            </DropdownToggle>
            <DropdownMenu className={`custom-dropdown-menu ${open? 'active' : 'inactive'}`} style={{marginTop: "20%",}}>
                  <DropdownItem to="/index" tag={Link}     style={{ marginBottom: "-15px" }}
>
                    {/* <i className="now-ui-icons business_chart-pie-36 mr-1"></i> */}
                    Eightfold customers
                  </DropdownItem>
                  <DropdownItem
                    href="https://demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-index-navbar"
                    target="_blank"
                    style={{ marginBottom: "-15px" }}

                  >
                    {/* <i className="now-ui-icons design_bullet-list-67 mr-1"></i> */}
                    Customer stories
                  </DropdownItem>
                  <DropdownItem to="/index" tag={Link}     style={{ marginBottom: "15px" }}
>
                    {/* <i className="now-ui-icons business_chart-pie-36 mr-1"></i> */}
                    Community
                  </DropdownItem>
                  
                  </DropdownMenu>
                </Dropdown>
           
                <Dropdown
            isOpen={dropdowns.find((d) => d.id === "events").isOpen}
            toggle={() => toggleDropdown("events")}
            nav
            onMouseEnter={() => openDropdownOnMouseEnter("events")}
            onMouseLeave={() => closeDropdownOnMouseLeave("events")}
          >            
          <DropdownToggle color="default" nav className="custom-dropdown-toggle mr-2">
              <p>Events</p>
            </DropdownToggle>
            <DropdownMenu
  className={`custom-dropdown-menu ${open ? 'active' : 'inactive'}`}
  style={{  marginTop: "20%",marginLeft: "-700%", height: "500%"}}
>
    <Container style={{ width: "950px", height: "100%", display: "flex" }}>
      <Row>
      <Col md="3" style={{ marginBottom: "-15px" }}>
  <DropdownItem
    href="https://demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-index-navbar"
    target="_blank"
    style={{ marginBottom: "-15px" }}
  >
    All Events
  </DropdownItem>
  <DropdownItem
    href="https://demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-index-navbar"
    target="_blank"
    style={{ marginBottom: "-15px" }}
  >
    Cultivate
  </DropdownItem>
  <DropdownItem
    href="https://demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-index-navbar"
    target="_blank"
  >
    Webinars
  </DropdownItem>
</Col>

  <Col md="9"  
  style={{ marginTop: "-7px" ,height: "110%",background: "linear-gradient(to right, #7cf3f7, #04b6d1)", color: "black", display: "flex", flexDirection: "row", alignItems: "center", borderTopRightRadius: "20px", borderBottomRightRadius: "20px" }}>
  {/* First Column */}
        <div style={{ flex: 1, padding: "20px", height: "100%" }}>
    <h5 style={{ fontSize: "20px", fontWeight: 700 }}>Let's get you future ready</h5>
    <p style={{ fontSize: "14px", fontWeight: 500 }}>Cultivate is the premier global HR industry event for champions of talent excellence, 
    delivering innovation, inspiration, insights, and best practices from today'top talent leaders.</p>
    <a href="your-link-url-here" style={{ fontSize: "13px", fontWeight: 500, color: "black" }}>Watch on demand <FontAwesomeIcon icon={faArrowRight} /></a>

  </div>
  
  {/* Second Column */}
  <div style={{ flex: 1, display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
    <img
      src={evtImg}
      alt="Eightfold.ai Logo"
      className="navbar-logo"
      style={{ width: "800%", height: "auto", borderRadius: "15px" }} // Adjust the width and other styles as needed
    />
  </div>
</Col>


      </Row>
    </Container>
  </DropdownMenu>
                </Dropdown>
                <Dropdown
            isOpen={dropdowns.find((d) => d.id === "company").isOpen}
            toggle={() => toggleDropdown("company")}
            nav
            onMouseEnter={() => openDropdownOnMouseEnter("company")}
            onMouseLeave={() => closeDropdownOnMouseLeave("company")}
          >            
          <DropdownToggle color="default" nav className="custom-dropdown-toggle mr-2"
         
           >
                  <Link to="/company" style={{textDecoration: "none"}}>Company</Link> {/* Link to "/company" */}
            </DropdownToggle>
            <DropdownMenu
  className={`custom-dropdown-menu ${open ? 'active' : 'inactive'}`}
  style={{ marginTop: "20%", marginLeft: "-600%", height: "500%"}}
>
  <Container style={{ width: "950px", height: "100%", display: "flex" }}>
      <Row>
      <Col md="3" style={{ marginBottom: "-15px" }}>
  {/* Dropdown items */}
  <DropdownItem to="/index" tag={Link} style={{ marginBottom: "-20px" }}>
    About Eightfold
  </DropdownItem>
  <DropdownItem
    href="https://demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-index-navbar"
    target="_blank"
    style={{ marginBottom: "-20px" }}
  >
    Leadership & Advisory Board
  </DropdownItem>
  <DropdownItem
    href="https://demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-index-navbar"
    target="_blank"
    style={{ marginBottom: "-20px" }}
  >
    Ethics council
  </DropdownItem>
  <DropdownItem
    href="https://demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-index-navbar"
    target="_blank"
    style={{ marginBottom: "-20px" }}
  >
    Careers
  </DropdownItem>
  <DropdownItem
    href="https://demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-index-navbar"
    target="_blank"
    style={{ marginBottom: "-20px" }}
  >
    Partners
  </DropdownItem>
  <DropdownItem
    href="https://demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-index-navbar"
    target="_blank"
    style={{ marginBottom: "-20px" }}
  >
    Press
  </DropdownItem>
  <DropdownItem
    href="https://demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-index-navbar"
    target="_blank"
  >
    Contact Us
  </DropdownItem>
  
</Col>

                  <Col md="9" style={{ marginTop: "-1%" ,height: "111%",background: "linear-gradient(to right, #008BE8, #5B4B6E )", color: "black", display: "flex", flexDirection: "row", alignItems: "center", borderTopRightRadius: "20px", borderBottomRightRadius: "20px" }}>

  {/* First Column */}
  <div style={{ flex: 2, padding: "20px", color: "white" }}>
    <h5 style={{ fontSize: "20px", fontWeight: 700 }}>
      Eightfold featured in Forbes AI 50 2023
      </h5>
    <p style={{ fontSize: "14px", fontWeight: 500 }}>
      We are proud to be the only HR technology company featured in Forbes annual list recognizing the most promising
      privately held global companies building business out of AI.
    </p>
    <a href="your-link-url-here" style={{ fontSize: "13px", fontWeight: 500 }}> Read article <FontAwesomeIcon icon={faArrowRight} /></a>

  </div>

  {/* Second Column */}
  <div style={{ flex: 1, display: "flex", justifyContent: "flex-end", alignItems: "center", height: "100%" }}>
    <img
      src={cmpnyImg}
      alt="Eightfold.ai Logo"
      className="navbar-logo"
      style={{ width: "800%", height: "auto", borderRadius: "15px" }}
    />
  </div>
</Col>





      </Row>
    </Container>
  </DropdownMenu>
                </Dropdown>
              </Nav>
              </Collapse>

              <Collapse
  className="justify-content-end"
  isOpen={collapseOpen}
  navbar
>
  <Nav navbar>
  <NavItem>
  <FontAwesomeIcon
    className="mt-3 mr-1"
    icon={faSearch}
    style={{ color: "white", cursor: "pointer", fontSize: "70%" }} // Adjust the fontSize as needed
    onClick={toggleSearchModal} // Open the search modal on click
  />
</NavItem>

    <NavItem className="d-flex align-items-center">
      <div style={{ height: '40px', borderLeft: '1px solid #585959', margin: '0 10px' }}></div>
    </NavItem>
    <NavItem>
    <Button
  className="nav-link btn-neutral mr-2 mt-2"
  style={{
    borderRadius: "50px",
    // padding: "8% 20% 5% 5%", // Adjust padding to increase button size
    fontWeight: 600,
    backgroundColor: "#17eba8",
    color: "black",
    fontSize: "80%",
    whiteSpace: "nowrap", // Prevent line breaks
  }}
  to="/review-demo"
  tag={Link}
>
  Request Demo
</Button>

</NavItem>

    <NavItem>
      <NavbarBrand
        className="mt-2"
        href="https://demos.creative-tim.com/now-ui-kit-react/#/index?ref=nukr-index-navbar"
        target="_blank"
        id="navbar-brand"
        style={{fontWeight:700}}
      >
        Login                
      </NavbarBrand>
    </NavItem>
  </Nav>
</Collapse>
<SearchModal isOpen={searchModalOpen} toggleSearchModal={toggleSearchModal} />

</Container>
<style>
  {`

.menu-trigger dropdown-toggle{
  position: absolute;
  top: 20px;
  right: 20px;
  height: 60%;
  width: 60px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
}

.custom-dropdown-menu {
  position: absolute;
  // top: 1000px;
  // right: 20px;
  padding: 10px 20px;
  max-width: 800%;
  max-height: 430%;

}


.custom-dropdown-menu::before{
  content: '';
  position: absolute;
  top: -5px;
  right: 20px;
  height: 0.1%;
  width: 0.1%;
  color: rgb(29, 33, 43);
  // transform: rotate(45deg);
}

.custom-dropdown-menu.active{
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
  transition: 1000ms ease;
}

.custom-dropdown-menu.inactive{
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  transition: 1000ms ease;
}

  .custom-dropdown-menu a {
  text-decoration: none; 
  border-bottom: 2px solid transparent; 
  transition: border-bottom 0.3s ease-in-out;
 

}

.custom-dropdown-menu a:hover {
  background-image: linear-gradient(to right, #1d212b, #1d212b);
  background-size: 100% 3px;
  background-position: 0 90%; 
  background-clip: text;
  border-bottom: 2.5px solid transparent;
  border-image: linear-gradient(0.25turn, rgba(50, 94, 168), rgba(24, 9, 230), rgba(169, 11, 227));
  border-image-slice: 1;
  width:100%;
}

 
  .close-button{
     color:white
  }
  .close-button:hover {
    color: blue;

  }
  
  .dropdown-menu {
    background-color: rgb(29, 33, 43); 
    font-size: 16px;
    font-weight: 200;
    color: white; 
    border-radius: 20px;
    position: absolute;
  }
  .dropdown-menu:hover {
    background-color: rgb(29, 33, 43); 
    color: white; 
    border-radius: 20px;
    position: absolute;
  }
  

  .custom-dropdown-toggle p {
    font-size: 100%;
  }
  ` 
  }
</style>
</Navbar>

</div>
);
}

export default IndexNavbar;
