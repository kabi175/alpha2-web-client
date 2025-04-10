import AlphaBackground from "./AlphaBackground";
import AlphaHero from "./AlphaHero";
import AlphaStatCard from "./AlphaStatCard";

export default function Intro() {
  return (
    <>
      <main className="md:ml-10 lg:ml-20 overflow-hidden relative px-5 mx-auto my-0 max-w-[1440px] max-md:max-w-[991px] max-sm:max-w-screen-sm">
        <AlphaHero />
        <section className="grid gap-8 grid-cols-[repeat(4,1fr)] max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr] justify-items-center lg:justify-items-start overflow-scroll">
          <AlphaStatCard
            label="Growth"
            value="32.9%"
            suffix="*"
            icon="↗"
            iconColor="var(--success-green)"
            description="Average CAGR"
            highlight="over 5 years"
            subtext="Sustained High Growth Driving"
            subtextHighlight="Long-Term Success"
            isOdd={true}
          />
          <AlphaStatCard
            label="HNIs"
            value="185000"
            suffix="+"
            description="HNIs have"
            highlight="subscribed to PMS"
            subtext="Exclusive Network of High-Net-Worth Individuals"
            isOdd={false}
          />

          <AlphaStatCard
            label="Portfolio"
            value="20"
            suffix="+"
            description="Average experience of PMs"
            subtext="Managed by Experts with Rich Investing Experience"
            isOdd={true}
          />
          <AlphaStatCard
            label="Diverse"
            value="Rs 7 Lakh Crore"
            suffix="+"
            description="Investments"
            subtext="AUM of PMS by HNIs & UHNIs"
            isOdd={false}
          />
        </section>
      </main>
      <AlphaBackground />
    </>
  );
}
