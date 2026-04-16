import "./HeroBanner.css";
import "../../assets/voice.png";

import LeftSectionOffersCard from "./LeftSideSection/LeftSectionOffersCard";
import RightSideSlider from "./RightSideSlider/RightSideSlider";

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
      name: "Get Support 1800180",
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

  return (
    <>
      <div className="full-hero-banner">
        <div className="left-side-hero-section">
          <h1 className="left-div-heading">Truth, Trust, Transparency</h1>

          <div className="search_button">
            🔍
            <input className="input_search_bar" placeholder="Search..." />
            |🔉
          </div>
          {buttonsMap()}
          {/* <div
            className="inside-buttons bg-white p-6 rounded-xl shadow text-center"
          >
            <img src="https://www.icici.bank.in/content/dam/icicibank-revamp/images/icons/phone-fill.png" alt="img" />
            <p className="mt-2">get Support 18001800</p>
          </div> */}

          {<LeftSectionOffersCard />}
        </div>

        {<RightSideSlider />}
      </div>
    </>
  );
}
