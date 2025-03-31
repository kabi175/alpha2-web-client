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
        <div className="flex gap-7 justify-center px-20 max-md:px-5 min-w-min">
          <PMSInfoCard
            image="profit.svg"
            text1="PMS are SEBI regulated investment products."
            text2="sit in your demat account with a regulated custodian."
          />
          <PMSInfoCard
            image="export.svg"
            text1="PMS are led by seasoned experts like Sunil Singhania (ex-Nippon MF)."
            text2="Leveraging deep experience and analytical prowess"
          />
          <PMSInfoCard
            image="research.svg"
            text1="PMS maintain a well-researched portfolio of  15-30 stocks."
            text2="This enables it to aim for superior long-term returns."
          />
        </div>
      </div>
    </AlphaSection>
  );
};

export default PMFUnderstand;
