"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Strategies } from "./Strategies";
import Managers from "./Managers";
import { AUMChart } from "./AUMChart";
import OverView from "./OverView";
import {
  AUMChartData,
  fetchFundHouse,
  fetchFundHouseAUM,
  FundHouseData,
} from "@/api/data";

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const [fundHouse, setFundHouse] = useState<FundHouseData>();
  const [entries, setEntries] = useState<AUMChartData[]>();

  useEffect(() => {
    const fetch = async () => {
      const pr = await params;
      const data = await fetchFundHouse(pr.slug);
      setFundHouse(data);

      setEntries(await fetchFundHouseAUM(pr.slug));
    };

    fetch();
  }, []);

  if (!fundHouse) {
    return <></>;
  }

  return (
    <div
      className="bg-[#111111] flex flex-row justify-center w-full"
      data-model-id="361:403"
    >
      <div className="bg-[#111111] overflow-hidden w-full max-w-[1512px]">
        <div className="relative w-full">
          <div className="w-full bg-[#131416]" />

          {/* Back Button */}
          <div className="mt-8 ml-[102px]">
            <Button variant="ghost" size="icon" className="p-0">
              <ArrowLeftIcon className="w-10 h-10" />
            </Button>
          </div>

          {/* Fund Information */}
          <div className="mt-4 ml-[102px]">
            <div className="flex items-center gap-6">
              {fundHouse.logo && (
                <img
                  className="w-[75px] h-10 object-cover"
                  alt="Icici pur logo"
                  src={fundHouse.logo}
                />
              )}
              <h1 className="font-bold text-white text-[28px]">
                {fundHouse.display_name}
              </h1>
            </div>

            <div>
              <OverView fundHouse={fundHouse} />
              <div className="font-medium text-lg">
                {fundHouse.last_updated && (
                  <>
                    <span className="text-[#a0a0a0]">as on </span>
                    <span className="text-[#e3e3e3]">
                      {new Date(fundHouse.last_updated).toLocaleString(
                        "default",
                        {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        }
                      )}
                    </span>
                  </>
                )}
              </div>
            </div>

            <div className="mt-[22px]  font-normal text-[#a0a0a0] text-xl leading-7">
              {fundHouse.description}
            </div>
          </div>

          {/* Section Components */}
          {fundHouse.managers && <Managers fundManagers={fundHouse.managers} />}
          {entries && (
            <AUMChart entries={entries} displayName={fundHouse.display_name} />
          )}
          <div className="w-full bg-[#111111]">
            <Strategies fundHouse={fundHouse} />
          </div>
        </div>
      </div>
    </div>
  );
}
