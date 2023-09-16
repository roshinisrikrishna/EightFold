import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import img1 from "../../../../assets/img/press1.png";
import img2 from "../../../../assets/img/press2.png";
import img3 from "../../../../assets/img/press3.png";
import img4 from "../../../../assets/img/press4.png";
import img5 from "../../../../assets/img/press5.jpg";
import img6 from "../../../../assets/img/press6.png";
import img7 from "../../../../assets/img/press7.jpg";
import img8 from "../../../../assets/img/press8.png";
// import img9 from "../../../../assets/img/press9";
// import img10 from "../../../../assets/img/press10";
// import img11 from "../../../../assets/img/press11";
// import img12 from "../../../../assets/img/press12.jpg";
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

    imgSrc: img1,
    content: "The Top 7 Skills Powering the Future of Remote Work",
  },
  {
    id: 2,
    imgSrc: img2,
    content: "4 ways HR is already solving business problems problems with AI",
  },
  {
    id: 3,
    imgSrc: img3,
    content: "Where AI can and can't help in talent management",
  },
  {
    id: 4,
    imgSrc: img4,
    content: "Top resume tips to stand out in automated screening and with recruiters",
  },
  {
    id: 5,
    imgSrc: img5,
    content: "New York City Clarifies Who and What is covered Under AI Bias Law",
  },
  {
    id: 6,
    imgSrc: img2,
    content: "Meet the 2023 Top 100 HR Tech Influencers",
  },
  {
    id: 7,
    imgSrc: img6,
    content: "Ways AI is changing HR departments",
  },
  {
    id: 8,
    imgSrc: img1,
    content: "Why You Should Create a Plan to Implement Artificial Intelligence Now",
  },
  {
    id: 9,
    imgSrc: img7,
    content: "AI Innovations for HR in SAP services",
  },
  {
    id: 10,
    imgSrc: img4,
    content: "Job applicants are battling AI resume filters with a hack",
  },
  {
    id: 11,
    imgSrc: img8,
    content: "Is paying attention to educational diversity the key to solving the DEI puzzle?",
  },
  {
    id: 12,
    imgSrc: img1,
    content: "How to Future-Proof Your Business Using A.I. and Upskilling",
  },
  {
    id: 13,

    imgSrc: img1,
    content: "The Top 7 Skills Powering the Future of Remote Work",
  },
  {
    id: 14,
    imgSrc: img2,
    content: "4 ways HR is already solving business problems problems with AI",
  },
  {
    id: 15,
    imgSrc: img3,
    content: "Where AI can and can't help in talent management",
  },
  {
    id: 16,
    imgSrc: img4,
    content: "Top resume tips to stand out in automated screening and with recruiters",
  },
  {
    id: 17,
    imgSrc: img5,
    content: "New York City Clarifies Who and What is covered Under AI Bias Law",
  },
  {
    id: 18,
    imgSrc: img2,
    content: "Meet the 2023 Top 100 HR Tech Influencers",
  },
  {
    id: 19,
    imgSrc: img6,
    content: "Ways AI is changing HR departments",
  },
  {
    id: 20,
    imgSrc: img1,
    content: "Why You Should Create a Plan to Implement Artificial Intelligence Now",
  },
  {
    id: 21,
    imgSrc: img7,
    content: "AI Innovations for HR in SAP services",
  },
  {
    id: 22,
    imgSrc: img4,
    content: "Job applicants are battling AI resume filters with a hack",
  },
  {
    id: 23,
    imgSrc: img8,
    content: "Is paying attention to educational diversity the key to solving the DEI puzzle?",
  },
  {
    id: 24,
    imgSrc: img1,
    content: "How to Future-Proof Your Business Using A.I. and Upskilling",
  },
  // Add more card data here
];

const cardsPerPage = 6;


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
    <motion.div
      style={{
        border: "1px solid #d6d6d6",
        borderRadius: "10px",
        height: "75%",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
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
          paddingTop:"8%",
          borderTopRightRadius: "10px",
          width: "auto",
          height: "40%",
        }}
      />

      <p
        style={{
          color: "#484B58",
          paddingLeft: "5%",
          paddingTop: "8%",
          paddingRight: "2%",
          fontWeight: 700,
          textAlign: "center",
          fontSize: "85%",
          maxWidth: "100%",
          lineHeight: "1em"
        }}
      >
        {card.content}
      </p>
 
    </motion.div>
  );
}
function Company3() {
  const [pills, setPills] = useState("2");
  const [dropdownVisible, setDropdownVisible] = useState([false, false, false]);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(cardData.length / cardsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const displayedCards = cardData.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );


  const toggleDropdown = (index) => {
    const updatedVisibility = [...dropdownVisible];
    updatedVisibility[index] = !updatedVisibility[index];
    setDropdownVisible(updatedVisibility);
  };

  return (
    <>
      <div className="mb-5">
        <Container className="mb-5" style={{  maxWidth: "65%" }}>
          <Row>
    
            <Col md={3} xl={3} xs={12}>
            <button
  className="hover-white-button"
  style={{
     borderRadius: "60px",
    color: "#fff",
    backgroundColor: "#2285ba",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
    fontWeight: "bolder",
    fontSize: "80%", // Set font size relative to viewport width
    maxWidth: "100%", // Ensure the button takes up the full width
    padding: "5% 15%", // Set padding as a percentage of the button's width and height
    fontFamily: "Museo Sans Rounded, sans-serif",
  }}

>
News coverage
</button>
            </Col>
            <Col md={3} xl={3} xs={12}>
            <button
  className="hover-white-button"
  style={{
     borderRadius: "60px",
    color: "#fff",
    backgroundColor: "#2285ba",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
    fontWeight: "bolder",
    fontSize: "80%", // Set font size relative to viewport width
    maxWidth: "100%", // Ensure the button takes up the full width
    padding: "5% 15%", // Set padding as a percentage of the button's width and height
    fontFamily: "Museo Sans Rounded, sans-serif",
  }}

>
Press releases
</button>
            </Col>
            <Col md={3} xl={3} xs={12}>
            <button
  className="hover-white-button"
  style={{
     borderRadius: "60px",
    color: "#fff",
    backgroundColor: "#2285ba",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
    fontWeight: "bolder",
    fontSize: "80%", // Set font size relative to viewport width
    maxWidth: "100%", // Ensure the button takes up the full width
    padding: "5% 15%", // Set padding as a percentage of the button's width and height
    fontFamily: "Museo Sans Rounded, sans-serif",
  }}

>
Industry awards
</button>
            </Col>
            <Col md={3} xl={3} xs={12}>
            <button
  className="hover-white-button"
  style={{
    borderRadius: "60px",
    color: "#fff",
    backgroundColor: "#2285ba",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
    fontWeight: "bolder",
    fontSize: "80%", // Set font size relative to viewport width
    maxWidth: "100%", // Ensure the button takes up the full width
    padding: "5% 15%", // Set padding as a percentage of the button's width and height
    fontFamily: "Museo Sans Rounded, sans-serif",
  }}

>
Patents
</button>
             
            </Col>
           
          </Row>
        </Container>
       
        <Container>
          <Row
            className="mt-5"
            style={{
              paddingTop: "6%",
              paddingLeft: "4%",
              paddingRight: "3%",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            {displayedCards.map((card) => (
              <Col
                key={card.id}
                xs={12}
                md={4}
                xl={4}
                style={{ margin: "10px 0", display: "flex" }}
              >
                <CardComponent card={card} />
              </Col>
            ))}
          </Row>
        </Container>
        <Container className="mt-3">
  <Row className="justify-content-center">
    <ul className="pagination">
      <li
        className={`page-item ${
          currentPage === 1 ? "" : ""
        }`}
      >
        <button
          className="page-link paginator-button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;&lt;
        </button>
      </li>
      {Array.from({ length: totalPages }).map((_, index) => (
        <li
          key={index}
          className={`page-item ${
            index + 1 === currentPage ? "active" : ""
          }`}
        >
          <button
            className={`page-link paginator-button ${
              index + 1 === currentPage ? "blue-background" : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        </li>
      ))}
      <li
        className={`page-item ${
          currentPage === totalPages ? "" : ""
        }`}
      >
        <button
          className="page-link paginator-button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &gt;&gt;
        </button>
      </li>
    </ul>
  </Row>
</Container>

       
      </div>
      
    </>
  );
}

export default Company3;
