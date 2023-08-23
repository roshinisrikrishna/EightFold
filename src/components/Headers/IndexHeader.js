import React, { useEffect, useRef } from "react";
import { Container } from "reactstrap";

function IndexHeader() {
  let pageHeader = useRef(null);

  useEffect(() => {
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

    // Animation code
    pageHeader.current.style.opacity = 0;
    pageHeader.current.style.transform = "translateY(100px)";
    setTimeout(() => {
      pageHeader.current.style.transition = "opacity 0.5s, transform 0.5s";
      pageHeader.current.style.opacity = 1;
      pageHeader.current.style.transform = "translateY(0)";
    }, 100);
  }, []);

  return (
    <>
      <div className="page-header clear-filter" filter-color="black">
        <div
          className="page-header-image"
          style={{
            background:
              "linear-gradient(to right , rgba(0, 0, 0), rgba(0, 0, 0, 0.9) 50%, rgba(6, 18, 70, 0.88))",
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

        <Container
          style={{ width: "2000px", height: "200px", position: "absolute", top: "350px", left: "70px" }}
        >
          <div className="content-center brand">
            <h1 style={{ fontWeight: 700 }}>Everything talent,</h1>
            <h1
              style={{
                fontWeight: 700,
                background:
                  "-webkit-linear-gradient(45deg, #FFFFFF, #008BE8 85%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              powered by AI
            </h1>

            <p style={{ fontSize: "22px" }}>
              Our AI platform for all talent brings to light everything you need
              to hire and develop people to their highest potential
            </p>
            <button
              style={{
                backgroundColor: "#2f77ba",
                borderRadius: "60px",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                marginTop: "10px",
                fontWeight: "bold",
                fontSize: "17px",
                width: "230px",
                padding: "12px",
              }}
            >
              Ready for greatness?
            </button>
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
