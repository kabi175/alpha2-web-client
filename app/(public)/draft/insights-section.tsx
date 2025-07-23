"use client";
import Image from "next/image";
import Section from "./section";
import { Header, SubHeader } from "./ui";
import { Card, CardContent } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { XAxis, Bar, BarChart, LabelList, Legend } from "recharts";
import { Payload } from "recharts/types/component/DefaultLegendContent";

const chartConfig = {
  nifty: {
    label: "Nifty 50",
    color: "var(--chart-1)",
  },
  alpha2: {
    label: "Alpha2 PMS",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

const PMSLabel = () => (
  <div className="flex items-center gap-2">
    <Image src="/logo-black.svg" alt="logo" width={56} height={26} />
    suggested PMS
  </div>
);

const renderLegend = (props: { payload?: Array<Payload> }) => {
  const { payload } = props;
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-4">
        {payload?.map((entry, index) => (
          <div
            className="text-xl lg:text-2xl flex items-center gap-2"
            key={`item-${index}`}
          >
            <span
              className="block size-[15px]"
              style={{ backgroundColor: entry.color }}
            />
            <p className="text-sm text-black">
              {entry.value == "nifty" ? "Nifty 50" : <PMSLabel />}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

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
        <FinancialOutcome />
        <PMSCard />
      </div>
    </Section>
  );
}

const FinancialOutcome = () => {
  const chartData = [
    { month: undefined, nifty: undefined, alpha2: undefined },
    { month: undefined, nifty: undefined, alpha2: undefined },
    { month: "Year 1", nifty: 1.05, alpha2: 1.1 },
    { month: "Year 3", nifty: 1.37, alpha2: 1.73 },
    { month: "Year 5", nifty: 2.82, alpha2: 4.58 },
  ];

  return (
    <div>
      <Card className="bg-white w-[640px] h-[380px]">
        <CardContent>
          <div className="text-black">
            <div className="flex justify-between">
              <p className="font-bold text-2xl">
                Financial <br />
                Outcome
              </p>

              <Image src="/logo-black.svg" alt="logo" width={56} height={26} />
            </div>
            <div className="flex justify-between gap-8 pt-4 text-sm">
              <p>
                Alphasqr recommended PMS delivered
                <br /> 80% higher corpus in 5 years
              </p>

              <p>Returns on ₹1 Cr investment</p>
            </div>
          </div>

          <ChartContainer config={chartConfig} className="relative">
            <BarChart data={chartData} className="top-[-100px]">
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                lightingColor={"#D9D9D9"}
              />

              <Legend
                verticalAlign="bottom"
                align="left"
                content={renderLegend}
              />
              {/* <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dashed" />}
                  /> */}
              <Bar dataKey="nifty" fill="#D9D9D9" radius={4}>
                <LabelList
                  position="top"
                  offset={12}
                  fontSize={14}
                  fill="black"
                  fontWeight={500}
                />
              </Bar>
              <Bar dataKey="alpha2" fill="#111111" radius={4}>
                <LabelList
                  position="top"
                  offset={12}
                  fontSize={14}
                  fill="black"
                  fontWeight={500}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
      <div className="flex gap-2 pt-4 leading-none font-medium">
        Outperforming the Market with 80% Higher Corpus in 5 Years
      </div>
    </div>
  );
};

const PMSCard = () => {
  const chartData = [
    { month: undefined, nifty: undefined, alpha2: undefined },
    { month: undefined, nifty: undefined, alpha2: undefined },
    { month: "Year 1", nifty: 4.6, alpha2: 38.8 },
    { month: "Year 3", nifty: 23.1, alpha2: 45.1 },
    { month: "Year 5", nifty: 11.8, alpha2: 23.3 },
  ];

  return (
    <div>
      <Card className="bg-[#0076FF] w-[640px] h-[380px]">
        <CardContent>
          <div className="">
            <div className="flex gap-2 items-center">
              <p className="font-bold text-2xl">10% +</p>
              <p className="font-normal text-md"> higher </p>
            </div>
            <p className="text-sm">CAGR than Index</p>
          </div>

          <ChartContainer config={chartConfig} className="relative">
            <BarChart data={chartData} className="top-[-50px]">
              <XAxis dataKey="month" tickLine={false} tickMargin={10} />

              <Legend verticalAlign="bottom" align="left" color="white" />

              {/* <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              /> */}

              <Bar dataKey="nifty" fill="#5D9CE7E5" radius={4}>
                <LabelList
                  position="top"
                  offset={12}
                  fontSize={14}
                  fill="white"
                  fontWeight={500}
                  formatter={(value: string) => `${value}%`}
                />
              </Bar>
              <Bar dataKey="alpha2" fill="#FFFFFF" radius={4}>
                <LabelList
                  position="top"
                  offset={12}
                  fontSize={14}
                  fill="white"
                  fontWeight={500}
                  formatter={(value: string) => `${value}%`}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
      <div className="flex gap-2 pt-4 leading-none font-medium">
        MF-PMS Strategies Delivered Consistent Outperformance
      </div>
    </div>
  );
};
