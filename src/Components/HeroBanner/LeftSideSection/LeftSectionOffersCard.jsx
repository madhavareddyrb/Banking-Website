import React, { useState } from "react";
import "./LeftSectionOffersCard.css"
export default function LeftSectionOffersCard() {
  const scrollCardData = [
    {
      title: " Credit Cart For You",
      desc: "Enjoy discounts on BookMyShow , electronics, dining and more",
      img: "https://www.icici.bank.in/content/dam/icicibank/india/managed-assets/images/revamp/cc-desktop-01.webp",
      tag: "Hot new",
    },
    {
      title: "Home Loan",
      desc: "Get a Home Loan up to 5 core * with quick processng",
      img: "https://www.icici.bank.in/content/dam/icicibank/india/managed-assets/images/revamp/cc-desktop-01.webp",
      tag: "Hot new",
    },
    {
      title: "Car Loan",
      desc: "Drive Your new car with 100% on road funding",
      img: "https://www.icici.bank.in/content/dam/icicibank/india/managed-assets/images/revamp/cc-desktop-01.webp",
      tag: "Hot new",
    },
    {
      title: " Personal Loan ",
      desc: "Get Instant distributed  ",
      img: "https://www.icici.bank.in/content/dam/icicibank/india/managed-assets/images/revamp/cc-desktop-01.webp",
      tag: "Hot new",
    },
  ];
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index < scrollCardData.length - 1) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="slider">
      <h3 className="offers_heading">Offers for you!</h3>

      <div className="slider-window">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {scrollCardData.map((item, i) => (
            <div className="card" key={i}>
              <div className="left">
                <h2>{item.title}</h2>
                <p className="w-10px">{item.desc}</p>

                <div className="actions">
                  <button className="action-buttons">APPLY</button>
                  <button className="action-buttons">DETAILS</button>
                </div>
              </div>

              <div className="right">
                <span className="tag">{item.tag}</span>
                <img src={item.img} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="arrows">
        <button className="arrows_symbol" onClick={prevSlide}>
          ←
        </button>
        <button className="arrows_symbol" onClick={nextSlide}>
          →
        </button>
      </div>
    </div>
  );
};