import Image from "next/image";
import Section from "./section";
import { Header, SubHeader } from "./ui";

const investors = [
  {
    img: "/ankit.png",
    name: "Ankit Himatsingka",
    title: "15+ years in finance",
  },
  {
    img: "/dheeraj.jpeg",
    name: "Dheeraj Reddy",
    title: "5+ years in global markets",
  },
];

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
          <ImageCard key={index} {...item} />
        ))}
      </div>
    </Section>
  );
}

const ImageCard = ({
  img,
  name,
  title,
}: {
  img: string;
  name: string;
  title: string;
}) => {
  return (
    <div className="w-[400px] h-[500px] relative">
      <Image
        src={img}
        alt="Ankit"
        width={317}
        height={360}
        className="w-full h-full object-cover"
      />
      <div className="absolute w-full h-[60px] backdrop-blur-xs bottom-0 left-0"></div>
      <div className="absolute bottom-[5px] left-[20px]">
        <p className="font-bold">{name}</p>
        <p> {title}</p>
      </div>
    </div>
  );
};
