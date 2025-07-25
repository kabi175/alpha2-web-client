import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";
import Section from "./section";
import Link from "next/link";

export default function IntroSection() {
  return (
    <Section className="flex flex-wrap items-center gap-12 p-5 lg:p-20 h-[calc(100dvh-130px)]">
      <div className="grow flex flex-col gap-8">
        <div>
          <h1 className="font-semibold text-5xl lg:text-8xl">Introducing</h1>
          <h1 className="font-semibold text-5xl lg:text-8xl"> MF - PMS</h1>
        </div>
        <p className="text-xl lg:text-2xl font-normal text-[#8E8E8E]">
          Select and rebalance mutual funds to target consistently higher alpha
        </p>
        <Link href="https://calendar.app.google/VriTd83Lz2NwsvRB9">
          <Button
            variant="default"
            className="w-[250px] text-xl lg:text-2xl p-6"
          >
            Schedule a call
          </Button>
        </Link>
      </div>
      <div className="grow">
        <Box />
      </div>
    </Section>
  );
}

const Box = () => {
  const features = [
    "Portfolio built using mutual funds",
    "Timely rebalancing to stay on track",
    "Lower drawdowns during market stress",
    "Better risk-adjusted returns",
    "No setup fee, no performance fee",
    "Full control and transparency",
    "Start small, grow bigger corpus",
  ];

  return (
    <Card className="bg-[#151515] relative border-none">
      <div className="absolute top-[-10] right-[-10] bg-[#111] p-2 rounded-full flex justify-center items-center">
        <div className="bg-[#025AE3] rounded-full p-1 size-[52px] flex justify-center items-center">
          <Sparkles size={20} fill="white" color="#f5f5f5" />
        </div>
      </div>

      <CardHeader className="font-semibold">MF-PMS</CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6 px-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="bg-[#025AE3] rounded-full p-1">
                <Check size={16} />
              </div>
              <span className="text-xl">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
