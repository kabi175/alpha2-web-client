import { PMSCardHeader } from "./PMSCardHeader";
import { ReturnDisplay } from "./ReturnDisplay";
import { KnowMoreButton } from "./KnowMoreButton";

interface PMSCardProps {
  title: string;
  percentage: string;
  isPartial?: boolean;
}

export const PMSCard: React.FC<PMSCardProps> = ({ title, percentage }) => {
  //   if (isPartial) {
  //     return (
  //       <article className="flex overflow-hidden flex-col self-stretch pb-28 my-auto rounded-3xl bg-zinc-900 w-[305px] max-md:pb-24">
  //         <div className="flex flex-col justify-center px-px py-6 w-full font-semibold border border-solid bg-neutral-800 bg-opacity-70 border-zinc-800">
  //           <div className="flex gap-3.5 justify-center items-center">
  //             <div className="flex overflow-hidden gap-3.5 justify-center items-center self-stretch my-auto w-[303px]">
  //               <div className="flex shrink-0 self-stretch my-auto bg-white rounded-full h-[46px] w-[46px]" />
  //               <p className="self-stretch my-auto">{title}</p>
  //             </div>
  //           </div>
  //         </div>
  //         <p className="gap-1 self-end mt-10 tracking-tighter">up to</p>
  //       </article>
  //     );
  //   }

  return (
    <article className="flex overflow-visible flex-col items-center self-stretch pb-8 my-auto font-semibold rounded-3xl bg-zinc-900 min-w-60 w-[305px]">
      <PMSCardHeader title={title} />
      <ReturnDisplay percentage={percentage} />
      <div className="flex items-start mt-10 text-xl tracking-tighter text-center">
        <KnowMoreButton />
      </div>
    </article>
  );
};
