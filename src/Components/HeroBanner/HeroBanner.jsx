import "./HeroBanner.css";
import "../../assets/voice.png";
// import { Carousel } from "@material-tailwind/react";

import { useState, useEffect } from "react";

export default function HeroBanner() {
  const buttons = [
    {
      name: "Accounts",
      logo: "https://www.icici.bank.in/content/dam/icicibank-revamp/images/icons/accounts.svg",
    },
    {
      name: "Cards",
      logo: "https://www.icici.bank.in/content/dam/icicibank-revamp/images/icons/cards.svg",
    },
    {
      name: "Loans",
      logo: "https://www.icici.bank.in/content/dam/icicibank-revamp/images/icons/loan.svg",
    },
    {
      name: "Deposits",
      logo: "https://www.icici.bank.in/content/dam/icicibank-revamp/images/icons/deposit.svg",
    },
    {
      name: "Investments",
      logo: "https://www.icici.bank.in/content/dam/icicibank-revamp/images/icons/investment.svg",
    },
    {
      name: "Get Support call 1800180",
      logo: "https://www.icici.bank.in/content/dam/icicibank-revamp/images/icons/phone-fill.png",
    },
  ];
  function buttonsMap() {
    return (
      <>
        <div className=" grid-buttons">
          {buttons.map((item, index) => (
            <>
            <div
              key={index}
              className="inside-buttons bg-white p-6 rounded-xl shadow text-center"
              >
              <img src={item.logo} alt="" />
              <p className="mt-2">{item.name}</p>
            </div>

            
            
              </>
          ))}
        </div>
      </>
    );
  }

  const slides = [
    {
      title: "True wealth begins at home",
      subtitle: "Get your Home Loan sanctioned, with minimal documentation",
      button: "Apply Now",
      image:
        "https://www.icici.bank.in/content/dam/icicibank/india/managed-assets/images/revamp/hl_nonpa_desktop_6.webp",
    },
    {
      title: "Open 3 in 1",
      subtitle: "Enjoy discounts on dining, travel & more",
      button: "Explore Now",
      image:
        "https://www.icici.bank.in/content/dam/icicibank/india/managed-assets/images/revamp/open-3-in-1-account-hp-d.webp",
    },
    {
      title: "The Card You Need is Here",
      subtitle: "Enjoy discounts on dining, travel & more",
      button: "Explore Now",
      image:
        "https://www.icici.bank.in/content/dam/icicibank/india/managed-assets/images/revamp/cc-d.webp",
    },
    {
      title: "MILAP",
      subtitle: "Enjoy discounts on dining, travel & more",
      button: "Explore Now",
      image:
        "https://www.icici.bank.in/content/dam/icicibank/india/managed-assets/images/revamp/grievance-resolution-day-hp-d.webp",
    },
    {
      title: "Credit cards made easy",
      subtitle: "Enjoy discounts on dining, travel & more",
      button: "Explore Now",
      image:
        "https://www.icici.bank.in/content/dam/icicibank/india/managed-assets/images/revamp/cut-4-age-25-40-needs-liquidity-d.webp",
    },
    {
      title: "True Wealth Begins at Home",
      subtitle: "Enjoy discounts on dining, travel & more",
      button: "Explore Now",
      image: "https://www.icici.bank.in/content/dam/icicibank/india/managed-assets/images/revamp/hl_nonpa_desktop_6.webp",
    },
  ];
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((current + 1) % slides.length);
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);
  return (
    <>
      <div className="full-hero-banner">
        <div className="left-side-hero-section">
          <h1 className="left-div-heading">Truth, Trust, Transparency</h1>

          {/* Search */}
          <div className="">
            <input className="" placeholder="Search..." />
            🔍
          </div>
          <div className="">{buttonsMap()}</div>
        </div>

          <div className="relative w-full h-[500px] overflow-hidden bg-orange-500 right-side-section">
            {/* Slides */}
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
              >
                {/* Background Image */}
                <img src={slide.image} className="w-full h-full object-cover" />

                {/* Orange Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r  opacity-90"></div>

                {/* Content */}
                <div className="absolute left-5 top-2/3 -translate-y-1/2 text-white max-w-lg">
                  <h1 className="text-4xl font-semibold leading-tight">
                    {slide.title}
                  </h1>

                  <p className="mt-4 text-lg opacity-90">{slide.subtitle}</p>

                  <button className="mt-6 bg-white text-gray-800 px-6 py-3 rounded-lg shadow">
                    {slide.button}
                  </button>
                </div>
              </div>
            ))}

            {/* Arrows */}
            <button
              onClick={prev}
              className="absolute right-20 bottom-10 bg-white/30 hover:bg-white/60 p-3 rounded-full"
            >
              ←
            </button>

            <button
              onClick={next}
              className="absolute right-10 bottom-10 bg-white/30 hover:bg-white/60 p-3 rounded-full"
            >
              →
            </button>
          </div>
        </div>
    </>
  );
}
