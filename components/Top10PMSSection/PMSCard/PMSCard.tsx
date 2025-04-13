import { Card, CardFooter } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface PMSCardProps {
  title: string;
  percentage: string;
  image: string;
  search: string;
  isPartial?: boolean;
}

export const PMSCard: React.FC<PMSCardProps> = ({
  title,
  percentage,
  image,
  search,
}) => {
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
    <Card
      onFocus={() => console.log(title + ": focus")}
      className="bg-gradient-to-r from-[#22222200] to-[#4A9EFF12] p-6 w-[305px] h-[342px] flex items-center relative rounded-2xl"
    >
      <div className="w-full h-[83px] bg-[#F7ECB01F] absolute rounded-t-2xl inset-x-0 top-0 z-0" />
      <div className="pt-[25px] z-10">
        <div className="w-[70px] h-[70px] rounded-2xl mb-4 bg-white flex items-center justify-center">
          <Image
            src={image != "" ? image : "/logo.svg"}
            alt="logo"
            width={60}
            height={60}
          />
        </div>
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <div className="flex items-baseline gap-1 mb-4">
        <span className="text-sm text-zinc-400">up to</span>
        <span className="text-3xl font-bold">{percentage}</span>
        <span className="text-sm text-zinc-400">p.a.</span>
        <ArrowUpRight className="w-4 h-4 text-green-500" />
      </div>
      <CardFooter>
        <Link href={`/explore?search=${search}&filter=All Funds`}>
          <Button variant="default" className="w-[167px]">
            Know more
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );

  /* Ellipse 3 */

  // return (
  //   <article className="flex overflow-visible flex-col items-center self-stretch pb-8 my-auto font-semibold rounded-3xl bg-zinc-900 min-w-60 w-[305px]">
  //     <PMSCardHeader title={title} />
  //     <ReturnDisplay percentage={percentage} />
  //     <div className="flex items-start mt-10 text-xl tracking-tighter text-center">
  //       <KnowMoreButton />
  //     </div>
  //   </article>
  // );
};
