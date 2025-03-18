// import { SectionTitle } from "./SectionTitle";
import PMSCard from "@/components/PMSCard";
import AlphaSection from "@/components/AlphaSection";

const PMFUnderstand: React.FC = () => {
  return (
    <AlphaSection>
      <h1 className="text-5xl font-medium tracking-tighter text-center max-md:max-w-full max-md:text-4xl">
        <span className="font-light">Understanding</span>{" "}
        <span className="font-semibold italic">PMS</span>
      </h1>

      <div className="w-full overflow-x-auto pb-4 mt-24 max-md:mt-10 custom-scrollbar">
        <div
          className="flex gap-7 items-center px-20 max-md:px-5 min-w-min"
          style={{
            paddingBottom: "20px",
            marginBottom: "-20px",
          }}
        >
          <PMSCard title="PMS Title Placeholder" percentage="9.50%" />
          <PMSCard title="PMS Title Placeholder" percentage="8.75%" />
          <PMSCard title="PMS Title Placeholder" percentage="8.25%" />
          <PMSCard title="PMS Title Placeholder" percentage="7.90%" />
          <PMSCard title="PMS Title Placeholder" percentage="7.50%" />
          <PMSCard title="PMS Title Placeholder" percentage="7.25%" />
          <PMSCard title="PMS Title Placeholder" percentage="7.00%" />
          <PMSCard title="PMS Title Placeholder" percentage="6.75%" />
          <PMSCard title="PMS Title Placeholder" percentage="6.50%" />
          <PMSCard title="PMS Title Placeholder" percentage="6.25%" isPartial />
        </div>
      </div>
    </AlphaSection>
  );
};

export default PMFUnderstand;
