"use client";
import PMSCard from "@/components/Top10PMSSection/PMSCard";
import AlphaSection from "@/components/AlphaSection";
import { useState } from "react";
import { getLastDateOfLastMonthFormatted } from "../elements/chart/LineChart";

interface PMSData {
  title: string;
  search: string;
  percentage: string;
  image: string;
}
const pmsData: PMSData[] = [
  {
    title: "Aequitas",
    search: "Aequitas Investment : India Opportunities Product",
    percentage: "41.78%",
    image: "/fund-logo/Aequitas-Logo.jpg",
  },
  {
    title: "ICICI Prudential",
    search: "ICICI Pru Asset : India Recovery Strategy",
    percentage: "36.99%",
    image: "/fund-logo/ICICI-Pru.jpg",
  },
  {
    title: "Motilal Oswal",
    search: "Motilal Oswal Asset : Focused Opportunities Strategy",
    percentage: "30.68%",
    image: "/fund-logo/MOTILAL-OSWAL.jpg",
  },
  {
    title: "Parag Parikh (PPFAS)",
    search: "Parag Parikh : Cognito",
    percentage: "26.51%",
    image: "/fund-logo/PARAG-PAREKH-PPFAS.jpeg",
  },
  {
    title: "Aditya Birla Sunlife",
    search: "Birla Sun Life : Select Sector Portfolio STP",
    percentage: "25.22%",
    image: "/fund-logo/ADITYA-BIRLA ABSL.png",
  },
  {
    title: "HDFC AMC",
    search: "HDFC Asset Management : Diversified Portfolio - Equity",
    percentage: "23.66%",
    image: "/fund-logo/HDFC-AMC.avif",
  },
  {
    title: "Unique Asset",
    search: "Unique Asset : Strategic Fund",
    percentage: "32.38%",
    image: "/fund-logo/Unique.jpg",
  },
  {
    title: "Bonanza",
    search: "Bonanza Portfolio : Edge",
    percentage: "31.16%",
    image: "/fund-logo/bonanza.png",
  },
  {
    title: "Asit C Mehta",
    search: "Asit C. Mehta : Ace Multicap",
    percentage: "30.94%",
    image: "/fund-logo/p.png",
  },
  {
    title: "Stallion",
    search: "Stallion Asset : Core Fund",
    percentage: "30.23%",
    image: "/fund-logo/STALLION.png",
  },
  {
    title: "JM Financial",
    search: "JM Financial : India Resurgent Portfolio Iii",
    percentage: "24.86%",
    image: "/fund-logo/JM-FINANCIAL.jpeg",
  },
  {
    title: "Unifi Capital",
    search: "Unifi Capital : APJ 20",
    percentage: "30.10%",
    image: "/fund-logo/UNIFI.png",
  },
];

const Top10PMS: React.FC = () => {
  const [scrollBarPosition, setScrollBarPosition] = useState(0);
  const scrollBarWidth = 40;

  return (
    <AlphaSection>
      <h1 className="text-5xl font-medium tracking-tighter text-center max-md:max-w-full max-md:text-4xl">
        <span className="font-light">Leading PMS Funds</span>
      </h1>

      <div
        className="w-full overflow-x-auto pb-4 mt-24 max-md:mt-10 custom-scrollbar"
        onScroll={(e) => {
          const { scrollLeft, scrollWidth, clientWidth } = e.currentTarget;
          const scrollPercentage = scrollLeft / (scrollWidth - clientWidth);

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
              search={pms.search}
            />
          ))}
        </div>
      </div>
      <div className="w-full text-end">
        *5 Year CAGR as per SEBI data on {getLastDateOfLastMonthFormatted()}
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
