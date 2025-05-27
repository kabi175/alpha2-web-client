import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function StrategySection() {
  const steps = [
    "Identification of broad trends using parameters",
    "Parameters evaluated are Nifty Spot, BSE 500 PE, BSE 500 EPS Growth, my-Cap to GDP, USA Vix, India Vix, US & India T-Bill spread, Gold Spot, Crude Spot, Fed & RBI stance, MSCI Index Weight",
    "Interplay between these factors provide directional sense of M3 money supply, capital allocation to safe assets, and risk tolerance of global investors",
  ];

  const strategies = [
    {
      titile: "Pillar 1",
      content:
        "Proprietary model of identification of market direction using eleven different parameters",
    },
    {
      titile: "Pillar 2",
      content:
        "Proprietary model of identification of market direction using eleven different parameters",
    },
    {
      titile: "Pillar 3",
      content:
        "Proprietary model of identification of market direction using eleven different parameters",
    },
  ];

  return (
    <section className="p-20">
      <div className="flex flex-col justify-around gap-8">
        <div>
          <h1 className="font-semibold text-6xl">Investment Strategy</h1>
          <p className="text-2xl font-normal text-[#8E8E8E] pt-4">
            Invesment Strategy is based on three pillars
          </p>
        </div>

        <div className="w-full flex rounded-md">
          <div className="w-1/2 bg-[#151515] rounded-l-md">
            <Tabs
              defaultValue={strategies[0].titile}
              className="h-full flex p-12 justify-center items-center"
            >
              {strategies.map((s) => (
                <TabsContent
                  key={s.titile}
                  value={s.titile}
                  className="h-3/4 text-4xl"
                >
                  {s.content}
                </TabsContent>
              ))}

              <TabsList className="grid grid-cols-3 bg-[#0C0C0C]">
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
          <div className="w-1/2 bg-[#1B1B1B] p-12 rounded-r-md">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col">
                {index != 0 && <Separator className="my-5" />}
                <div className="flex flex-col">
                  <p className="font-medium">Step {index + 1}</p>
                  <p className="pt-2 text-xl font-normal text-[#8E8E8E]">
                    {step}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
