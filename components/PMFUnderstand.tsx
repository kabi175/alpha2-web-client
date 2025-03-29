import AlphaSection from "@/components/AlphaSection";
import PMSInfoCard from "@/components/PMSInfoCard";

const PMFUnderstand: React.FC = () => {
  return (
    <AlphaSection>
      <h1 className="text-5xl font-medium tracking-tighter text-center max-md:max-w-full max-md:text-4xl">
        <span className="font-light">Understanding</span>{" "}
        <span className="font-semibold italic">PMS</span>
      </h1>

      <div className="w-full overflow-x-auto pb-4 mt-24 max-md:mt-10 custom-scrollbar">
        <div className="flex gap-7 items-center px-20 max-md:px-5 min-w-min">
          <PMSInfoCard />
          <PMSInfoCard />
          <PMSInfoCard />
        </div>
      </div>
    </AlphaSection>
  );
};

export default PMFUnderstand;
