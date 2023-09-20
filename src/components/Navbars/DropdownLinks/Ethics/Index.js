import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Home from "components/Navbars/DropdownLinks/Ethics/Home";
import Ethics2 from "components/Navbars/DropdownLinks/Ethics/Ethics2";

import DashboardLast from "views/index-sections/Dashboard/DashboardLast";
import TransparentFooter from "components/Footers/TransparentFooter";


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
        <TransparentFooter />

      </div>
    </>
  );
}

export default Index;
