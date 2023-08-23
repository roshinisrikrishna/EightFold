import React, { useEffect, useState, useRef } from "react";
import { Container } from "reactstrap";

function IndexHeader() {
  const pageHeader = useRef(null); // Use useRef to create the pageHeader reference
  const [imagesVisible, setImagesVisible] = useState(false); // State to track image visibility

  useEffect(() => {
    const updateScroll = () => {
      let windowScrollTop = window.pageYOffset / 3;
      if (pageHeader.current) {
        pageHeader.current.style.transform = `translate3d(0, ${windowScrollTop}px, 0)`;
      }
    };

    if (window.innerWidth > 991) {
      window.addEventListener("scroll", updateScroll);

      // Delay the appearance of the images by 5 seconds
      const timeout = setTimeout(() => {
        setImagesVisible(true);
      }, 5000);

      return function cleanup() {
        clearTimeout(timeout); // Clear the timeout when the component unmounts
        window.removeEventListener("scroll", updateScroll);
      };
    }
  }, []);

  return (
    <>
      <div className="page-header clear-filter" 
      filter-color="black" ref={pageHeader}
      style={{ fontFamily: "Museo Sans Rounded, sans-serif" }}
      >
        <div
          className="page-header-image slide-in-header-image"
          style={{
             fontFamily: "Museo Sans Rounded, sans-serif",
            background: "linear-gradient(to right , rgba(0, 0, 0), rgba(0, 0, 0, 0.9) 50%, rgba(6, 18, 70, 0.88))",
          }}
        >
          {imagesVisible && ( // Render the images if imagesVisible is true
            <>
              <img
                alt="..."
                className="n-logo slide-in-image-left"
                src={require("assets/img/bg-blue-dots.png")}
                style={{ width: "1000px", height: "200px", position: "absolute", top: 0, left: "-1000px" }}
              />
              <img
                alt="..."
                className="n-logo slide-in-image"
                src={require("assets/img/bg-blue-dots.png")}
                style={{ width: "600px", height: "200px", position: "absolute", bottom: 0, right: "-600px" }}
              />
            </>
          )}
        </div>

        <Container
          style={{ width: "2000px", height: "200px", position: "absolute", bottom: "-100%", left: "70px" }}
          className="animate-slide-up" // Apply animation to the content container
        >
          <div className="content-center brand">
            <h1 style={{ fontWeight: 800, fontFamily: "Museo Sans Rounded, sans-serif" }}>
              Everything talent,</h1>
            <h1
              style={{
                fontWeight: 1500,
                background: "-webkit-linear-gradient(45deg, #FFFFFF, #008BE8 85%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "Museo Sans Rounded, sans-serif"
              }}
            >
              powered by AI
            </h1>

            <p style={{ fontSize: "22px", fontFamily: "Museo Sans Rounded, sans-serif" }}>
              Our AI platform for all talent brings to light everything you need to hire and develop people to their highest potential
            </p>
            <button
  className="hover-white-button"
   style={{
    borderRadius: "60px",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
    fontWeight: "bold",
    fontSize: "17px",
    width: "230px",
    padding: "12px",
    fontFamily: "Museo Sans Rounded, sans-serif"
  }}
>
  Ready for greatness?
</button>

            </div>
        </Container>
      
        
      </div>
      <style>
        {`
        /* Add hover style for the button */
        .hover-white-button {
          background-color: #2f77ba;
          color: #fff; /* Change the text color back to the original color */
          transition: background-color 0.3s, color 0.3s; /* Add a smooth transition effect */
        }

        .hover-white-button:hover {
          background-color: #28607E;
          color: #fff; /* Change the text color back to the original color */
          transition: background-color 0.3s, color 0.3s; /* Add a smooth transition effect */
        }
        
         .animate-slide-up {
          /* Animation for the content container */
          position: relative;
          bottom: 0;
          animation: slideUp 1s ease-out forwards;
        }
           @keyframes slideUp {
            to {
              bottom: 250px; /* Adjust the bottom position based on visibility */
            }
          }

          @keyframes slideInRightToLeft {
            from {
              right: -600px; /* Start off-screen on the right */
            }
            to {
              right: 0; /* Slide in to the normal position */
            }
          }
  
          .slide-in-image {
            animation: slideInRightToLeft 1s ease-out forwards;
          }
          @keyframes slideInLeftToRight {
            from {
              left: -1000px; /* Start off-screen on the left */
            }
            to {
              left: 0; /* Slide in to the normal position */
            }
          }
  
          .slide-in-image-left {
            animation: slideInLeftToRight 1s ease-out forwards;
          }

        `}
      </style>
    </>
  );
}

export default IndexHeader; 