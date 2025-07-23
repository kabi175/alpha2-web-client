import Image from "next/image";
import Section from "./section";
import { Header, SubHeader } from "./ui";
import { JSX } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SolutionsSection() {
  return (
    <Section>
      <Header>
        Solutions Designed for Every
        <br />
        Investment Journey
      </Header>

      <SubHeader className="pt-4">
        From mutual funds to PMS, we tailor strategies to match your unique
        goals.
      </SubHeader>

      <div className="flex justify-center items-center gap-8 flex-wrap pt-10 relative">
        <Box />
      </div>
    </Section>
  );
}

export const Box = (): JSX.Element => {
  return (
    <div className="w-[1320px] h-[421px]">
      <div className="w-[1320px] h-[421px] top-0 left-0">
        <div className="relative h-[421px]">
          {/* Background elements */}
          <div className="absolute w-[1320px] h-[223px] top-[198px] left-0">
            <div className="relative h-[223px]">
              <Image
                className="absolute w-[1315px] h-[46px] top-[177px] left-[3px]"
                alt="Rectangle"
                src="/landing-page/solutions/rectangle-41601.svg"
                width={1315}
                height={46}
              />
              <Image
                className="absolute w-[1320px] h-[195px] top-0 left-0"
                alt="Rectangle"
                src="/landing-page/solutions/rectangle-41592.svg"
                width={1320}
                height={195}
              />
            </div>
          </div>

          {/* First Card - MF-PMS */}
          <Card className="absolute w-[368px] h-[340px] top-0 left-[70px] bg-[#0076ff] rounded-[32px] overflow-hidden border border-solid border-[#87bfff]">
            <div className="relative w-[723px] h-[366px]  top-[20px] left-[-120px]">
              <div className="absolute w-[593px] h-[350px] top-3.5 left-0 opacity-50 bg-[url(/rectangle-41593.svg)] bg-[100%_100%]">
                <div className="relative w-[69px] h-11 top-[140px] left-[340px] shadow-[0px_2.2px_4.4px_#1d4fb41a,0px_7.7px_7.7px_#1d4fb417,0px_17.59px_9.9px_#1d4fb40d,0px_30.79px_12.1px_#1d4fb403,0px_47.28px_13.19px_transparent]">
                  <div className="relative h-11">
                    <div className="absolute w-[65px] h-[35px] top-1 left-0.5 bg-[#bfdcff] rounded-[32.62px/17.7px] border-[1.57px] border-solid border-[#0076ff5c] rotate-[-7.85deg]" />
                    <Image
                      className="absolute w-[41px] h-[22px] top-3 left-3"
                      alt="Vector"
                      src="/landing-page/solutions/vector.svg"
                      width={41}
                      height={22}
                    />
                  </div>
                </div>
              </div>

              <div className="absolute w-[317px] h-[158px] top-[209px] left-4 bg-[#0076ff] rounded-[158.56px/78.83px] blur-[27.5px]" />
              <div className="absolute w-[317px] h-[158px] top-0 left-[406px] bg-[#0076ff] rounded-[158.56px/78.83px] blur-[27.5px]" />

              <div className="absolute w-[253px] h-[268px] top-0 left-[148px]">
                <div className="flex flex-col w-[210px] h-[60px] items-start gap-[20px] absolute top-0 left-0">
                  <div className="relative self-stretch mt-[-0.88px]   font-medium text-[#ffffffcc] text-[17.6px] tracking-[0] leading-[28.2px]">
                    Start with
                  </div>

                  <div className="inline-flex items-start gap-3 relative flex-[0_0_auto] mb-[-0.26px] mr-[-33.25px]">
                    <Image
                      className="relative w-[16.64px] h-[27.37px] mt-[-0.91px] mb-[-0.46px] ml-[-0.91px]"
                      alt="Image"
                      src="/landing-page/solutions/-.svg"
                      width={16.64}
                      height={27.37}
                    />
                    <div className="text-[35.2px] leading-[28.2px] relative w-fit mt-[-1.00px]   font-bold text-white tracking-[0] whitespace-nowrap">
                      20,00,000/-
                    </div>
                  </div>
                </div>

                <div className="flex flex-col w-[253px] h-[80px] items-start gap-[21.13px] absolute top-[180px] left-0">
                  <div className="relative self-stretch mt-[-0.88px] font-semibold text-white text-[20.7px] tracking-[0] leading-[28.2px]">
                    MF-PMS
                  </div>
                  <div className="relative self-stretch  font-medium text-[#ffffffcc] text-[17.6px] tracking-[0] leading-[22.9px]">
                    actively managed, rebalanced
                    <br />
                    portfolios
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Second Card - PMS / AIFs */}
          <Card className="absolute w-[369px] h-[340px] top-0 left-[477px] bg-[#1e1e1e] rounded-[32px] overflow-hidden border border-solid border-[#4e4e4e]">
            <div className="relative w-[678px] h-[353px] top-2 left-[-168px]">
              <Image
                className="absolute w-[369px] h-[260px] top-[69px] left-[168px]"
                alt="Group"
                src="/landing-page/solutions/group-1686551859.png"
                width={369}
                height={260}
              />

              <div className="absolute w-[306px] h-[142px] top-10 left-3.5 bg-[#1e1e1e] rounded-[153.19px/71.22px] rotate-[-16.21deg] blur-[16.3px]" />
              <div className="absolute w-[220px] h-[111px] top-[241px] left-[458px] bg-[#1e1e1e] rounded-[110.19px/55.54px] blur-[16.3px]" />

              <div className="flex flex-col w-[213px] items-start gap-[20px] absolute  top-0 left-[197px]">
                <div className="relative self-stretch mt-[-0.90px]   font-medium text-[#ffffffcc] text-[17.9px] tracking-[0] leading-[28.7px]">
                  Start with
                </div>

                <div className="inline-flex items-start gap-3 relative flex-[0_0_auto] mr-[-33.83px]">
                  <Image
                    className="relative w-[16.89px] h-[27.78px] mt-[-0.93px] mb-[-0.85px] ml-[-0.93px]"
                    alt="Image"
                    src="/landing-page/solutions/--1.svg"
                    width={16.89}
                    height={27.78}
                  />
                  <div className="text-[35.8px] leading-[28.7px] relative w-fit mt-[-1.00px]   font-bold text-white tracking-[0] whitespace-nowrap">
                    50,00,000/-
                  </div>
                </div>
              </div>

              <div className="inline-flex flex-col items-start gap-[21.5px] absolute top-[190px] left-[197px]">
                <div className="relative self-stretch mt-[-0.90px]   font-semibold text-white text-[25.1px] tracking-[0] leading-[28.7px]">
                  PMS / AIFs
                </div>
                <div className="relative w-fit   font-medium text-[#ffffffcc] text-[17.9px] tracking-[0] leading-[23.3px]">
                  high-ticket, strategy-driven
                  <br />
                  investments
                </div>
              </div>
            </div>
          </Card>

          {/* Third Card - Retirement Product */}
          <Card className="absolute w-[368px] h-[340px] top-0 left-[884px] bg-[#0c0c0c] rounded-[32px] overflow-hidden border-[1.79px] border-dashed border-[#626262]">
            <div className="inline-flex flex-col items-center gap-[21.5px] absolute top-[212px] left-[49px]">
              <div className="relative self-stretch mt-[-0.90px]   font-medium text-[#fcfcfc] text-[25.1px] text-center tracking-[0] leading-[28.7px]">
                Retirement Product
              </div>
              <div className="relative w-[270.54px]   font-medium text-[#aaaaaa] text-[21.5px] text-center tracking-[0] leading-[25.1px]">
                stable returns for long-term peace
              </div>
            </div>

            <Badge className="inline-flex items-center justify-center gap-[7.5px] px-3 py-[10.5px] absolute top-[22px] left-[226px] bg-[#0076ff] rounded-[10px]">
              <div className="relative w-fit mt-[-0.75px]   font-medium text-[#fcfcfc] text-[15px] text-center tracking-[0] leading-[24.0px] whitespace-nowrap">
                Coming Soon
              </div>
            </Badge>

            <div className="absolute w-[72px] h-[72px] top-[97px] left-[149px] bg-[#191919] rounded-[119.44px] overflow-hidden">
              <Image
                className="absolute w-[26px] h-[26px] top-[23px] left-[23px]"
                alt="Vector"
                src="/landing-page/solutions/vector-1.svg"
                width={72}
                height={26}
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
