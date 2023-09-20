/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Container, Button } from "reactstrap";

function TransparentFooter() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update the screenWidth state when the window is resized
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Add event listener to the window resize event
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    // Render the footer only when the screenWidth is less than 1000px
    screenWidth < 1000 && (
      <footer className="footer fixed-bottom" style={{ background: "rgba(255,255,255,0.3)", maxWidth: "100vw" }}>
        <Container className="d-flex align-items-center justify-content-center">
          <Button
            className="nav-link btn-neutral mr-2 mt-2"
            style={{
              borderRadius: "50px",
              fontWeight: 600,
              backgroundColor: "#17eba8",
              color: "black",
              fontSize: "90%",
              whiteSpace: "nowrap",
              maxWidth: "100%",
              padding: "2% 17%", // Set padding as a percentage of the button's width and height

            }}
            to="/review-demo"
            tag={Link}
          >
            Request Demo
          </Button>
        </Container>
      </footer>
    )
  );
}

export default TransparentFooter;
