import Image from "next/image";

const PMSInfoCard: React.FC<{
  image: string;
  text1: string;
  text2: string;
}> = ({ image, text1, text2 }) => {
  return (
    <article className="bg-gradient-to-br from-slate-900 to-[#666666] via-gray-800 overflow-hidden relative p-10 rounded-3xl text-[white] w-[265px] max-md:mx-auto max-md:my-0 max-md:w-full max-md:max-w-[265px] max-sm:p-6 max-sm:h-auto max-sm:min-h-[400px]">
      <header className="mb-20">
        <i className="ti ti-plant-2 text-3xl text-[white]" aria-hidden="true" />
        <Image src={image} alt={"profit image"} width={64} height={64} />
      </header>
      <section className="flex flex-col gap-11">
        <h2 className="text-xl font-light leading-6 max-sm:text-lg">{text1}</h2>
        <h2 className="text-xl font-light leading-6 max-sm:text-lg">{text2}</h2>
      </section>
    </article>
  );
};

export default PMSInfoCard;
