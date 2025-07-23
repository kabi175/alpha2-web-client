import BuiltBySection from "./builtby-section";
import InsightsSection from "./insights-section";
import IntroSection from "./intro-section";
import InvestorSection from "./investors-section";
import SolutionsSection from "./solutions-section";
import TestimonialSection from "./testimonial-section";

export default function Page() {
  return (
    <div>
      <IntroSection />
      <InvestorSection />
      <SolutionsSection />
      <BuiltBySection />
      <TestimonialSection />
      <InsightsSection />
    </div>
  );
}
