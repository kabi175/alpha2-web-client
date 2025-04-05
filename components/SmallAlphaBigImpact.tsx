import AlphaSection from "./AlphaSection";
import BarChart from "./elements/chart/BarChart";
import { FundData } from "@/api/data";

export default function SmallAlphaBigImpact() {
  const funds: FundData[] = [
    {
      schemeName: "HDFC Balanced Advantage",
      manager: "",
      aum: 0,
      oneMonth: 4.99,
      threeMonth: -2.31,
      sixMonth: -3.49,
      oneYear: 7.72,
      twoYear: 0,
      threeYear: 19.93,
      fiveYear: 28.49,
      ytd: 0,
      sharpeRatio: 0,
      maxDrawdown: 0,
    },
    {
      schemeName: "Parag Parikh Flexi Cap",
      manager: "",
      aum: 0,
      oneMonth: 2.04,
      threeMonth: -4.42,
      sixMonth: -3.3,
      oneYear: 11.67,
      twoYear: 0,
      threeYear: 16.96,
      fiveYear: 31.81,
      ytd: 0,
      sharpeRatio: 0,
      maxDrawdown: 0,
    },
    {
      schemeName: "HDFC Mid-Cap Opportunities",
      manager: "",
      aum: 0,
      oneMonth: 6.16,
      threeMonth: -10.08,
      sixMonth: -9.57,
      oneYear: 7.67,
      twoYear: 0,
      threeYear: 24.36,
      fiveYear: 36.64,
      ytd: 0,
      sharpeRatio: 0,
      maxDrawdown: 0,
    },
    {
      schemeName: "HDFC Flexi Cap",
      manager: "",
      aum: 0,
      oneMonth: 6.09,
      threeMonth: -1.93,
      sixMonth: -3.67,
      oneYear: 14.05,
      twoYear: 0,
      threeYear: 22.1,
      fiveYear: 34.21,
      ytd: 0,
      sharpeRatio: 0,
      maxDrawdown: 0,
    },
    {
      schemeName: "Nippon India Small Cap",
      manager: "",
      aum: 0,
      oneMonth: 9.6,
      threeMonth: -13.82,
      sixMonth: -15.14,
      oneYear: 4.7,
      twoYear: 0,
      threeYear: 21.72,
      fiveYear: 42.97,
      ytd: 0,
      sharpeRatio: 0,
      maxDrawdown: 0,
    },
    {
      schemeName: "SBI Bluechip",
      manager: "",
      aum: 0,
      oneMonth: 5.39,
      threeMonth: -4.0,
      sixMonth: -7.65,
      oneYear: 7.05,
      twoYear: 0,
      threeYear: 12.86,
      fiveYear: 25.81,
      ytd: 0,
      sharpeRatio: 0,
      maxDrawdown: 0,
    },
    {
      schemeName: "ICICI Prudential Value Discovery",
      manager: "",
      aum: 0,
      oneMonth: 5.44,
      threeMonth: -2.47,
      sixMonth: -7.79,
      oneYear: 10.11,
      twoYear: 0,
      threeYear: 19.82,
      fiveYear: 34.24,
      ytd: 0,
      sharpeRatio: 0,
      maxDrawdown: 0,
    },
    {
      schemeName: "SBI Contra",
      manager: "",
      aum: 0,
      oneMonth: 5.12,
      threeMonth: -5.67,
      sixMonth: -10.72,
      oneYear: 6.03,
      twoYear: 0,
      threeYear: 22.1,
      fiveYear: 38.38,
      ytd: 0,
      sharpeRatio: 0,
      maxDrawdown: 0,
    },
  ];

  return (
    <AlphaSection>
      <h1 className="text-5xl font-medium tracking-tighter text-center max-md:max-w-full max-md:text-4xl pb-5">
        <span className="font-light">Small</span>{" "}
        <span className="font-semibold italic">Alpha,</span>{" "}
        <span className="font-light">Big</span>{" "}
        <span className="font-semibold italic">Impact</span>{" "}
      </h1>
      <br />
      <h3 className="text-2xl pb-20">
        <span className="font-light">3% alpha over 10 years can </span> <br />
        <span className="font-semibold italic">
          grow your corpus by 30%+
        </span>{" "}
      </h3>

      <BarChart chartData={funds} />
    </AlphaSection>
  );
}
