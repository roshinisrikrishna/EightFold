import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import SearchModal from "components/Navbars/SearchModal.js";
import CompanyHome from "views/index-sections/Company/CompanyHome";
import TransparentFooter from "components/Footers/TransparentFooter";

// sections for this page
import Company2 from "views/index-sections/Company/Company2";
import Company3 from "views/index-sections/Company/Company3";
import Company4 from "views/index-sections/Company/Company4";
import Company5 from "views/index-sections/Company/Company5";
import Company6 from "views/index-sections/Company/Company6";

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
        <CompanyHome />
        <div className="main">
          <Company2 />
          <Company3 />
          <Company4 />
          <Company5 />
          <Company6 />

      
         
        </div>
        <DashboardLast />
<TransparentFooter />
      </div>
    </>
  );
}

export default Index;
