"use client";

import AlphaSection from "@/components/AlphaSection";
import ReturnsDashboard from "@/app/calculator/ReturnsDashboard";
import React from "react";

export default function Calculator() {
  return (
    <div>
      <AlphaSection>
        <ReturnsDashboard />
      </AlphaSection>
    </div>
  );
}
