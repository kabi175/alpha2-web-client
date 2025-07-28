"use client";
import { Button } from "@/components/ui/button";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import Section from "./section";

const cardItems = [
  { icon: "arrow.svg", title: "Disciplined Process" },
  { icon: "diaond.svg", title: "Integrity in Every Solution" },
  { icon: "rect.svg", title: "Transparent Communication" },
  { icon: "bulb.svg", title: "Research-Backed Decisions" },
];

export default function IntroSection() {
  return (
    <div>
      <Section>
        <div className="w-full h-[600px]">
          <div className="text-5xl">
            Invest with Intent.
            <div className="flex">
              Secure Your Financial
              <Image
                className="p-2"
                src="/landing-page/currency.png"
                alt="Currency"
                width={114}
                height={50}
              />
              Future.
            </div>
          </div>

          <div className="flex justify-between">
            <div className="text-[#8E8E8E]">
              Every decision at AlphaSqr is backed by purpose and data—so you
              can
              <br />
              stop guessing and start growing with confidence.
            </div>
            <Button> Start Investing </Button>
          </div>

          <div className="flex justify-between gap-4 pt-8">
            {cardItems.map((item, index) => (
              <FinCard key={index} title={item.title} icon={item.icon} />
            ))}
          </div>
        </div>
        <div className="flex justify-center text-xl">
          <p> Trusted by Leaders Across Sectors</p>
        </div>
      </Section>
      {/* <TrustedLeaders /> */}
      <InfiniteHorizontalScroll />
    </div>
  );
}

const items = ["qualcomm", "zoho", "nomura", "uber", "amara-raja"];

const ScrollItem = ({ leader, bg }: { leader: string; bg?: string }) => (
  <div
    className={`px-8 text-lg whitespace-nowrap flex  items-center justify-center min-w-[302px] min-h-[162px] ${bg}`}
  >
    <Image
      alt={leader}
      src={`/trusted-leaders/${leader}.png`}
      width={174}
      height={32}
    />
  </div>
);

function InfiniteHorizontalScroll() {
  const controls = useAnimation();
  const scrollWidth = items.length * 174; // adjust if items have different widths

  useEffect(() => {
    controls.start({
      x: [0, -scrollWidth],
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: 15, // adjust speed
      },
    });
  }, [controls, scrollWidth]);

  return (
    <div className="overflow-hidden w-full h-[165px] rounded relative">
      <motion.div animate={controls} className="absolute flex">
        {[...items, ...items].map((item, index) => (
          <ScrollItem
            key={index}
            leader={item}
            bg={index % 2 == 0 ? "bg-[#151515]" : ""} // alternate background color
          ></ScrollItem>
        ))}
      </motion.div>
    </div>
  );
}

const FinCard = ({ title, icon }: { title: string; icon: string }) => (
  <div className="bg-[#161616] w-[300px] h-[300px] flex flex-col justify-between p-12 rounded-2xl">
    <Image src={`/landing-page/${icon}`} alt={title} width={41} height={40} />
    <div className="text-lg">{title}</div>
  </div>
);
