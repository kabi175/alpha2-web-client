"use client";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Section from "./section";
import { useState } from "react";

interface Strategy {
  titile: string;
  content: string;
  steps: string[];
}

export default function StrategySection() {
  const steps = [
    "Identification of broad trends using parameters",
    "We evaluate a comprehensive set of macro, market, and sentiment indicators across geographies to assess positioning and timing.",
    "Interplay between these factors provide directional sense of M3 money supply, capital allocation to safe assets, and risk tolerance of global investors",
  ];

  const steps2 = [
    "Identification of sectors attracting inflows",
    "Leadership selection amongst chosen sectors",
    "Portfolio construction by eliminating MFs with high volatility and governance issues",
  ];

  const steps3 = [
    "Identify Mutual Funds which are consistent both from a qualitative and quantitative metrics",
    "Timely rebalancing basis market cycles",
  ];

  const strategies = [
    {
      titile: "Pillar 1",
      content:
        "Proprietary model of identification of market direction using eleven different parameters",
      steps: steps,
    },
    {
      titile: "Pillar 2",
      content:
        "Proprietary model of identification of market direction using eleven different parameters",
      steps: steps2,
    },
    {
      titile: "Pillar 3",
      content:
        "Proprietary model of identification of market direction using eleven different parameters",
      steps: steps3,
    },
  ];

  const [strategy, setStrategy] = useState<Strategy>(strategies[0]);

  return (
    <Section>
      <div className="flex flex-col justify-around gap-8">
        <div>
          <h1 className="font-semibold text-4xl lg:text-6xl">
            Investment Strategy
          </h1>
          <p className="text-xl lg:text-2xl font-normal text-[#8E8E8E] pt-4">
            Invesment Strategy is based on three pillars
          </p>
        </div>

        <div className="w-full flex flex-wrap rounded-md">
          <div className="md:w-1/2 bg-[#151515] rounded-l-md">
            <Tabs
              defaultValue={strategies[0].titile}
              className="h-full flex p-12 justify-center items-center"
              onValueChange={(s) =>
                setStrategy(
                  strategies.find((st) => st.titile === s) || strategies[0]
                )
              }
            >
              {strategies.map((s) => (
                <TabsContent
                  key={s.titile}
                  value={s.titile}
                  className="h-3/4 text-2xl lg:text-4xl"
                >
                  {s.content}
                </TabsContent>
              ))}

              <TabsList className="grid grid-cols-3 bg-[#0C0C0C] mt-4">
                {strategies.map((s) => (
                  <TabsTrigger
                    key={s.titile}
                    value={s.titile}
                    className="dark:data-[state=active]:bg-[#025AE3] w-[120px] rounded-sm"
                  >
                    {s.titile}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          <div className="md:w-1/2 bg-[#1B1B1B] p-12 rounded-r-md">
            {strategy?.steps.map((step, index) => (
              <div key={index} className="flex flex-col">
                {index != 0 && <Separator className="my-5" />}
                <div className="flex flex-col">
                  <p className="font-medium">Step {index + 1}</p>
                  <p className="pt-2 text-lg lg:text-xl font-normal text-[#8E8E8E]">
                    {step}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
