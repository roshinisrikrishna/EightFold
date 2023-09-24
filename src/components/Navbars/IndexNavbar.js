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
import NavbarShort from "./NavbarShort";



function IndexNavbar() {
const [collapseOpen, setCollapseOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState(null);
const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [click, setClick] = useState(false); // Add a click state
  const [activeDropdown, setActiveDropdown] = useState(null);



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

// Add logic to set click to true when screen width is 1000px
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth >= 1000) {
        setClick(true);
      } else {
        setClick(false);
      }      
    };

    handleResize(); // Initial call to set the click state

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDropdown = (id) => {
    const updatedDropdowns = dropdowns.map((dropdown) => {
      if (dropdown.id === id) {
        return { ...dropdown, isOpen: !dropdown.isOpen };
      }
      return dropdown;
    });
    setDropdowns(updatedDropdowns);
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
    // Clear any existing timeout
    if (closeTimeout) {
      clearTimeout(closeTimeout);
    }
  
    // Set a new timeout to close the dropdown after a delay
    const timeoutId = setTimeout(() => {
      setDropdowns((prevDropdowns) =>
        prevDropdowns.map((dropdown) =>
          dropdown.id === dropdownId ? { ...dropdown, isOpen: false } : dropdown
        )
      );
    }, 300); // You can adjust the delay (in milliseconds) as needed
  
    setCloseTimeout(timeoutId); // Store the new timeout ID
  };
  

  return (
    <div ref={menuRef}>
      {screenWidth >= 1200 || click ? ( // Check screenWidth or click state
    
      <Navbar className="fixed-top ml-4 mt-2" expand="lg" style={{ maxWidth: "95vw",
      borderBottomLeftRadius: "25px",
      borderBottomRightRadius: "25px",
      background: "#2B3140",
      fontFamily: "Museo Sans Rounded, sans-serif" }}>
        <Container fluid>
          
            <Nav navbar>
              <NavItem>
              <NavbarBrand
              className="mt-1"
                  target="_blank"
                  id="navbar-brand"
                  href="/"
                  style={{fontFamily: "Museo Sans Rounded, sans-serif", color: "white", // Add this line to set the font color to white
                  fontWeight: "bold",
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

              <NavItem>
              <Dropdown 
              // isOpen={dropdowns.find((d) => d.id === "products").isOpen} 
              toggle={() => toggleDropdown("products")} 
              nav 
              onMouseEnter={() => setActiveDropdown("products")} // Set active dropdown on mouse enter
                onMouseLeave={() => setActiveDropdown(null)} // Reset active dropdown on mouse leave
              
              // onMouseEnter={() => openDropdownOnMouseEnter("products")}
              //  onMouseLeave={() => closeDropdownOnMouseLeave("products")}
              >
  <DropdownToggle color="default" 
  nav 
  className="custom-dropdown-toggle mr-2 menu-trigger"
  //  onClick={() => setOpen(!open)}
  // onClick={() => {
  //   toggleDropdown("products");
  //   console.log("state ",dropdowns.find((d) => d.id === "products").isOpen);
  // }} // Toggle dropdown on click
   >
    <Link style={{textDecoration: "none"}}>Products</Link>
  </DropdownToggle>
  {/* {dropdowns.find((d) => d.id === "products").isOpen && ( */}

  <DropdownMenu 
 className={`custom-dropdown-menu ${
  activeDropdown === "products" ? "active" : "inactive"
}`} 
  style={{ marginTop: "51%", marginLeft: "-100%", height: "500%" }}>
  <Container style={{ width: "950px", height: "100%", display: "flex" }}>
      <Row>
      
      <Col md="3" style={{left: "-2%", justifyContent: "flex-start",
    textAlign: "left", alignItems: "flex-start" }}>
        {/* Dropdown items */}
        <DropdownItem style={{ marginBottom: "-20px" }}>
<Link>        
          Talent Intelligence Platform
</Link>
        </DropdownItem>
        <DropdownItem
          href=""
          target="_blank"
          style={{ marginBottom: "-20px" }}
        >
          <Link>Talent Flex</Link>
          
        </DropdownItem>
        <DropdownItem
          href=""
          target="_blank"
          style={{ marginBottom: "-20px" }}
        >
          <Link>Talent Acquisition</Link>
          
        </DropdownItem>
        <DropdownItem
          href=""
          target="_blank"
          style={{ marginBottom: "-20px" }}
        >
          <Link> Talent Management</Link>
         
        </DropdownItem>
        <DropdownItem
          href=""
          target="_blank"
style={{ marginBottom: "15px" }}
        >
          <Link>Workforce Exchange</Link>
          
        </DropdownItem>
      </Col>

 <Col md="9" style={{ marginTop: "-1%", height: "110%", background: "linear-gradient(to right, #7cf3f7, #04b6d1)", color: "black", display: "flex", flexDirection: "row", alignItems: "center", borderTopRightRadius: "20px", borderBottomRightRadius: "20px"}}>
          {/* Second Column */}
          <div style={{ flex: 1, height: "100%", paddingTop: "7%" }}>
            <h5 style={{ fontSize: "20px", fontWeight: 1000 }}>A single AI platform for all talent</h5>
            <p style={{ fontSize: "14px", fontWeight: 500, whiteSpace: "normal" }}>Powered by global talent datasets so you can realize the full potential of your workforce</p>
            <p style={{ fontSize: "13px", fontWeight: 500, color: "black" }}>Explore talent suite  <FontAwesomeIcon icon={faArrowRight} /></p>

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
{/* )} */}
</Dropdown>
</NavItem>

<NavItem>
          <Dropdown
            // isOpen={dropdowns.find((d) => d.id === "solutions").isOpen}
            toggle={() => toggleDropdown("solutions")}
            nav
            onMouseEnter={() => setActiveDropdown("solutions")} // Set active dropdown on mouse enter
            onMouseLeave={() => setActiveDropdown(null)} // Reset active dropdown on mouse leave
            // onMouseEnter={() => openDropdownOnMouseEnter("solutions")}
            // onMouseLeave={() => closeDropdownOnMouseLeave("solutions")}
          >     
          <DropdownToggle color="default" nav 
          //  onClick={() => toggleDropdown("solutions")} // Toggle dropdown on click
          className="custom-dropdown-toggle mr-2 menu-trigger"
          >
              <Link style={{textDecoration: "none"}}>Solutions</Link>
            </DropdownToggle>
            {/* {dropdowns.find((d) => d.id === "solutions").isOpen && ( */}

            <DropdownMenu 
className={`custom-dropdown-menu ${
  activeDropdown === "solutions" ? "active" : "inactive"
}`}        style={{marginTop: "51%",}}>
                  <DropdownItem style={{ marginBottom: "-20px" }}
>
                    <Link> For enterprise</Link>
                   
                  </DropdownItem>
                  <DropdownItem
                    href=""
                    target="_blank"
                    style={{ marginBottom: "-20px" }}

                  >
                    <Link>For public sector</Link>
                    
                  </DropdownItem>

                  <DropdownItem
                    href=""
                    target="_blank"
                    style={{ marginBottom: "-20px" }}

                  >
                    <Link>For DE&I</Link>
                    
                  </DropdownItem>
                  <DropdownItem
                    href=""
                    target="_blank"
                    style={{ marginBottom: "-20px" }}

                  >
                    <Link>For governance</Link>
                    
                  </DropdownItem>
                  <DropdownItem
                    href=""
                    target="_blank"
                    style={{ marginBottom: "15px" }}

                  >
                    <Link>App marketplace</Link>
                    
                  </DropdownItem>
                  </DropdownMenu>
{/* )} */}
          </Dropdown>
</NavItem>
          <NavItem>
  <NavLink
    to="/services"
    tag={Link}
    className="nav-link mt-1"
  >
    <p style={{fontSize: '75%', color: "#FFF"}}>Services</p>
  </NavLink>
</NavItem>

<NavItem>
<Dropdown
            // isOpen={dropdowns.find((d) => d.id === "learn").isOpen}
            toggle={() => toggleDropdown("learn")}
            nav
            onMouseEnter={() => setActiveDropdown("learn")} // Set active dropdown on mouse enter
                onMouseLeave={() => setActiveDropdown(null)} // Reset active dropdown on mouse leave
            // onMouseEnter={() => openDropdownOnMouseEnter("learn")}
            // onMouseLeave={() => closeDropdownOnMouseLeave("learn")}
          >       
         <DropdownToggle color="default" nav 
        //  onClick={() => toggleDropdown("learn")} // Toggle dropdown on click
        className="custom-dropdown-toggle mr-2 menu-trigger"
        >
              <Link style={{textDecoration: "none"}}>Learn</Link>
            </DropdownToggle>
{/* {dropdowns.find((d) => d.id === "learn").isOpen && ( */}
  
            <DropdownMenu
  className={`custom-dropdown-menu ${
              activeDropdown === "learn" ? "active" : "inactive"
            }`}
  style={{ marginTop: "51%", marginLeft: "-500%", height: "500%"}}
>
  <Container style={{ width: "950px", height: "100%" , display: "flex"}}>
    <Row>
      <Col md="3" style={{ left: "-2%",marginBottom: "-15px", justifyContent: "flex-start",
    textAlign: "left", alignItems: "flex-start" }}>
  {/* Dropdown items */}
  <DropdownItem style={{ marginBottom: "-15px" }}>
    <Link>Talent intelligence library</Link>
    
  </DropdownItem>
  <DropdownItem
    
    style={{ marginBottom: "-15px" }}
  >
    <Link>Eightfold AI talent research</Link>
    
  </DropdownItem>
  <DropdownItem
    
    style={{ marginBottom: "-15px" }}tyj
  >
    <Link>The New Talent Code podcast</Link>
    
  </DropdownItem>
  <DropdownItem
    
  >
    <Link>Blog</Link>
    
  </DropdownItem>
  
</Col>

                  <Col md="9" style={{ marginTop: "-1%" ,height: "110%",background: "linear-gradient(to right, #008BE8, #5B4B6E )", color: "black", display: "flex", flexDirection: "row", alignItems: "center", borderTopRightRadius: "20px", borderBottomRightRadius: "20px" }}>
  {/* First Column */}
  <div style={{ flex: 1, padding: "20px" }}>
    <h5 style={{ fontSize: "20px", fontWeight: 700 }}>Responsible Al at Eightfold</h5>
    <p style={{ fontSize: "13px", fontWeight: 500 }}>We believe in helping everyone see their full potential - and the career opportunities 
    that come with that view</p>
    <p style={{ fontSize: "13px", fontWeight: 500, color: "black" }}>Learn more <FontAwesomeIcon icon={faArrowRight} /></p>

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
{/* )} */}
          </Dropdown>
</NavItem>

          <NavItem>
          <Dropdown
            // isOpen={dropdowns.find((d) => d.id === "customers").isOpen}
            toggle={() => toggleDropdown("customers")}
            nav
            onMouseEnter={() => setActiveDropdown("customers")} // Set active dropdown on mouse enter
                onMouseLeave={() => setActiveDropdown(null)} // Reset active dropdown on mouse leave
            // onMouseEnter={() => openDropdownOnMouseEnter("customers")}
            // onMouseLeave={() => closeDropdownOnMouseLeave("customers")}
          >           
           <DropdownToggle color="default" nav 
          // onClick={() => toggleDropdown("customers")} // Toggle dropdown on click
          className="custom-dropdown-toggle mr-2 menu-trigger"
           >
              <Link style={{textDecoration: "none"}}>Customers</Link>
            </DropdownToggle>
            {/* {dropdowns.find((d) => d.id === "customers").isOpen && ( */}

            <DropdownMenu 
 className={`custom-dropdown-menu ${
  activeDropdown === "customers" ? "active" : "inactive"
}`}            style={{marginTop: "40%",}}>
                  <DropdownItem style={{ marginBottom: "-15px" }}
>
                    <Link>Eightfold customers</Link>
                  </DropdownItem>
                  <DropdownItem
                    href=""
                    target="_blank"
                    style={{ marginBottom: "-15px" }}

                  >
                    <Link>Customer stories</Link>
                  </DropdownItem>
                  <DropdownItem style={{ marginBottom: "15px" }}
>
                    <Link>Community</Link>
                  </DropdownItem>
                  
                  </DropdownMenu>
{/* )} */}
                </Dropdown>
</NavItem>
           
<NavItem>
                <Dropdown
            // isOpen={dropdowns.find((d) => d.id === "events").isOpen}
            toggle={() => toggleDropdown("events")}
            nav
            onMouseEnter={() => setActiveDropdown("events")} // Set active dropdown on mouse enter
                onMouseLeave={() => setActiveDropdown(null)} // Reset active dropdown on mouse leave
            // onMouseEnter={() => openDropdownOnMouseEnter("events")}
            // onMouseLeave={() => closeDropdownOnMouseLeave("events")}
          >            
          <DropdownToggle color="default" nav 
          //  onClick={() => toggleDropdown("events")} // Toggle dropdown on click
          className="custom-dropdown-toggle mr-2 menu-trigger"
          >
              <Link style={{textDecoration: "none"}}>Events</Link>
            </DropdownToggle>
{/* {dropdowns.find((d) => d.id === "events").isOpen && ( */}

            <DropdownMenu
  className={`custom-dropdown-menu ${
  activeDropdown === "events" ? "active" : "inactive"
}`}  style={{  marginTop: "50%",marginLeft: "-700%", height: "500%"}}
>
    <Container style={{ width: "950px", height: "100%", display: "flex" }}>
      <Row>
      <Col md="3" style={{ left: "-2%",marginBottom: "-15px", justifyContent: "flex-start",
    textAlign: "left", alignItems: "flex-start" }}>
  <DropdownItem
    
    style={{ marginBottom: "-15px" }}
  >
    <Link>All Events</Link>
  </DropdownItem>
  <DropdownItem
    
    style={{ marginBottom: "-15px" }}
  >
    <Link>Cultivate</Link>
  </DropdownItem>
  <DropdownItem
    
  >
    <Link>Webinars</Link>
  </DropdownItem>
</Col>

  <Col md="9"  
  style={{ marginTop: "-1%" ,height: "110%",background: "linear-gradient(to right, #7cf3f7, #04b6d1)", color: "black", display: "flex", flexDirection: "row", alignItems: "center", borderTopRightRadius: "20px", borderBottomRightRadius: "20px" }}>
  {/* First Column */}
        <div style={{ flex: 1, padding: "20px", height: "100%" }}>
    <h5 style={{ fontSize: "20px", fontWeight: 700 }}>Let's get you future ready</h5>
    <p style={{ fontSize: "14px", fontWeight: 500 }}>Cultivate is the premier global HR industry event for champions of talent excellence, 
    delivering innovation, inspiration, insights, and best practices from today'top talent leaders.</p>
    <p  style={{ fontSize: "13px", fontWeight: 500, color: "black" }}>Watch on demand <FontAwesomeIcon icon={faArrowRight} /></p>

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
{/* )} */}
                </Dropdown>
</NavItem>

                <NavItem>
                <Dropdown
            // isOpen={dropdowns.find((d) => d.id === "company").isOpen}
            toggle={() => toggleDropdown("company")}
            nav
            onMouseEnter={() => setActiveDropdown("company")} // Set active dropdown on mouse enter
                onMouseLeave={() => setActiveDropdown(null)} // Reset active dropdown on mouse leave
            // onMouseEnter={() => openDropdownOnMouseEnter("company")}
            // onMouseLeave={() => closeDropdownOnMouseLeave("company")}
          >            
          <DropdownToggle color="default" nav 
          // onClick={() => toggleDropdown("company")} // Toggle dropdown on click
          className="custom-dropdown-toggle mr-2 menu-trigger"
         
           >
                  <Link to="/company" style={{textDecoration: "none"}}>Company</Link> {/* Link to "/company" */}
            </DropdownToggle>
{/* {dropdowns.find((d) => d.id === "company").isOpen && ( */}

            <DropdownMenu
  className={`custom-dropdown-menu ${
  activeDropdown === "company" ? "active" : "inactive"
}`}
  style={{ marginTop: "45%", marginLeft: "-650%", height: "500%"}}
>
  <Container style={{ width: "950px", height: "100%", display: "flex" }}>
      <Row>
      <Col md="3" style={{   left: "-2%", marginBottom: "-15px" }}>
  {/* Dropdown items */}
  <DropdownItem style={{ marginBottom: "-20px" }}>
    
    <Link to="/company">About Eightfold</Link>

  </DropdownItem>
  <DropdownItem
    style={{ marginBottom: "-20px" }}
  >
          <Link to="/company/leadership">Leadership & Advisory Board</Link>

    
  </DropdownItem>
  <DropdownItem
    style={{ marginBottom: "-20px" }}
  >
      <Link to="/ethics">Ethics council</Link>
  </DropdownItem>
  <DropdownItem
    style={{ marginBottom: "-20px" }}
  >
          <Link to="/careers">Careers</Link>

    
  </DropdownItem>
  <DropdownItem
    style={{ marginBottom: "-20px" }}
  >
              <Link to="/partners">Partners</Link>

    
  </DropdownItem>
  <DropdownItem
    style={{ marginBottom: "-20px" }}
  >
                  <Link to="/press">Press</Link>

    
  </DropdownItem>
  <DropdownItem
  >
                      <Link to="/contact"> Contact Us</Link>

   
  </DropdownItem>
  
</Col>

                  <Col md="9" style={{ marginTop: "-1%" ,height: "110%",background: "linear-gradient(to right, #008BE8, #5B4B6E )", color: "black", display: "flex", flexDirection: "row", alignItems: "center", borderTopRightRadius: "20px", borderBottomRightRadius: "20px" }}>

  {/* First Column */}
  <div style={{ flex: 2, padding: "20px", color: "white" }}>
    <h5 style={{ fontSize: "20px", fontWeight: 700 }}>
      Eightfold featured in Forbes AI 50 2023
      </h5>
    <p style={{ fontSize: "14px", fontWeight: 500 }}>
      We are proud to be the only HR technology company featured in Forbes annual list recognizing the most promising
      privately held global companies building business out of AI.
    </p>
    <p style={{ fontSize: "13px", fontWeight: 500 }}> Read article <FontAwesomeIcon icon={faArrowRight} /></p>

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
{/* )} */}
                </Dropdown>
</NavItem>
              </Nav>


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

    <NavItem className="ml-auto">
      <NavbarBrand
        className="mt-2"
        href=""
        id="navbar-brand"
        style={{ fontWeight: 700, color: "white", fontSize: "80%"
      }}
      >
        Login                
      </NavbarBrand>
    </NavItem>

  </Nav>
<SearchModal isOpen={searchModalOpen} toggleSearchModal={toggleSearchModal} />

</Container>
<style>
  {`

/* Add this CSS to your stylesheets or in a <style> tag */
.navbar-top {
  top: -5%;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 1000; /* Adjust the z-index as needed */
}

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

.custom-dropdown-menu  {
  position: absolute;
  // top: 1000px;
  // right: 20px;
  padding: 10px 20px;
  max-width: 800%;
  max-height: 500%;

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
  transition: 500ms ease;
}

.custom-dropdown-menu.inactive{
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  transition: 500ms ease;
}

.custom-dropdown-menu a {
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.3s ease-in-out;
font-size: 100%;
color: #FFF;

}
.custom-dropdown-menu a:hover {
  border-bottom: 2.5px solid transparent;
    border-image: linear-gradient(0.25turn, #0582a8, rgba(1, 63, 82), rgba(169, 11, 227));
    border-image-slice: 1;
}
 
  .close-button{
     color:white
  }
  .close-button:hover {
    color: blue;

  }
  
  .dropdown-menu {
    background-color: rgb(29, 33, 43); 
    font-size: 100%;
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
  
/* Reduce the distance between link and border-bottom */
  .nav-link a {
    font-size: 75%;
    color: #FFF;

  }

  
  .nav-link a:hover::before {
    content: "";
    position: absolute;
    left: 40%; /* Adjust the left position as needed */
    bottom: 25%; /* Place it in the middle of the element */
    transform: translateY(50%); /* Center it vertically */
    height: 3px; /* Adjust the height as needed */
    width: 20%; /* Adjust the width as needed */
    background-image:  linear-gradient(0.25turn, #87CEEB, #1E90FF);
  }
  
  // Modify the CSS rule for the "Services" link to remove the border-bottom
.nav-link a[href="/services"]:hover::before {
  /* Remove or comment out the border-bottom property or set it to none */
  /* border-bottom: 4px solid transparent; */
  border: none; /* This will remove the border-bottom */
  border-image: none; /* This will remove the border-image */
}
.nav-link a:focus {
  border-bottom: 4px solid transparent;
  border-image: linear-gradient(0.25turn, #87CEEB, #1E90FF);
  border-image-slice: 1;
}
// .dropdown-item:hover {
//   border-bottom: 2.5px solid transparent;
//   border-image: linear-gradient(0.25turn, rgba(50, 94, 168), rgba(24, 9, 230), rgba(169, 11, 227));
//   border-image-slice: 1;
// }


  .custom-dropdown-toggle p {
    font-size: 210%;
font-weight: 500;
  }
  ` 
  }
</style>
</Navbar>
) : <NavbarShort />} 

</div>
);
}

export default IndexNavbar;
