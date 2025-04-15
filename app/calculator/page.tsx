"use client";

import AlphaSection from "@/components/AlphaSection";
import ReturnsDashboard from "@/app/calculator/ReturnsDashboard";
import React, { Suspense } from "react";

export default function Calculator() {
  return (
    <div>
      <AlphaSection isTop>
        <Suspense>
          <ReturnsDashboard />
        </Suspense>
      </AlphaSection>
    </div>
  );
}
