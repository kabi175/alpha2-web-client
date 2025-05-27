"use client";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from "recharts";
import { Payload } from "recharts/types/component/DefaultLegendContent";

const chartConfig = {
  nifty: {
    label: "Nifty 50",
    color: "#2A2A2A",
  },
  pms: {
    label: "MF-PMS",
    color: "#025AE3",
  },
} satisfies ChartConfig;

const chartData = [
  { year: "2011", nifty: 56.9, pms: 20.9 },
  { year: "2012", nifty: 20.9, pms: 56.9 },
  { year: "2013", nifty: 128.9, pms: 128.9 },
  { year: "2014", nifty: 20.9, pms: 118 },
  { year: "2015", nifty: 128.9, pms: 56 },
  { year: "2016", nifty: 20.9, pms: 27.8 },
  { year: "2017", nifty: 27.5, pms: 57.1 },
  { year: "2018", nifty: 56.5, pms: 128.6 },
  { year: "2019", nifty: -5, pms: -8 },
  { year: "2020", nifty: -20, pms: 5 },
  { year: "2021", nifty: 61.0, pms: 162.1 },
  { year: "2022", nifty: 61.0, pms: 162.1 },
  { year: "2023", nifty: 61.0, pms: 162.1 },
  { year: "2024", nifty: 61.0, pms: 162.1 },
  { year: "2025", nifty: 61.0, pms: 162.1 },
];

export default function OutperformanceSection() {
  const renderLegend = (props: { payload?: Array<Payload> }) => {
    const { payload } = props;
    return (
      <div className="flex flex-col gap-6 pb-4">
        <div className="flex gap-4">
          {payload?.map((entry, index) => (
            <div className="text-2xl flex gap-2" key={`item-${index}`}>
              <span
                className="block size-[35px]"
                style={{ backgroundColor: entry.color }}
              />
              <p>{entry.value}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="p-20">
      <div className="flex flex-col justify-around gap-8">
        <div>
          <h1 className="font-semibold text-6xl">Relative Outperformance</h1>
          <p className="text-2xl font-normal text-[#8E8E8E] pt-4">
            Outperformance is not limited to specific period but is repeated
            over and over for multiple years
          </p>
        </div>

        <div className="flex justify-end">
          <ChartContainer config={chartConfig} className="h-[500px] w-full">
            <BarChart accessibilityLayer data={chartData}>
              <XAxis
                dataKey="year"
                tickLine={false}
                tickMargin={10}
                allowDecimals
              />
              <CartesianGrid strokeDasharray="3 3" />

              <YAxis
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => value + "%"}
                domain={["min", "max"]}
              />

              <Legend verticalAlign="top" align="left" content={renderLegend} />

              <Bar
                dataKey="nifty"
                name="Nifty 50"
                fill="#2A2A2A"
                radius={[12, 12, 0, 0]}
                barSize={66}
                order={1}
              />

              <Bar
                dataKey="pms"
                name="MF-PMS"
                fill="#025AE3"
                radius={[12, 12, 0, 0]}
                barSize={66}
                order={2}
              />
            </BarChart>
          </ChartContainer>
        </div>

        <div className="bg-[#151515] py-8 w-full text-2xl  text-[#C2C2C2] flex justify-center rounded-md">
          MF-PMS outperformed Nifty50 in thirteen out of fifteen financial years
        </div>
      </div>
    </section>
  );
}
