import { FundHouseData } from "@/api/data";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-select";
import React, { JSX } from "react";

const OverView = ({ fundHouse }: { fundHouse: FundHouseData }): JSX.Element => {
  // Define the statistics data for easy mapping
  const statistics = [
    {
      icon: "/money-case.svg",
      key: "aum",
      unit: "Cr",
      label: "AUM",
    },
    {
      icon: "/person.svg",
      unit: "",
      key: "total_clients",
      label: "Clients",
      iconClass: "w-5 h-[27px] absolute top-1 left-1",
    },
    {
      icon: "/strategies.svg",
      unit: "",
      key: "strategies",
      label: "Strategies",
      iconClass: "w-[31.2px] h-[26px]",
    },
    {
      icon: "/calender.svg",
      unit: "",
      key: "inception_date",
      label: "Inception Date",
    },
  ];

  return (
    <div className="w-full py-8">
      <Card className="bg-[#15181c] rounded-lg">
        <CardContent className="">
          <div className="flex flex-row items-start justify-between">
            {statistics.map((stat, index) => (
              <React.Fragment key={stat.label}>
                <div className="flex flex-col items-start gap-2">
                  <div className="flex flex-col items-start gap-4">
                    <div className="relative w-12 h-[31px]">
                      {stat.label === "Clients" ? (
                        <img
                          className={stat.iconClass}
                          alt={stat.label}
                          src={stat.icon}
                        />
                      ) : (
                        <img
                          className={stat.iconClass || "w-12 h-[31px]"}
                          alt={stat.label}
                          src={stat.icon}
                        />
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="font-bold text-white text-[28px]">
                        {(fundHouse[
                          stat.key as keyof FundHouseData
                        ] as string) || "N/A"}
                      </div>
                      {stat.unit && (
                        <div className="font-bold text-[#a0a0a0] text-[28px]">
                          {stat.unit}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="font-bold text-[#a0a0a0] text-xl">
                    {stat.label}
                  </div>
                </div>
                {index < statistics.length - 1 && (
                  <Separator className="h-[137px] bg-[#273038]" />
                )}
              </React.Fragment>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OverView;
