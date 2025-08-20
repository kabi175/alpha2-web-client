import Image from "next/image";
import Section from "./section";
import { Header, SubHeader } from "./ui";

const investors = ["/ankit.png", "/dheeraj.jpeg"];

export default function BuiltBySection() {
  return (
    <Section>
      <Header>Built by Experts. Backed by Values.</Header>

      <SubHeader className="pt-4">
        A team of seasoned professionals driven by trust, research, and
        integrity.
      </SubHeader>

      <div className="flex justify-start items-center gap-8 flex-wrap pt-10">
        {investors.map((item, index) => (
          <Image
            className="w-[400px] h-[500px]"
            key={index}
            src={item}
            alt={item}
            width={317}
            height={360}
          />
        ))}
      </div>
    </Section>
  );
}
