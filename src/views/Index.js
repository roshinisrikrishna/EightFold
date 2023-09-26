import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import SearchModal from "components/Navbars/SearchModal.js";
import DashboardHome from "components/Headers/DashboardHome.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";

// sections for this page
import Dashboard2 from "./index-sections/Dashboard/Dashboard2.js";
import Dashboard3 from "./index-sections/Dashboard/Dashboard3.js";
import Dashboard4 from "./index-sections/Dashboard/Dashboard4.js";
import Dashboard5 from "./index-sections/Dashboard/Dashboard5.js";
import Dashboard6 from "./index-sections/Dashboard/Dashboard6.js";
import Dashboard7 from "./index-sections/Dashboard/Dashboard7.js";
import Dashboard8 from "./index-sections/Dashboard/Dashboard8.js";
import Dashboard9 from "./index-sections/Dashboard/Dashboard9.js";
import DashboardLast from "./index-sections/Dashboard/DashboardLast.js";
import Waves from "components/Navbars/Waves.js";
import TopWaves from "components/Navbars/TopWaves.js";
import Wave from "components/Navbars/Wave.js";

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

              {/* <Waves /> */}

      <IndexNavbar />
      <TopWaves/>

      {/* <SearchModal isOpen={searchModalOpen} toggleSearchModal={toggleSearchModal} /> Display the SearchModal */}

      <div className="wrapper">
        <DashboardHome />
        {/* <Waves /> */}
        <div className="main">
          {/* <Images /> */}

          <Dashboard2 />

          <Dashboard3 />
          {/* <Waves /> */}


          <Dashboard4 />
          <Dashboard5 />
          <Dashboard6 />
          <Dashboard7 />
          <Dashboard8 />
          <Dashboard9 />
         
        </div>
        <DashboardLast />
        <TransparentFooter />
      </div>
    </>
  );
}

export default Index;