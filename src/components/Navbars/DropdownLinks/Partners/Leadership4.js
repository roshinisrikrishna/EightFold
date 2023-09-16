import React, { useState } from "react";
import { Container, Row, Col, Card } from "reactstrap";
import img1 from "../../../../assets/img/img1.png";
import img2 from "../../../../assets/img/img2.png";
import img3 from "../../../../assets/img/img3.png";
import img4 from "../../../../assets/img/img4.png";
import img5 from "../../../../assets/img/img5.png";
import img6 from "../../../../assets/img/img6.jpg";
import img7 from "../../../../assets/img/img7.jpg";
import img8 from "../../../../assets/img/img8.jpg";
import img9 from "../../../../assets/img/img9.png";
import img10 from "../../../../assets/img/img10.png";
import img11 from "../../../../assets/img/img11.png";
import img12 from "../../../../assets/img/img12.jpg";
// import img13 from "../../../../assets/img/img1";
// import img14 from "../../../../assets/img/img";
// import img15 from "../../../../assets/img/img";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";




import {motion} from "framer-motion";




const cardData = [
  {
    id: 1,
    category: "Learning and Development Partner",
    geography: "Global",
    imgSrc: img1,
    content: "Udemy helps organizations of all kinds prepare for the ever-evolving future of work. Our curated collection of top-rated business and",
  },
  {
    id: 2,
    category: "Technology Partner",
    geography: "Global",
    imgSrc: img2,
    content: "Based in New York City with offices in San Francisco, Denver and Dublin, Greenhouse Software is the leader in hiring software.",
  },
  {
    id: 3,
    category: "Technology Partner",
    geography: "Global",
    imgSrc: img3,
    content: "Proactive Talent is the leading power partner to your recruiting engine. We're a coalition of recruiting and talent brand",
  },
  {
    id: 4,
    category: "Technology Partner",
    geography: "Global",
    imgSrc: img4,
    content: "SAP Fieldglass was founded in 1999 to help transform how companies find, engage, and manage external talent and",
  },
  {
    id: 5,
    category: "System Integrator Partner",
    geography: "Global",
    imgSrc: img5,
    content: "At nformal, we want to light your way through your Eightfold transformation. We adapt to your reality, work style and context. We",
  },
  {
    id: 6,
    category: "System Integrator Partner",
    geography: "Global",
    imgSrc: img6,
    content: "Transform your HR business with AI-powered technology. Blue Crab Consulting offers specialized implementation and change",
  },
  {
    id: 7,
    category: "System Integrator Partner",
    geography: "Global",
    imgSrc: img7,
    content: "AMS is a global total workforce solutions firm founded in 1996. We enable organizations to thrive in an age of constant change by",
  },
  {
    id: 8,
    category: "Independent Software Vendor Partner",
    geography: "Global",
    imgSrc: img8,
    content: "HackerRank is a technology hiring platform that is the standard for assessing developer skills for over 2,500+ companies around",
  },
  {
    id: 9,
    category: "Independent Software Vendor Partner",
    geography: "Global",
    imgSrc: img9,
    content: "ClearChecks is a trusted partner for large corporations, small businesses, and startups. Anywhere from 1 or 100,000",
  },
  {
    id: 10,
    category: "System Integrator Partner",
    geography: "Global",
    imgSrc: img10,
    content: "AspireHR provides its clients with valuable HR tools that provide real-time insights into what is happening with their employees and why.",
  },
  {
    id: 11,
    category: "Independent Software Vendor Partner",
    geography: "Global",
    imgSrc: img11,
    content: "In 2012, co-founders David Blake and Eric Sharp started Degreed with the mission to 'Jailbreak the Degree.' Inspired by JFK's Rice",
  },
  {
    id: 12,
    category: "Category A",
    title: "Card 12",
    geography: "Global",
    imgSrc: img12,
    content: "Founded in 1923, Bayard combines almost a century of recruitment marketing experience with the creative capabilities of a leading B2C",
  },
  // Add more card data here
];


const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};

function CardComponent({ card }) {
  return (

  <motion.Card
  style={{
border: "1px solid #d6d6d6",
        borderRadius: "10px",
        height: "98%",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        // background: "rgb(252, 252, 252)",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
margin: "0 0",
  }}
  variants={fadeInAnimationVariants}
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
  custom={card.id}
>
  <img
    src={card.imgSrc}
    alt="Logo"
    style={{
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          width: "100%",
          height: "40%",
        }}
  />


      <p
        style={{
          color: "#484B58",
          paddingLeft: "5%",
          paddingTop: "8%",
          paddingRight: "2%",
          fontWeight: 400,
          fontSize: "80%",
          maxWidth: "100%",
        }}
      >
        {card.content}
      </p>
      <p style={{ paddingLeft: "5%", paddingRight: "2%", fontSize: "90%", fontWeight: 500, color: "#2285ba" }}>
        Expand   <FontAwesomeIcon
                          icon={faAngleDown}
                          style={{ color: "#008FBF",fontSize: "80%", marginLeft: "5px",}}
                        />
      </p>
  </motion.Card>
  );
}

function Typography() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedGeography, setSelectedGeography] = useState("All");
  const [searchText, setSearchText] = useState(""); // State for search text

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleGeographyChange = (event) => {
    setSelectedGeography(event.target.value);
  };

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value); // Update search text state
  };

  const clearFilters = () => {
    setSelectedCategory("All");
    setSelectedGeography("All");
    setSearchText(""); // Clear the search text
  };

  const filteredCards = cardData.filter((card) => {
    const isCategoryMatch = selectedCategory === "All" || card.category === selectedCategory;
    const isGeographyMatch = selectedGeography === "All" || card.geography === selectedGeography;
    
    // Filter based on search text
    const isSearchMatch = card.content.toLowerCase().includes(searchText.toLowerCase());

    return isCategoryMatch && isGeographyMatch && isSearchMatch;
  });

  return (
    <>
      <Container style={{
        maxWidth: "100%",
        marginTop: "5%",
        justifyContent: "flex-start",
        alignItems: "flex-start"
      }}>
   <Container style={{ maxWidth: "95%",display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            {/* Partner Type Dropdown */}
            <div style={{ flex: 1, marginRight: "16px" }}>
              <h2 style={{ fontWeight: 700, fontSize: "90%", color: "#484B58", marginBottom: "8px" }}>
                Partner Type
              </h2>
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
  style={{
    fontSize: "90%",
          color: "#484B58",
          borderRadius: "10px", // Adjust the border radius as needed
          padding: "8px", // Adjust the padding as needed
          border: "1px solid #ccc", // Add a border
          backgroundColor: "#fff", // Background color
          fontSize: "16px", // Adjust the font size as needed
          width: "100%" // Ensure it takes full width
        }}
      >
        <option value="All">All Types</option>
        <option value="Consulting Partner">Consulting Partner</option>
        <option value="Global System Integrator Partner">Global System Integrator Partner</option>
        <option value="Independent Software Vendor Partner">Independent Software Vendor Partner</option>
        <option value="Learning and Development Partner">Learning and Development Partner</option>
        <option value="System Integrator Partner">System Integrator Partner</option>
        <option value="Technology Partner">Technology Partner</option>
      </select>
    </div>

    {/* Geography Dropdown */}
    <div style={{ flex: 1, marginRight: "16px" }}>
              <h2 style={{ fontWeight: 700, fontSize: "90%", color: "#484B58", marginBottom: "8px" }}>
                Geography
              </h2>
      <select
        value={selectedGeography}
        onChange={handleGeographyChange}
        style={{
          fontSize: "90%",
          color: "#484B58",
          borderRadius: "10px",
          padding: "8px",
          border: "1px solid #ccc",
          backgroundColor: "#fff",
          fontSize: "16px",
          width: "100%"
        }}
      >
         <option value="All">All Geography</option>
        <option value="APAC">APAC</option>
        <option value="Europe">Europe</option>
        <option value="Global">Global</option>
        <option value="LATAM">LATAM</option>
        <option value="UKI">UKI</option>
      </select>
      </div>

{/* Search Box */}
<div className="mt-4" style={{ flex: 1, display: "flex", alignItems: "center" }}>
  <input
    type="text"
    placeholder="Search partners"
    value={searchText}
    onChange={handleSearchTextChange}
    style={{
      fontSize: "90%",
      color: "#484B58",
      borderRadius: "10px",
      padding: "8px",
      border: "1px solid #ccc",
      backgroundColor: "#fff",
      fontSize: "16px",
      width: "100%"
    }}
  />
</div>
</Container>
<div className="mr-5"  style={{justifyContent: "flex-end", alignItems: "flex-end", textAlign: "right"}}>
              <p
                onClick={clearFilters}
                style={{
                  fontSize: "70%",
                  color: "#008FBF",
                  fontWeight: 500,
                  textDecoration: "underline",
                  cursor: "pointer"
                }}
              >
                Clear All Filters
              </p>
            </div>


       

        <Row className="mt-5" style={{ paddingTop: "6%",paddingLeft: "4%",paddingRight: "3%", display: "flex", justifyContent: "flex-start" }}>
          {filteredCards.map((card) => (
            <Col key={card.id} xs={12} md={3} xl={3} style={{ margin: "10px 0", display: "flex" }}>
              <CardComponent card={card} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Typography;