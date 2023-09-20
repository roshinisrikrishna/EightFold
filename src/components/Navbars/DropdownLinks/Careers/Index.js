import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Home from "components/Navbars/DropdownLinks/Careers/Home";
import Careers2 from "components/Navbars/DropdownLinks/Careers/Careers2";
import Careers3 from "components/Navbars/DropdownLinks/Careers/Careers3";
import Careers4 from "components/Navbars/DropdownLinks/Careers/Careers4";
import Careers5 from "components/Navbars/DropdownLinks/Careers/Careers5";
import Careers6 from "components/Navbars/DropdownLinks/Careers/Careers6";

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

      <div className="wrapper">
        <Home />
        <div className="main">
        <Careers2 />
        
        <Careers4 />

        <Careers5 />
        <Careers3 />
        <Careers6 />






      
         
        </div>
        <DashboardLast />
        <TransparentFooter />

      </div>
    </>
  );
}

export default Index;
