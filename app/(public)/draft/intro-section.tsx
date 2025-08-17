"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Section from "./section";

const cardItems = [
  { icon: "money-bag.svg", title: "Wealth Management" },
  { icon: "tax-planning.svg", title: "Tax Planning" },
  { icon: "bulb.svg", title: "Retirement Solutions" },
  {
    icon: "chat-bubble.svg",
    title: "Financial Counselling",
  },
];

export default function IntroSection() {
  return (
    <div>
      <Section>
        <div className="w-full">
          <div className="text-5xl">
            Invest with Intent.
            <div className="">
              <p> Secure Your Financial </p>
              <Image
                className="p-2"
                src="/landing-page/currency.png"
                alt="Currency"
                width={114}
                height={50}
              />
              <p> Future. </p>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row justify-between">
            <div className="text-[#8E8E8E]">
              Every decision at AlphaSqr is backed by purpose and data—so you
              can
              <br />
              stop guessing and start growing with confidence.
            </div>
            <Button> Start Investing </Button>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
            {cardItems.map((item, index) => (
              <FinCard
                key={index}
                title={item.title}
                icon={item.icon}
                isDark={index % 2 != 0}
              />
            ))}
          </div>
        </div>

        {/* <div className="flex justify-center text-xl p-8">
          <p> Trusted by Leaders Across Sectors</p>
        </div> */}
      </Section>
      {/* <TrustedLeaders /> */}
      {/* <InfiniteHorizontalScroll /> */}
    </div>
  );
}

const FinCard = ({
  title,
  icon,
  isDark,
}: {
  title: string;
  icon: string;
  isDark: boolean;
}) => (
  <div
    className={`${
      isDark ? "bg-white" : "bg-[#0076FF]"
    } w-[300px] h-[300px] flex flex-col justify-between p-12 rounded-2xl`}
  >
    <Image src={`/landing-page/${icon}`} alt={title} width={41} height={40} />
    <div className={`font-semibold text-lg ${isDark ? "text-black" : ""}`}>
      {title}
    </div>
  </div>
);
