"use client";

import React, { JSX } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { FundManager } from "@/api/data";
import Image from "next/image";

const Managers = ({
  fundManagers,
}: {
  fundManagers: FundManager[];
}): JSX.Element => {
  return (
    <section className="w-full max-w-[1235px] ml-[102px] py-6">
      <h2 className="font-semibold text-2xl text-[#f0f0f0] font-['Inter',Helvetica] mb-6 leading-7">
        Fund Managers
      </h2>

      <div className="flex flex-col md:flex-row gap-6 relative">
        {fundManagers.map((manager, index) => (
          <React.Fragment key={manager.name}>
            <Card className="bg-transparent border-none flex-1">
              <CardContent className="p-0">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-4">
                      {/* <div
                        className="w-20 h-20 rounded-xl bg-cover bg-center"
                        style={{ backgroundImage: `url(${manager.image})` }}
                      /> */}
                      <img
                        className="w-20 h-20 rounded-xl bg-cover bg-center"
                        src={`${process.env.NEXT_PUBLIC_API_URL}${manager.image}`}
                        alt={manager.name}
                      />
                      <h3 className="font-['Inter',Helvetica] font-semibold text-white text-xl">
                        {manager.name}
                      </h3>
                    </div>
                    <p className="font-['Inter',Helvetica] font-medium text-[#a0a0a0] text-lg">
                      {manager.title}
                    </p>
                  </div>
                  <p className="font-['Inter',Helvetica] font-normal text-xl leading-7">
                    <span className="text-[#a0a0a0]">{manager.about} </span>
                    {/* <span className="text-[#268afc] cursor-pointer">
                      View More
                    </span> */}
                  </p>
                </div>
              </CardContent>
            </Card>

            {index < fundManagers.length - 1 && (
              <Separator
                orientation="vertical"
                className="hidden md:block h-64 bg-[#273038]"
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Managers;
