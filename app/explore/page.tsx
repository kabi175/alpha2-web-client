import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { MainContentSection } from "./MainContentSection";
import AlphaSection from "@/components/AlphaSection";

export const ExplorePms = () => {
  // Navigation menu items data
  const navItems = [
    { id: 1, label: "All PMS", active: true },
    { id: 2, label: "Top Performing PMS", active: false },
    { id: 3, label: "All PMS", active: false },
    { id: 4, label: "All PMS", active: false },
    { id: 5, label: "All PMS", active: false },
  ];

  return (
    <div className="pb-24">
      <AlphaSection isTop>
        <div className="flex items-start gap-8">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className={`relative w-full h-[34px] justify-between rounded-[10px] px-[23px] py-2 text-xs ${
                  item.active
                    ? "bg-[#d9d9d9] text-[#2a2a2a]"
                    : "bg-[#252525] text-[#d9d9d9]"
                }`}
              >
                <span className="font-normal">{item.label}</span>
                <ChevronRightIcon className="w-[17px] h-[17px]" />
              </Button>
            ))}
          </nav>

          {/* Main Content */}
          <MainContentSection />
        </div>
      </AlphaSection>
    </div>
  );
};

export default ExplorePms;
