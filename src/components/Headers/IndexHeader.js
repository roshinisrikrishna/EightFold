import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="black">
        
      <div
            className="page-header-image"
            style={{
              background: "rgba(0, 0, 0, 0.6)", // Semi-transparent black background
              background: "linear-gradient(to right , rgba(0, 0, 0), rgba(0, 0, 0, 0.9) 50%, rgba(6, 18, 70, 0.88))", // Gradient with increased transparency
            }}
            ref={pageHeader}
          >
                <img
      alt="..."
      className="n-logo"
      src={require("assets/img/bg-blue-dots.png")}
      style={{ width: "1000px", height: "200px", position: "absolute", top: 0, left: 0 }}
    />
          </div>

        <Container>
          <div className="content-center brand">
          
            <h1 style={{ fontWeight: 700 }}>Everything talent,</h1>
            <h1 style={{
              fontWeight: 700,
              background: "-webkit-linear-gradient(45deg, #FFFFFF, #008BE8 85%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              powered by AI
            </h1>

            <p style={{fontSize: "22px"}}>Our AI platform for all talent brings to light everything you need 
            to hire and develop people to their highest potential</p>
          </div>
         </Container>
         <img
      alt="..."
      className="n-logo"
      src={require("assets/img/bg-blue-dots.png")}
      style={{ width: "800px", height: "200px", position: "absolute", bottom: 0, right: 0 }}
    />
       
        
      </div>
    </>
  );
}

export default IndexHeader;