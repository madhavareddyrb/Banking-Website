import { useState, useEffect } from "react";
import "./RightSideSlider.css";
export default function RightSideSlider() {
  const slides = [
    {
      title: "Buying a Home Just Got Easier",
      subtitle: "Avail easy online  sancion with minimal documentation",
      button: "Apply Now",
      image:
        "https://www.icici.bank.in/content/dam/icicibank/india/managed-assets/images/homepage/generic-hl-hp-banner.webp",
    },

    {
      title: "Special Offer on Personal Loan",
      subtitle: "Enjoy discounts on dining, travel & more",
      button: "Avail Now",
      image:
        "https://www.icici.bank.in/content/dam/icicibank/india/managed-assets/images/revamp/offer-personal-loan-banner-d1.webp",
    },
    {
      title: "MILAP - Grievnece Redressa; Day ",
      subtitle: "Share feedback and slove grievence, every 3rd friday* ",
      button: "Locate Us",
      image:
        "https://www.icici.bank.in/content/dam/icicibank/india/managed-assets/images/revamp/grievance-resolution-day-hp-d.webp",
    },
    {
      title: "Savings, Demart and  Trading made easy",
      subtitle: "simple finances, start trading today",
      button: "Explore Now",
      image:
        "https://www.icici.bank.in/content/dam/icicibank/india/managed-assets/images/revamp/open-3-in-1-account-hp-d.webp ",
    },
    {
      title: "True Wealth Begins at Home",
      subtitle: "Enjoy discounts on dining, travel & more",
      button: "Explore Now",
      image:
        "https://www.icici.bank.in/content/dam/icicibank/india/managed-assets/images/revamp/hl_nonpa_desktop_6.webp",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);

  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  return (
    <>
      <div className="relative w-full h-[500px] overflow-hidden bg-orange-500 right-side-section">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={slide.image} className="object-cover" />

            <div className="absolute left-3 top-2/3 -translate-y-1/2 text-white max-w-lg  p-5 br-4">
              <h3 className="text-3xl font-semibold w-50px  slide_title">
                {slide.title}
              </h3>

              <p className="slide_subtitle">{slide.subtitle}</p>

              <button className="action_button_slider">{slide.button}</button>
            </div>
          </div>
        ))}

        <button
          onClick={prev}
          className="absolute right-20 bottom-10 prev_symbol"
        >
          ←
        </button>

        <button onClick={next} className="absolute right-10 bottom-13">
          →
        </button>
      </div>
    </>
  );
}
