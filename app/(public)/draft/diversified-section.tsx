"use client";
import { Bar, BarChart, LabelList, Legend, XAxis } from "recharts";
import Section from "./section";
import { Header, SubHeader } from "./ui";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Payload } from "recharts/types/component/DefaultLegendContent";
import { Circle } from "lucide-react";

export default function DiversifiedSection() {
  const data = [
    {
      title: "Same Stocks, Repeated",
      content:
        "Multiple same-category funds = overlap, not real diversification.",
    },
    {
      title: "Too Much,Too Little Impact",
      content:
        "20+ funds expose you to 400+ stocks… with minimal impact per stock.",
    },
    {
      title: "No Review, No Rebalancing",
      content:
        "Portfolios grow messy over time with no active management or pruning.",
    },
    {
      title: "Scattered Without Strategy",
      content:
        "Funds are scattered across AMCs—mostly from tips or old advice.",
    },
  ];

  return (
    <Section>
      <Header>
        Is Your Portfolio Working
        <br />
        Against You?
      </Header>

      <SubHeader className="pt-4">
        Many portfolios look diversified but lack strategy.
      </SubHeader>

      <div className="flex justify-center items-center gap-6">
        <div className="grid grid-cols-2 grid-rows-2 w-1/2">
          {data.map((item, index) => (
            <div
              key={index}
              className={`${
                [0, 3].includes(index) && "bg-[#1C1C1C]"
              }  p-6 borderrounded-lg shadow-md`}
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.content}</p>
            </div>
          ))}
        </div>
        <div className="w-1/2 h-full bg-[#1A1A1A] p-8 rounded-4xl">
          <Chart />
        </div>
      </div>
    </Section>
  );
}

const chartConfig = {
  yours: {
    label: "Your 10+ MFs",
    color: "#0076FF",
  },
  nifty: {
    label: "Nifty 50",
    color: "#595959",
  },
} satisfies ChartConfig;

const chartData = [
  { nifty: undefined, yours: undefined },
  { nifty: 23.3, yours: 10.8 },
];

const renderLegend = (props: { payload?: Array<Payload> }) => {
  const { payload } = props;
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        {payload?.map((entry, index) => (
          <div
            className="text-xl lg:text-2xl flex flex-wrap items-center  gap-2"
            key={`item-${index}`}
          >
            <span
              className="block size-[15px]"
              style={{ backgroundColor: entry.color }}
            />
            <p className="text-sm ">
              {entry.value == "nifty"
                ? "Your returns in investing on 10+ Mutual funds"
                : "Your returns if you invested only on Nifty 50"}
            </p>
          </div>
        ))}

        <div className="flex items-center gap-2 text-sm">
          <Circle fill="#0076FF" color="#0076FF" size={12} /> We help you invest
          in the right ones
        </div>
      </div>
    </div>
  );
};

const Chart = () => (
  <ChartContainer config={chartConfig} className="">
    <BarChart data={chartData} width={555} height={555}>
      <XAxis dataKey={"dummykey"} tickLine={false} tickMargin={10} />

      <Legend verticalAlign="top" align="center" content={renderLegend} />
      <Bar
        dataKey="yours"
        fill={chartConfig.yours.color}
        radius={4}
        width={70}
        maxBarSize={120}
      >
        <LabelList
          position="top"
          offset={12}
          fontSize={14}
          fontWeight={500}
          formatter={(label: string) => `${label}%`}
        />

        <LabelList
          position="bottom"
          offset={12}
          fontSize={14}
          fontWeight={500}
          formatter={() => chartConfig.yours.label}
        />
      </Bar>

      <Bar
        dataKey="nifty"
        fill={chartConfig.nifty.color}
        radius={4}
        width={70}
        maxBarSize={120}
      >
        <LabelList
          position="top"
          offset={12}
          fontSize={14}
          fontWeight={500}
          formatter={(label: string) => `${label}%`}
        />
        <LabelList
          position="bottom"
          offset={12}
          fontSize={14}
          fontWeight={500}
          formatter={() => chartConfig.nifty.label}
        />
      </Bar>
    </BarChart>
  </ChartContainer>
);
