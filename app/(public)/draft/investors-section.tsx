import Image from "next/image";
import Section from "./section";
import { Header, SubHeader } from "./ui";

const investors = [
  "working-professional.png",
  "nri-investors.png",
  "retirement-planning.png",
  "1st-time-investors.png",
];

export default function InvestorSection() {
  return (
    <Section>
      <Header>
        For Investors Who Seek Clarity,
        <br />
        Control, and Confidence
      </Header>

      <SubHeader className="pt-4">
        Simplified, personalized investing for every stage of life.
      </SubHeader>

      <div className="flex justify-between items-center gap-8 flex-wrap pt-10">
        {investors.map((item, index) => (
          <Image
            key={index}
            src={`/landing-page/${item}`}
            alt={item}
            width={317}
            height={360}
          />
        ))}
      </div>
    </Section>
  );
}
