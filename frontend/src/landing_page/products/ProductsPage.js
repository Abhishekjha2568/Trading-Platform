import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function PricingPage() {
  return (
    <>
      <Hero />

      <LeftSection
        imageURL="media/images/kite.png"
        productName="Trading Dashboard"
        productDesription="A real-time trading dashboard displaying simulated market data, portfolio performance, and active positions through an interactive UI."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <RightSection
        imageURL="media/images/console.png"
        productName="Portfolio Analytics"
        productDesription="Analyze virtual investments and trading history using visual insights and performance summaries."
        learnMore=""
      />

      <LeftSection
        imageURL="media/images/coin.png"
        productName="Virtual Investment Module"
        productDesription="Simulate investment decisions and manage holdings using mock trading data for learning purposes."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <RightSection
        imageURL="media/images/kiteconnect.png"
        productName="Backend Trading APIs"
        productDesription="Backend services handle order execution logic, portfolio updates, and user account management efficiently."
        learnMore=""
      />

      <LeftSection
        imageURL="media/images/varsity.png"
        productName="Learning Resources"
        productDesription="Educational modules explaining trading workflows and system behavior for beginners and developers."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <p className="text-center mt-5 mb-5">
        TradeFlow is continuously evolving with improvements in trading simulations,
        performance optimization, and user experience.
      </p>

      <Universe />
    </>
  );
}

export default PricingPage;
