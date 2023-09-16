import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  // Collapse,
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
  const [closeTimeout, setCloseTimeout] = useState(null);
  const [click, setClick] = useState(false); // Add a click state
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const whiteTextColorClass = screenWidth < 1000 ? 'white-text' : '';


  const handleClick = () => {
    setClick(!click); // Toggle the click state
  };


  const [dropdowns, setDropdowns] = useState([
    { id: "products", isOpen: false },
    { id: "solutions", isOpen: false },
    { id: "learn", isOpen: false },
    { id: "customers", isOpen: false },
    { id: "events", isOpen: false },
    { id: "company", isOpen: false },


  ]);

  const [open, setOpen] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  
  const closeModal = () => {
    setModalOpen(false);
  };
  


  const menuRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
  
    window.addEventListener("resize", handleResize);
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };
  
    document.addEventListener("mousedown", handler);
  
    // Add logic to set click to true when screen width is 1000px
    if (window.innerWidth >= 1000) {
      setClick(true);
    } else {
      setClick(false);
    }
  
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handler);
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

     
  return (
    <div ref={menuRef}>
 
      
      <Navbar
  className='navbar-top fixed-top'
//   expand="lg"
  color="default"
  style={{ fontFamily: "Museo Sans Rounded, sans-serif",maxWidth: "1400px", width: "100%" }}
>
          <Nav navbar style={{ width: "100%"}}>
            
          <div className="sticky-nav" style={{backgroundColor: "transparent"}}>
  <NavItem className="d-flex align-items-center justify-content-center">
    <i
      className={click ? "fas fa-times d-flex align-items-left justify-content-left" : "fas fa-bars d-flex align-items-left justify-content-left"}
      onClick={handleClick}
      style={{ fontSize: "30px",position: "absolute", left: "15px", cursor: "pointer" }}
    />
    <NavbarBrand
      id="navbar-brand"
      href="/"
      style={{
        fontFamily: "Museo Sans Rounded, sans-serif",
        fontWeight: "bold",
        fontSize: "80%"
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
</div>

            {click && (
              <Container className="" style={{minHeight: "1500px",height:"100%",maxWidth: "100%",width: "100%"}}>
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
        // onMouseEnter={() => toggleDropdown("products")}
        //     onMouseLeave={() => toggleDropdown("products")}
            onClick={() => toggleDropdown("products")} // Toggle dropdown on click

      >
      
      <p className={dropdowns.find((d) => d.id === "products").isOpen ? "blueText" : ""}>Products</p>
     

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
              <p className={dropdowns.find((d) => d.id === "solutions").isOpen ? "blueText" : ""}>Solutions</p>
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
    <p style={{fontSize: "100%"}}>Services</p>
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
              <p className={dropdowns.find((d) => d.id === "learn").isOpen ? "blueText" : ""}>Learn</p>
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
              <p className={dropdowns.find((d) => d.id === "customers").isOpen ? "blueText" : ""}>Customers</p>
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
              <p className={dropdowns.find((d) => d.id === "events").isOpen ? "blueText" : ""}>Events</p>
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
                  <p  className={dropdowns.find((d) => d.id === "company").isOpen ? "blueText" : ""}>Company</p> {/* Link to "/company" */}
            </DropdownToggle>
            {dropdowns.find((d) => d.id === "company").isOpen && (
        <div>  {/* Dropdown items */}
  <NavItem className={whiteTextColorClass}>
    
    <Link to="/company">About Eightfold</Link>

  </NavItem>
  <NavItem className={whiteTextColorClass}>
          <Link to="/company/leadership">Leadership & Advisory Board</Link>

    
  </NavItem>
  <NavItem className={whiteTextColorClass}>
      <Link to="/ethics">Ethics council</Link>
  </NavItem>
  <NavItem className={whiteTextColorClass}>
  
          <Link to="/careers">Careers</Link>

    
  </NavItem>
  <NavItem className={whiteTextColorClass}>
  
              <Link to="/partners">Partners</Link>

    
  </NavItem>
  <NavItem className={whiteTextColorClass}>
  
                  <Link to="/press">Press</Link>

    
  </NavItem>
  <NavItem className={whiteTextColorClass}>
      <Link to="/contact"> Contact Us</Link>
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
        width: "25%",
        whiteSpace: "nowrap",
      }}
      to=""
      tag={Link}
    >
      Login
    </Button>
  </NavItem>
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




// .custom-dropdown-menu {
//   position: absolute;
//   // top: 1000px;
//   // right: 20px;
//   padding: 10px 20px;
//   max-width: 800%;
//   max-height: 500%;

// }


// .custom-dropdown-menu::before{
//   content: '';
//   position: absolute;
//   top: -5px;
//   right: 20px;
//   height: 0.1%;
//   width: 0.1%;
//   color: rgb(29, 33, 43);
//   // transform: rotate(45deg);
// }

// .custom-dropdown-menu.active{
//   opacity: 1;
//   visibility: visible;
//   transform: translateY(0);
//   transition: 1000ms ease;
// }

// .custom-dropdown-menu.inactive{
//   opacity: 0;
//   visibility: hidden;
//   transform: translateY(-20px);
//   transition: 1000ms ease;
// }

// .custom-dropdown-menu a {
//   text-decoration: none;
//   border-bottom: 2px solid transparent;
//   transition: border-bottom 0.3s ease-in-out;
// }

// /* Hover effect for dropdown menu items */
// .custom-dropdown-menu a:hover {
//   background-image: linear-gradient(to right, #1d212b, #1d212b);
//   background-size: 100% 100%;
//   background-position: 0 90%;
//   background-clip: text;
//   border-bottom: 2.5px solid transparent;
//   border-image: linear-gradient(0.25turn, rgba(50, 94, 168), rgba(24, 9, 230), rgba(169, 11, 227));
//   border-image-slice: 1;
//   width: 100%;
// }

 
//   .close-button{
//      color:white
//   }
//   .close-button:hover {
//     color: blue;

//   }
  
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
    color: #b8ccd4;
    font-size: 80%;
    padding-left: 3%;
    padding-top: 1%;
    padding-bottom: 1%;

  }
  .blueText {
    color: #008FBF; /* Change this to your desired blue color */
  }
  
  ` 
  }
</style>
</Nav>
</Navbar>

    </div>
);
}

export default IndexNavbar;
