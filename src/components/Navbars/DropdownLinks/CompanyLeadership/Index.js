import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Home from "components/Navbars/DropdownLinks/CompanyLeadership/Home";
import Leadership2 from "components/Navbars/DropdownLinks/CompanyLeadership/Leadership2";
import Leadership3 from "components/Navbars/DropdownLinks/CompanyLeadership/Leadership3";
import Leadership4 from "components/Navbars/DropdownLinks/CompanyLeadership/Leadership4";
import Leadership5 from "components/Navbars/DropdownLinks/CompanyLeadership/Leadership5";
import TransparentFooter from "components/Footers/TransparentFooter";



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
        <Leadership2 />
        <Leadership3 />
        <Leadership4 />
        <Leadership5 />




      
         
        </div>
        <DashboardLast />
        <TransparentFooter />

      </div>
    </>
  );
}

export default Index;
