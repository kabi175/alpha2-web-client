import Section from "./section";
import { Header, SubHeader } from "./ui";
import { JSX } from "react";
import { Card } from "@/components/ui/card";

export default function SolutionsSection() {
  return (
    <Section>
      <Header>
        Solutions Designed for Every
        <br />
        Investment Journey
      </Header>

      <SubHeader className="pt-4">
        From mutual funds to PMS, we tailor strategies to match your unique
        goals.
      </SubHeader>

      <div className="flex justify-center items-center gap-8 pt-10 relative">
        {data.map((item, index) => (
          <SolutionCard
            key={index}
            name={item.name}
            description={item.description}
            amount={item.amout}
            isDark={index % 2 === 0}
          />
        ))}
      </div>
    </Section>
  );
}

const data = [
  {
    name: "MF-PMS",
    description: "Actively managed, rebalanced portfolios",
    amout: "₹ 20 Lakhs",
  },
  {
    name: "PMS / AIFs",
    description: "High-ticket, strategy-driven investments",
    amout: "₹ 50 Lakhs",
  },
];

const SolutionCard = ({
  name,
  description,
  amount,
  isDark,
}: {
  name: string;
  description: string;
  amount: string;
  isDark?: boolean;
}): JSX.Element => {
  return (
    <Card
      className={`w-1/2 h-[350px] rounded-[32px] overflow-hidden ${
        isDark ? "bg-[#0076FF]" : "bg-white"
      }`}
    >
      <div
        className={`h-full flex flex-col justify-between p-6 ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        <div>
          <div
            className={`text-lg ${
              isDark ? "text-[#FFFFFFE5]" : "text-[#575757]"
            }`}
          >
            Start with
          </div>
          <div className="text-5xl font-semibold">{amount}</div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">{name}</h3>
          <p
            className={`text-lg mb-4 font-medium ${
              isDark ? "text-[#FFFFFFE5]" : "text-[#575757]"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
};
