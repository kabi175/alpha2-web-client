"use client";

import React, { Suspense } from "react";
import { MainContentSection } from "./MainContentSection";
import AlphaSection from "@/components/AlphaSection";

export default function ExplorePms() {
  // Navigation menu items data

  return (
    <AlphaSection isTop>
      <div className="w-full flex justify-center">
        {/* Main Content */}
        <Suspense>
          <MainContentSection />
        </Suspense>
      </div>
    </AlphaSection>
  );
}
