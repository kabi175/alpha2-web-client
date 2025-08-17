import BuiltBySection from "./builtby-section";
import DiversifiedSection from "./diversified-section";
import InsightsSection from "./insights-section";
import IntroSection from "./intro-section";
import InvestorSection from "./investors-section";
import SolutionsSection from "./solutions-section";
import TestimonialSection from "./testimonial-section";
import { TrustedBy } from "./trusted-by";

export default function Page() {
  return (
    <div>
      <IntroSection />
      <DiversifiedSection />
      <InvestorSection />
      <SolutionsSection />
      <BuiltBySection />
      <TrustedBy />
      <TestimonialSection />
      <InsightsSection />
    </div>
  );
}
