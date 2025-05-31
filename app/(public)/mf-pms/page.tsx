import React from "react";
import IntroSection from "./intro-section";
import ProblemSection from "./problem-section";
import OutcomeSection from "./outcome-section";
import StrategySection from "./strategy-section";
import OutperformanceSection from "./outperformance-section";
import TrailingPerformanceSection from "./trailing-performance-section";
import DrawdownsSection from "./drawdowns-section";
import SomeMissesSection from "./some-misses-section";
import InvestmentOptionsSection from "./investment-options-section";
import PortfolioChurnSection from "./portfolio-churn-section";

export default function Page() {
  return (
    <div>
      <IntroSection />
      <ProblemSection />
      <OutcomeSection />
      <StrategySection />
      <OutperformanceSection />
      <TrailingPerformanceSection />
      <DrawdownsSection />
      <SomeMissesSection />
      <PortfolioChurnSection />
      <InvestmentOptionsSection />
    </div>
  );
}
