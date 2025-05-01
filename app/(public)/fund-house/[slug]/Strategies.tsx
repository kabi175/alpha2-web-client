import React, { JSX } from "react";
import MainContentSection from "../../explore/MainContentSection";
import { FundHouseData } from "@/api/data";

export const Strategies = ({
  fundHouse,
}: {
  fundHouse: FundHouseData;
}): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1320px] mx-auto gap-8 py-8">
      <h2 className="font-semibold text-2xl text-[#a0a0a0] font-['Inter',Helvetica] leading-7">
        Strategies
      </h2>

      <div className="flex flex-col gap-8 w-full">
        <MainContentSection fundHouseID={fundHouse.id.toString()} />
      </div>
    </section>
  );
};
