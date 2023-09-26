// Import React and various components and libraries
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Button,
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

// Import FontAwesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/img/logoeightfold-fotor-bg-remover-20230823133343.png";
import SearchModal from "./SearchModal";
import cmpImg from "../../assets/img/demo_tip_mega_menu.webp";
import learnImg from "../../assets/img/learn.webp";
import cmpnyImg from "../../assets/img/forbes.webp";
import evtImg from "../../assets/img/events.webp";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function IndexNavbar() {
  // Define various state variables
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState(null);
  const [click, setClick] = useState(false); // Add a click state
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const whiteTextColorClass = screenWidth < 1000 ? 'slate-text' : '';

  // Function to handle click event
  const handleClick = () => {
    setClick(!click); // Toggle the click state
  };

  // Define state for dropdown menus
  const [dropdowns, setDropdowns] = useState([
    { id: "products", isOpen: false },
    { id: "solutions", isOpen: false },
    { id: "learn", isOpen: false },
    { id: "customers", isOpen: false },
    { id: "events", isOpen: false },
    { id: "company", isOpen: false },
  ]);

  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setModalOpen(true);
  };
  
  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  // Create a reference to the menu element
  const menuRef = useRef();

  // Use useEffect for side effects and event listeners
  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Add a window resize event listener
    window.addEventListener("resize", handleResize);

    // Function to handle clicks outside of the menu
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    // Add a document click event listener
    document.addEventListener("mousedown", handler);

    // Add logic to set click to true when screen width is 1000px
    if (window.innerWidth >= 1000) {
      setClick(true);
    } else {
      setClick(false);
    }

    // Cleanup: remove event listeners
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  // Function to toggle a dropdown menu
  const toggleDropdown = (id) => {
    const updatedDropdowns = dropdowns.map((dropdown) => {
      if (dropdown.id === id) {
        return { ...dropdown, isOpen: !dropdown.isOpen };
      }
      return dropdown;
    });
    setDropdowns(updatedDropdowns);
  };


     
  return (
    <div ref={menuRef} >
 
      
      <Navbar
  className='navbar-top fixed-top'
//   expand="lg"
  color="default"
  style={{ maxWidth:"110vw",background: "#2B3140",
  fontFamily: "Museo Sans Rounded, sans-serif",
  borderBottomLeftRadius: "45px",
  borderBottomRightRadius: "25px" }}
>
            
          <div className="sticky-nav" style={{width: "100%",backgroundColor: "transparent"}}>
          <Nav navbar style={{ width: "100%" }}>
  <NavItem className={click ? "d-flex align-items-center justify-content-center sticky-border" : "d-flex align-items-center justify-content-center"}>
    <i
      className={click ? "fas fa-times d-flex align-items-left justify-content-left ml-2" : "fas fa-bars d-flex align-items-left justify-content-left ml-2"}
      onClick={handleClick}
      style={{ fontSize: "30px", position: "absolute", left: "15px", cursor: "pointer", color: "white" }}
    />
    <NavbarBrand
      className="navbar-logo-main mx-auto" // Added mx-auto class to center the NavbarBrand horizontally
      id="navbar-brand"
      href="/"
      style={{
        fontFamily: "Museo Sans Rounded, sans-serif",
        fontWeight: "normal",
        fontSize: "40%",
        color: "white"
      }}
    >
      <img
        src={logo}
        alt="Eightfold.ai Logo"
        className="navbar-logo"
        style={{
          width: "30px",
          height: "auto",
          marginRight: "2px"
        }}
      />
      eightfold.ai
    </NavbarBrand>
  </NavItem>
</Nav>

</div>

            {click && (
              <Container
              className="pl-5" // Apply the "sticky-border" class here
              style={{
    // height: "100vh",
    // height: "100%",
    // borderTop: "1px solid #ccc",
    maxWidth: "100vw", // Set maxWidth to 100% to occupy full width
  }}
>
<Nav navbar style={{  width: "100%"}}>
 
   <NavItem>
   <div>
    <Dropdown 
    // onMouseEnter={() => openDropdownOnMouseEnter("products")}
    // onMouseLeave={() => closeDropdownOnMouseLeave("products")}
  //  isOpen={dropdowns.find((d) => d.id === "products").isOpen} 
   toggle={() => toggleDropdown("products")} 
   nav 
  
   >
<DropdownToggle
  nav
  onClick={() => toggleDropdown("products")} // Toggle dropdown on click
>
  <p
    className={`dropdown-toggle-text ${dropdowns.find((d) => d.id === "products").isOpen ? "blueText" : "white-text"}`}
    style={{ fontSize: "100%", margin: "0", padding: "5px 0" }}
    >
    Products <FontAwesomeIcon icon={faAngleDown} style={{color: "black"}}/>
  </p>
</DropdownToggle>


  {dropdowns.find((d) => d.id === "products").isOpen && (
        <div>
          {/* <DropdownMenu > */}
          {/* <Container > */}
          {/* Dropdown items */}
          <NavItem className={whiteTextColorClass}>
            Talent Intelligence Platform
          </NavItem>
          <NavItem className={whiteTextColorClass}>Talent Flex</NavItem>
          <NavItem className={whiteTextColorClass}>Talent Acquisition</NavItem>
          <NavItem className={whiteTextColorClass}>Talent Management</NavItem>
          <NavItem className={whiteTextColorClass}>Workforce Exchange</NavItem>
          {/* </Container> */}
          {/* </DropdownMenu> */}
        </div>
      )}
      </Dropdown>
 </div>


  
</NavItem>
<NavItem>
    <div>
          <Dropdown
            // isOpen={dropdowns.find((d) => d.id === "solutions").isOpen}
            // onClick={menuClick("solutions")} 
            toggle={() => toggleDropdown("solutions")}
            nav
            // onMouseEnter={() => openDropdownOnMouseEnter("solutions")}
            // onMouseLeave={() => closeDropdownOnMouseLeave("solutions")}
          >     
          <DropdownToggle nav 
            onClick={() => toggleDropdown("solutions")} // Toggle dropdown on click
                      >
             <p
    className={`dropdown-toggle-text ${dropdowns.find((d) => d.id === "solutions").isOpen ? "blueText" : "white-text"}`}
    style={{ fontSize: "100%", margin: "0", padding: "5px 0" }}
    >
    Solutions <FontAwesomeIcon icon={faAngleDown} style={{color: "black"}}/>
  </p>
            </DropdownToggle>

{dropdowns.find((d) => d.id === "solutions").isOpen && (
        <div>
        <NavItem className={whiteTextColorClass} >
                    For enterprise
                  </NavItem>
                  <NavItem className={whiteTextColorClass} >
                    For public sector
                  </NavItem>
                  <NavItem className={whiteTextColorClass}  >
                    {/* <i className="now-ui-icons design_bullet-list-67 mr-1"></i> */}
                    For public sector
                  </NavItem>
                  <NavItem  className={whiteTextColorClass} >
                    {/* <i className="now-ui-icons design_bullet-list-67 mr-1"></i> */}
                    For DE&I
                  </NavItem>
                  <NavItem
                    
                    className={whiteTextColorClass} // Apply the class conditionally

                  >
                    {/* <i className="now-ui-icons design_bullet-list-67 mr-1"></i> */}
                    For governance
                  </NavItem>
                  <NavItem  className={whiteTextColorClass} // Apply the class conditionally

                  >
                    {/* <i className="now-ui-icons design_bullet-list-67 mr-1"></i> */}
                    App marketplace
                  </NavItem>
                  </div>
)}
          </Dropdown>
          </div>
          </NavItem>
          <NavItem>
  <NavLink
    to="/services"
    tag={Link}
    className="nav-link"
  >
    <p className="service-p" style={{fontSize: "90%", color: "white", marginBottom: "-0.25%"}}>Services</p>
  </NavLink>
</NavItem>

<NavItem>
    <div>
<Dropdown
            // isOpen={dropdowns.find((d) => d.id === "learn").isOpen}
            toggle={() => toggleDropdown("learn")}
            // onClick={menuClick("learn")} 
            nav
            // onMouseEnter={() => openDropdownOnMouseEnter("learn")}
            // onMouseLeave={() => closeDropdownOnMouseLeave("learn")}
          >         
          <DropdownToggle nav 
         onClick={() => toggleDropdown("learn")} // Toggle dropdown on click
                      >
                     <p
    className={`dropdown-toggle-text ${dropdowns.find((d) => d.id === "learn").isOpen ? "blueText" : "white-text"}`}
    style={{ fontSize: "100%", margin: "0", padding: "5px 0" }}
    >
    Learn <FontAwesomeIcon icon={faAngleDown} style={{color: "black"}}/>
  </p>
            </DropdownToggle>
            {dropdowns.find((d) => d.id === "learn").isOpen && (
        <div>      
  {/* Dropdown items */}
  <NavItem className={whiteTextColorClass}>
    Talent intelligence library
  </NavItem>
  <NavItem  className={whiteTextColorClass} >
    Eightfold AI talent research
  </NavItem>
  <NavItem className={whiteTextColorClass} >
    The New Talent Code podcast
  </NavItem>
  <NavItem className={whiteTextColorClass}  >
    Blog
 
  </NavItem>
  
</div>
            )}
            </Dropdown>
</div>
          </NavItem>
          <NavItem>
   <div>
          <Dropdown
            // isOpen={dropdowns.find((d) => d.id === "customers").isOpen}
            toggle={() => toggleDropdown("customers")}
            nav
            // onClick={menuClick("customers")} 

            // onMouseEnter={() => openDropdownOnMouseEnter("customers")}
            // onMouseLeave={() => closeDropdownOnMouseLeave("customers")}
          >           
           <DropdownToggle 
           nav 
           onClick={() => toggleDropdown("customers")} // Toggle dropdown on click

           >
                         <p
    className={`dropdown-toggle-text ${dropdowns.find((d) => d.id === "customers").isOpen ? "blueText" : "white-text"}`}
    style={{ fontSize: "100%", margin: "0", padding: "5px 0" }}
    >
    Customers <FontAwesomeIcon icon={faAngleDown} style={{color: "black"}}/>
  </p>
            </DropdownToggle>
            {dropdowns.find((d) => d.id === "customers").isOpen && (
        <div>
                  <NavItem  className={whiteTextColorClass} >
                    Eightfold customers
                  </NavItem>
                  <NavItem className={whiteTextColorClass}  >
                    Customer stories
                  </NavItem>
                  <NavItem    
                  className={whiteTextColorClass} // Apply the class conditionally
>
                    Community
                  </NavItem>
                  
                  </div>
      )}
      </Dropdown>
 </div>
 </NavItem>
 <NavItem>
   <div>
                <Dropdown
            // isOpen={dropdowns.find((d) => d.id === "events").isOpen}
            toggle={() => toggleDropdown("events")}
            nav
            // onClick={menuClick("events")} 

            // onMouseEnter={() => openDropdownOnMouseEnter("events")}
            // onMouseLeave={() => closeDropdownOnMouseLeave("events")}
          >            
          <DropdownToggle
           nav
           onClick={() => toggleDropdown("events")} // Toggle dropdown on click

           >
                     <p
    className={`dropdown-toggle-text ${dropdowns.find((d) => d.id === "events").isOpen ? "blueText" : "white-text"}`}
    style={{ fontSize: "100%", margin: "0", padding: "5px 0" }}
    >
    Events <FontAwesomeIcon icon={faAngleDown} style={{color: "black"}}/>
  </p>
            </DropdownToggle>
            {dropdowns.find((d) => d.id === "events").isOpen && (
        <div> 
           
    
  <NavItem
    className={whiteTextColorClass} 
  >
    All Events
  </NavItem>
  <NavItem className={whiteTextColorClass} >
    Cultivate
  </NavItem>
  <NavItem className={whiteTextColorClass}  >
    Webinars
  </NavItem>
  </div>
      )}
      </Dropdown>
 </div>


  
</NavItem>
<NavItem>
   <div>
                <Dropdown
            // isOpen={dropdowns.find((d) => d.id === "company").isOpen}
            toggle={() => toggleDropdown("company")}
            nav
            // onMouseEnter={() => openDropdownOnMouseEnter("company")}
            // onMouseLeave={() => closeDropdownOnMouseLeave("company")}
          >            
          <DropdownToggle 
          nav
          onClick={() => toggleDropdown("company")} // Toggle dropdown on click

           >
                            <p
    className={`dropdown-toggle-text ${dropdowns.find((d) => d.id === "company").isOpen ? "blueText" : "white-text"}`}
    style={{ fontSize: "100%", margin: "0", padding: "5px 0" }}
    >
    Company <FontAwesomeIcon icon={faAngleDown} style={{color: "black"}}/>
  </p>
            </DropdownToggle>
            {dropdowns.find((d) => d.id === "company").isOpen && (
        <div>  {/* Dropdown items */}
  <NavItem >
    
    <Link className={whiteTextColorClass} to="/company">About Eightfold</Link>

  </NavItem>
  <NavItem>
          <Link className={whiteTextColorClass} to="/company/leadership">Leadership & Advisory Board</Link>

    
  </NavItem>
  <NavItem>
      <Link className={whiteTextColorClass} to="/ethics">Ethics council</Link>
  </NavItem>
  <NavItem>
  
          <Link className={whiteTextColorClass} to="/careers">Careers</Link>

    
  </NavItem>
  <NavItem>
  
              <Link className={whiteTextColorClass} to="/partners">Partners</Link>

    
  </NavItem>
  <NavItem>
  
                  <Link className={whiteTextColorClass} to="/press">Press</Link>

    
  </NavItem>
  <NavItem >
      <Link className={whiteTextColorClass} to="/contact"> Contact Us</Link>
  </NavItem>
  </div>
      )}
      </Dropdown>
 </div>
 </NavItem>
  <NavItem className="d-flex align-items-center justify-content-center">
    <Button 
      style={{
        borderRadius: "50px",
        fontWeight: 600,
        background: "linear-gradient(to right, #008BE8, #5B4B6E )",
        color: "white",
        fontSize: "80%",
        maxWidth: "100%",
        padding: "2% 17%", // Set padding as a percentage of the button's width and height
        whiteSpace: "nowrap",
      }}
      to=""
      tag={Link}
    >
      Login
    </Button>
  </NavItem>
  </Nav>

  </Container>

)}
    
              

{/* </Container> */}

<style>
  {`

.sticky-nav {
    position: sticky;
    top: 0;
    background-color: #fff; /* Set the background color as needed */
    z-index: 1000; /* Adjust the z-index as needed */
  }
  
/* Add this CSS to your stylesheets or in a <style> tag */
.navbar-top {
  top: -5%;
  left: -4%;
  right: 0;
  position: fixed;
  z-index: 1000; /* Adjust the z-index as needed */
}
  .dropdown-menu {
    background-color: rgb(29, 33, 43); 
    font-size: 120%;
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
    font-size: 120%;
  }
  .white-text {
    color: #fff;
    font-size: 60%;
    padding-left: 3%;
    padding-top: 1%;
    padding-bottom: 1%;

  }
  .slate-text{
    color: #bad1e8;
    padding-bottom: 5% !important;

  }
  .blueText {
    color: #008FBF; /* Change this to your desired blue color */
  }
    
  /* CSS for screen width 280px to 540px */
  @media only screen and (min-width: 280px) and (max-width: 766px) {
    
   .navbar-logo-main{
    font-size: 18px !important;
    // padding-left: 10% !important;
   }

   .slate-text{
    color: #bad1e8;
    padding-bottom: 5% !important;
    font-size: 14px !important;
    font-weight: 400 !important;
    padding-left: 2% !important;


  }
  .slate-text link{
    color: #bad1e8;
    padding-bottom: 5% !important;
    font-size: 14px !important;
    font-weight: 400 !important;
    padding-left: 2% !important;


  }
  .blueText {
    color: #008FBF; /* Change this to your desired blue color */
    font-size: 16px !important;
    // margin-left: -5% !important;


  }
  .white-text {
    font-size: 16px !important;
    // margin-left: -5% !important;

   

  }
  .service-p{
    // margin-left: -5% !important;

  }

    
       }
  @media only screen and (min-width: 767px) and (max-width: 912px) {

    
    .navbar-logo-main{
      font-size: 14px !important;
     }
   
     .slate-text{
      color: #bad1e8;
      margin-bottom: -2% !important;
      font-size: 14px !important;
      font-weight: 400 !important;
      padding-left: 2% !important;
  
    }
    .blueText {
      color: #008FBF; /* Change this to your desired blue color */
      font-size: 16px !important;
  
    }
    .white-text {
      font-size: 16px !important;
     
  
    }
   
    
       }
       .dropdown-toggle-text {
        display: flex;
        align-items: center; /* Align vertically in the middle */
        justify-content: space-between;
      }
  
      .dropdown-toggle-text .blueText {
        margin-right: 5px; /* Add spacing between text and icon */
      }
  
      .sticky-border {
        position: sticky;
        // top: 0;
        // background-color: white; /* Add a background color if needed */
        // z-index: 1; /* You may need to adjust the z-index based on your layout */
        border-bottom: 0.5px solid #ccc; /* Adjust border properties as needed */
      }

      @media only screen and (min-width: 1024px) {
        .navbar-logo-main{
          font-size: 14px !important;
         }
      }
      
  
  ` 
  }
</style>
</Navbar>

    </div>
);
}

export default IndexNavbar;
