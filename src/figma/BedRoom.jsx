import { useState } from "react";

import "./BedRoom.css";

function BedRoom() {
  const [current, setCurrent] = useState(0);

  const images = [
    "https://furniro.archisacademy.com/assets/photo3-0bb29871.jpg",
    "https://furniro.archisacademy.com/assets/photo2-60dfb484.jpg",
    "https://furniro.archisacademy.com/assets/photo6-4e1fc5db.jpg",
    "https://furniro.archisacademy.com/assets/photo7-24e62ccb.jpg",
    "https://furniro.archisacademy.com/assets/barstool2-67cc0eaf.jpg",


  ];

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="BedRoom">
      <div className="BedRoom1">
        <h1>50+ Beautiful</h1>
        <h2>rooms inspiration</h2>
        <p>Our designer already made a lot of beautiful</p>


          <p>prototype of rooms that inspire you</p>
        <button>Explore More</button>
      </div>


      <div className="BedRoom2">
        <div className="carousel-container">
          <button className="arrow left" onClick={prevSlide}>


            &#10094;
          </button>

          <div className="carousel-track">


            {images.map((img, index) => {
              let className = "slide";
              if (index === current) className += " active";
              else if (index === (current - 1 + images.length) % images.length)
                className += " prev";
              else if (index === (current + 1) % images.length)
                className += " next";


              return (
                <div className={className} key={index}>
                  <img src={img} alt={`Slide ${index + 1}`} />
                </div>
              );
            })}
          </div>
          <button className="arrow right" onClick={nextSlide}>
            &#10095;
          </button>


          <div className="dots">


            {images.map((_, index) =>   (
              <span

                    key={index}
        className={`dot ${current === index ? "active" : ""}`}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BedRoom;
