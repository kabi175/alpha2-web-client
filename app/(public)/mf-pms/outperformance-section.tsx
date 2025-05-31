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
  { year: "2011", nifty: 11.04, pms: 12.74 },
  { year: "2012", nifty: -8.69, pms: -8.51 },
  { year: "2013", nifty: 7.16, pms: 8.53 },
  { year: "2014", nifty: 17.19, pms: 18.39 },
  { year: "2015", nifty: 26.99, pms: 26.99 },
  { year: "2016", nifty: -6.99, pms: -9.89 },
  { year: "2017", nifty: 18.58, pms: 32.75 },
  { year: "2018", nifty: 12.77, pms: 14.82 },
  { year: "2019", nifty: 15.38, pms: -8.82 },
  { year: "2020", nifty: -24.69, pms: 0.71 },
  { year: "2021", nifty: 70.94, pms: 72.38 },
  { year: "2022", nifty: 20.18, pms: 30.75 },
  { year: "2023", nifty: 0.52, pms: 22.5 },
  { year: "2024", nifty: 30.72, pms: 67.75 },
  { year: "2025", nifty: 4.6, pms: 38.84 },
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
