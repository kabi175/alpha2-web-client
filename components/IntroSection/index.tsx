import AlphaBackground from "./AlphaBackground";
import AlphaLogo from "./AlphaLogo";
import AlphaNav from "./AlphaNav";
import AlphaHero from "./AlphaHero";
import AlphaStatCard from "./AlphaStatCard";
import Image from "next/image";

export default function Intro() {
  return (
    <>
      <main className="overflow-hidden relative px-5 py-10 mx-auto my-0 max-w-[1440px] max-md:max-w-[991px] max-sm:max-w-screen-sm">
        <header className="mt-10 mb-10 flex items-center justify-between">
          {/* <AlphaLogo /> */}

          <Image src="/logo.svg" alt="logo" width={102.05} height={48.36} />

          <AlphaNav />
          <div className="w-64" />
        </header>
        <AlphaHero />
        <section className="grid gap-8 grid-cols-[repeat(4,1fr)] max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
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
            value="25"
            suffix="+"
            description="Asset Classes & Sectors"
            subtext="Optimized Asset Allocation & Diversify your portfolio"
            isOdd={false}
          />
        </section>
      </main>
      <AlphaBackground />
    </>
  );
}
