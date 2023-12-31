import React from "react";


import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Home from "components/Navbars/DropdownLinks/Contact/Home";
import Contact2 from "components/Navbars/DropdownLinks/Contact/Contact2";
import Contact3 from "components/Navbars/DropdownLinks/Contact/Contact3";
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
        <Contact2 />
        <Contact3 />
        




      
         
        </div>
        <DashboardLast />
        <TransparentFooter />

      </div>
    </>
  );
}

export default Index;
