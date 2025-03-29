"use client";
import PMSCard from "@/components/Top10PMSSection/PMSCard";
import AlphaSection from "@/components/AlphaSection";
import { useState } from "react";

interface PMSData {
  title: string;
  percentage: string;
  image: string;
}
const pmsData: PMSData[] = [
  {
    title: "Aequitas",
    percentage: "41.78%",
    image: "/fund-logo/Aequitas-Logo.jpg",
  },
  {
    title: "ICICI Prudential",
    percentage: "36.99%",
    image: "",
  },
  {
    title: "Unique Asset",
    percentage: "32.38%",
    image: "",
  },
  {
    title: "Bonanza",
    percentage: "31.16%",
    image: "",
  },
  {
    title: "Asit C Mehta",
    percentage: "30.94%",
    image: "/fund-logo/p.png",
  },
  {
    title: "Motilal Oswal",
    percentage: "30.68%",
    image: "/fund-logo/MOTILAL-OSWAL.webp",
  },
  {
    title: "Stallion",
    percentage: "30.23%",
    image: "/fund-logo/STALLION.png",
  },
  {
    title: "Parag Parikh (PPFAS)",
    percentage: "26.51%",
    image: "/fund-logo/PARAG-PAREKH-PPFAS.jpeg",
  },
  {
    title: "Aditya Birla Sunlife",
    percentage: "25.22%",
    image: "/fund-logo/ADITYA-BIRLA ABSL.png",
  },
  {
    title: "JM Financial",
    percentage: "24.86%",
    image: "/fund-logo/JM-FINANCIAL.jpeg",
  },
  {
    title: "HDFC AMC",
    percentage: "23.66%",
    image: "/fund-logo/HDFC-AMC.avif",
  },
  {
    title: "Unifi Capital",
    percentage: "30.1%",
    image: "/fund-logo/UNIFI.png",
  },
];

const Top10PMS: React.FC = () => {
  const [scrollBarPosition, setScrollBarPosition] = useState(0);
  const scrollBarWidth = 40;

  return (
    <AlphaSection>
      <h1 className="text-5xl font-medium tracking-tighter text-center max-md:max-w-full max-md:text-4xl">
        <span className="font-semibold italic">Top 10 PMS</span>{" "}
        <span className="font-light">with their returns</span>
      </h1>

      <div
        className="w-full overflow-x-auto pb-4 mt-24 max-md:mt-10 custom-scrollbar"
        onScroll={(e) => {
          const { scrollLeft, scrollWidth, clientWidth } = e.currentTarget;
          let scrollPercentage = scrollLeft / (scrollWidth - clientWidth);

          // Move scrollbar along X-axis
          setScrollBarPosition(scrollPercentage * (clientWidth * 0.4));
        }}
      >
        <div className="flex gap-5 items-center max-md:px-5 min-w-min">
          {pmsData.map((pms, index) => (
            <PMSCard
              key={index}
              title={pms.title}
              percentage={pms.percentage}
              image={pms.image}
            />
          ))}
        </div>
      </div>
      <div className="w-full mt-12 flex justify-center gap-2">
        <div className="w-2/5 h-1 bg-zinc-800 rounded-full relative">
          <div
            className={`h-1 bg-white rounded-full absolute`}
            style={{
              left: `${scrollBarPosition}px`,
              width: `${scrollBarWidth}px`,
            }}
          />
        </div>
      </div>
    </AlphaSection>
  );
};

export default Top10PMS;
