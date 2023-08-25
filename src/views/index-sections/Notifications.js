import React from "react";

// reactstrap components
import { Alert, Container } from "reactstrap";
import thunderImg from "../../assets/img/thunderimg.svg";
import fldrImg from "../../assets/img/fldrImg.svg";
import magnetImg from "../../assets/img/magnetImg.svg";




function Notifications() {



  return (
    <div style={{
      background: "linear-gradient(180deg, rgba(252, 250, 250, 0.2), rgba(169, 11, 227, 0.2), rgba(24, 9, 230, 0.2))",
      boxShadow: "15px 15px 30px #ffffff, -15px 15px 30px rgba(0, 0, 255, 0.4)", // White and blue-violet gradient shadow

    }}>
      
      <div
  style={{
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center"
    backgroundColor: "white",
    marginLeft: "30px",
    marginTop: "130px",
    maxWidth: "1280px", // Adjust this value to match the screen width
  }}
>
  {/* Place your card elements here */}
  <div
    style={{
      border: "1px solid #ccc",
      padding: "20px",
      borderRadius: "20px",
      textAlign: "center",
      maxWidth: "100%", // Adjust this value to control the card's width
    }}
  >
    {/* Your card content goes here */}
    <h2 style={{fontFamily: "Museo Sans Rounded, sans-serif", fontSize: "38px",fontWeight: 600, marginBottom: "60px"}} className="mt-5">
      Solutions</h2>
    <div
  style={{
    display: "flex",
    flexDirection: "row", // Arrange children horizontally
    borderBottom: "1px solid #ccc",
    borderTop: "none", // Remove the top border
    borderLeft: "none",
    borderRight: "none",
    maxWidth: "100%", // Adjust this value to control the inner card's width,
  }}
>
  {/* Left section */}
  <div style={{ flex: 1, padding: "10px", maxWidth: "700px", marginTop: "60px" }} className="mb-5 ml-5 mr-5">
  <img src={thunderImg} alt="Logo" 
  // style={{ width: "50px", height: "50px", borderRadius: "50%" }} 
  />

    <h2 style={{fontSize: "22px", fontWeight: 700 ,fontFamily: "Roboto, sans-serif"}}>Drive extraordinary results</h2>
    <p style={{ fontSize: "15px", fontWeight: 400 }}>
  From <span style={{ color: "#008FBF" }}>talent acquisition</span> to management,
  our AI platform provides you a single view of talent across your entire workforce
  to inform every talent decision.
</p>

      <p style={{ fontSize: "14px", fontWeight: "bold", color: "#008FBF" }}>Build your dream workforce</p>
  </div>

  <div style={{ borderLeft: "1px solid #ccc" }}></div>

  <div style={{ flex: 1, padding: "10px", maxWidth: "600px", marginTop: "60px" }} className="mb-5 ml-5 mr-5">
  <img src={fldrImg} alt="Logo" 
  // style={{ width: "50px", height: "50px", borderRadius: "50%" }} 
  />
    <h2 style={{ fontSize: "22px", fontWeight: 700, fontFamily: "Roboto, sans-serif" }}>
      Cultivate and discover new talent
    </h2>
    <p style={{ fontSize: "16px", fontWeight: 400 }}>
      Attract new employees and find existing talent ready for a new opportunity with Al-powered{" "}
      <span style={{ color: "#008FBF" }}>talent intelligence</span>.
    </p>
    <p style={{ fontSize: "14px", fontWeight: "bold", color: "#008FBF" }}>
      Elevate top talent in the public sector
    </p>
</div>

</div>

<div
  style={{
    display: "flex",
    flexDirection: "row", 
    border: "1px solid #ccc",
    borderBottom: "none",
    borderLeft: "none",
    borderRight: "none",
    // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "100%", 
    marginTop: "-1px", 
  }}
>
<div style={{ flex: 1,  maxWidth: "500px", marginRight: "71px", marginTop: "60px" }} className="mb-5 ml-5">
  <img src={magnetImg} alt="Logo" 
  // style={{ width: "50px", height: "50px", borderRadius: "50%" }} 
  />
    <h2 style={{fontSize: "22px", fontWeight: 700 ,fontFamily: "Roboto, sans-serif"}}>Support and further DEI goals</h2>
    <p style={{ fontSize: "16px", fontWeight: 400 }}>Increase positive business outcomes with a strong DEI strategy powered by AI.</p>
    <p style={{ fontSize: "14px", fontWeight: "bold", color: "#008FBF" }}>Create a more inclusive workforce</p>
  </div>

  <div style={{ borderLeft: "1px solid #ccc"}}></div>

  <div style={{ flex: 1, maxWidth: "500px", marginTop: "60px" }} className="mb-5 ml-5 mr-5">
  <img src={magnetImg} alt="Logo" 
  // style={{ width: "50px", height: "50px", borderRadius: "50%" }} 
  />
    <h2 style={{fontSize: "22px", fontWeight: 700 ,fontFamily: "Roboto, sans-serif"}}>Responsible and ethical Al</h2>
    <p style={{ fontSize: "16px", fontWeight: 400 }}>Our Talent Intelligence Platform 
      is committed to compliance, security, and accessibility.</p>
      <p style={{ fontSize: "14px", fontWeight: "bold", color: "#008FBF" }}>Build a trustworthy talent experience</p>
      
  </div>
</div>


  </div>
</div>


  </div>
);

    
}

export default Notifications;
