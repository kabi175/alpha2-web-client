import ConnectWithExpert from "@/components/elements/button/ConnectWithExpert";

const AlphaHero = () => {
  return (
    <section className="mb-5 max-w-[800px] max-lg:flex flex-col max-md:justify-center">
      <h1 className="mb-1 text-8xl font-bold tracking-tighter leading-[113.36px] max-md:text-7xl max-sm:text-5xl max-sm:tracking-tighter flex flex-col">
        <span className="font-extralight text-transparent bg-clip-text bg-gradient-to-r from-white to-[#4B4B4B]">
          Amplify your
        </span>
        <span className="font-bold italic">Alpha</span>
      </h1>

      <p className="mb-5 text-3xl font-light tracking-tighter leading-10 max-w-[440px] max-sm:text-2xl">
        We specialize in identifying the right PMS for you—driven by data, defined by your persona
      </p>

      <div className="flex">
        <ConnectWithExpert />
      </div>

      <p className="text-lg font-light leading-7 max-w-[561px]">
        Experience the ultimate PMS investment experience.
        We stay with you in every step - offering timely guidance.
        No bias, no fund-pushing, just transparent advice.
      </p>
    </section>
  );
};

export default AlphaHero;
