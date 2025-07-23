"use client";
import Image from "next/image";
import Section from "./section";
import { Header, SubHeader } from "./ui";
import { Card, CardContent } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { XAxis, Bar, BarChart } from "recharts";

const chartData = [
  { month: undefined, nifty: undefined, alpha2: undefined },
  { month: undefined, nifty: undefined, alpha2: undefined },
  { month: "Year 1", nifty: 1.05, alpha2: 1.1 },
  { month: "Year 3", nifty: 1.37, alpha2: 1.73 },
  { month: "Year 5", nifty: 2.82, alpha2: 4.58 },
];

const chartConfig = {
  nifty: {
    label: "nifty",
    color: "var(--chart-1)",
  },
  alpha2: {
    label: "alpha2",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export default function InsightsSection() {
  return (
    <Section>
      <Header>
        Insights That Empower Your
        <br />
        Financial Decisions
      </Header>

      <SubHeader className="pt-4">
        Stay informed with expert insights, market trends, and
        <br />
        strategic ideas to make smarter investment decisions.
      </SubHeader>

      <div className="flex justify-start items-center gap-12 flex-wrap p-10 mt-10 rounded-2xl bg-[#141414]">
        <div>
          <Card className="bg-white w-[640px] h-[380px]">
            <CardContent>
              <div className="text-black">
                <div className="flex justify-between">
                  <p className="font-bold text-2xl">
                    Financial <br />
                    Outcome
                  </p>

                  <Image
                    src="/logo-black.svg"
                    alt="logo"
                    width={56}
                    height={26}
                  />
                </div>
                <div className="flex justify-between gap-8 pt-4 text-sm">
                  <p>
                    Alphasqr recommended PMS delivered
                    <br /> 80% higher corpus in 5 years
                  </p>

                  <p>Returns on ₹1 Cr investment</p>
                </div>
              </div>

              <ChartContainer config={chartConfig}>
                <BarChart data={chartData}>
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    lightingColor={"#D9D9D9"}
                  />
                  {/* <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dashed" />}
                  /> */}
                  <Bar dataKey="nifty" fill="#D9D9D9" radius={4} />
                  <Bar dataKey="alpha2" fill="#111111" radius={4} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
          <div className="flex gap-2 pt-4 leading-none font-medium">
            Outperforming the Market with 80% Higher Corpus in 5 Years
          </div>
        </div>

        <div>
          <Image
            className="pb-4"
            src="/landing-page/image.png"
            alt="Insights 1"
            width={640}
            height={360}
          />
          MF-PMS Strategies Delivered Consistent Outperformance
        </div>
      </div>
    </Section>
  );
}
