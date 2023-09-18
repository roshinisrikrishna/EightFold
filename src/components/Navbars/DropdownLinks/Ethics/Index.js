import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import SearchModal from "components/Navbars/SearchModal.js";
import Home from "components/Navbars/DropdownLinks/Ethics/Home";
import Ethics2 from "components/Navbars/DropdownLinks/Ethics/Ethics2";
import Ethics3 from "components/Navbars/DropdownLinks/Ethics/Ethics3";
import Ethics4 from "components/Navbars/DropdownLinks/Ethics/Ethics4";
import Ethics5 from "components/Navbars/DropdownLinks/Ethics/Ethics5";



import DashboardLast from "views/index-sections/Dashboard/DashboardLast";


function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      {/* <SearchModal isOpen={searchModalOpen} toggleSearchModal={toggleSearchModal} /> Display the SearchModal */}

      <div className="wrapper">
        <Home />
        <div className="main">
        <Ethics2 />
        




      
         
        </div>
        <DashboardLast />

      </div>
    </>
  );
}

export default Index;
