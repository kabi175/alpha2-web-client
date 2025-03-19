import IntroSection from "@/components/IntroSection";
import Top10PMS from "@/components/Top10PMS";
import PMFUnderstand from "@/components/PMFUnderstand";
import WhyPMSOverMutualFunds from "@/components/WhyPMSOverMutualFunds";
import ReliableAdviceYouTrust from "@/components/ReliableAdviceYouTrust";
import FaqSection from "@/components/FAQSection";

export default function Home() {
  return (
    <>
      <IntroSection />
      <Top10PMS />
      <PMFUnderstand />
      <WhyPMSOverMutualFunds />
      <ReliableAdviceYouTrust />
      <FaqSection />
    </>
  );
}
