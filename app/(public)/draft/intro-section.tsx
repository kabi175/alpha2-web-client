"use client";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

export default function IntroSection() {
  return (
    <div>
      <div className="w-full h-[600px]"></div>
      <div className="flex justify-center">
        <p> Trusted by Leaders Across Sectors</p>
      </div>
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

export function InfiniteHorizontalScroll() {
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
