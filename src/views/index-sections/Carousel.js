import React, { useState, useRef, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";
import Swiper from "swiper";

const items = [
  {
    src: require("assets/img/Activision.webp"),
    altText: "img1",
    caption: "img1"
  },
  {
    src: require("assets/img/BNY-Mellon.webp"),
    altText: "img2",
    caption: "img2"
  },
  {
    src: require("assets/img/Bayer_White.webp"),
    altText: "img3",
    caption: "img3"
  }
  ,
  {
    src: require("assets/img/Chevron.webp"),
    altText: "img4",
    caption: "img4"
  },
  {
    src: require("assets/img/logo_dexcom.webp"),
    altText: "img5",
    caption: "img5"
  }
  ,
  {
    src: require("assets/img/logo_noom.webp"),
    altText: "img6",
    caption: "img6"
  }
  ,
  {
    src: require("assets/img/logo_nutanix.webp"),
    altText: "img7",
    caption: "img7"
  }
  ,
  {
    src: require("assets/img/Defense.webp"),
    altText: "img8",
    caption: "img8"
  }
  ,
  {
    src: require("assets/img/OneTen.webp"),
    altText: "img9",
    caption: "img9"
  }
  ,
  {
    src: require("assets/img/Vodaphone.webp"),
    altText: "img10",
    caption: "img10"
  }

];

function CarouselSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const swiperRef = useRef(null);

  const onExiting = () => {
    setAnimating(true);
  };

  const onExited = () => {
    setAnimating(false);
  };

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    swiperRef.current = new Swiper(".swiper-container", {
      loop: true,
      initialSlide: 1,
      centeredSlides: true,
      autoplay: {
        delay: 1,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
        reverseDirection: false,
      },
      speed: 5000,
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      grabCursor: true,
      slidesPerView: "auto",
      breakpoints: {
        1200: {
          spaceBetween: 160,
        },
        992: {
          spaceBetween: 40,
        },
      },
      spaceBetween: 30,
    });
  }, []);

  return (
    <>
      <div className="section" id="carousel">
        <Container
  style={{
    display: "flex",
    flexDirection: "column", // Display items in a column
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "30px",
    marginTop: "130px",
    marginBottom: "130px",
    maxWidth: "1280px", // Adjust this value to match the screen width
  }}
>
<h2 style={{ fontSize: "32px", textAlign: "center", fontWeight: 600, fontFamily: "Museo Sans Rounded, sans-serif" }}>
            Companies trust Eightfold with their talent transformation
          </h2>
        
       
        </Container>
      </div>
    </>
  );
}

export default CarouselSection;