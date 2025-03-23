"use client";

import AlphaSection from "@/components/AlphaSection";
import ReturnsDashboard from "@/components/ReturnsDashboard";
import LineChart from "@/components/elements/chart/LineChart";
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
