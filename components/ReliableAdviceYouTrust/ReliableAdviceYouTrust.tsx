"use client";
import * as React from "react";
import { InfoCard } from "./InfoCard";
import ConnectWithExpert from "@/components/elements/button/ConnectWithExpert";

export const ReliableAdviceYouTrust: React.FC = () => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center px-20 pt-24 pb-12 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full max-w-[1086px] max-md:max-w-full">
          <header className="flex flex-col pr-12 pl-2 text-white max-md:pr-5 max-md:max-w-full">
            <h1 className="self-start text-5xl font-medium tracking-tighter text-center max-md:max-w-full max-md:text-4xl">
              Reliable advice you can trust
            </h1>
            <p className="mt-10 text-3xl font-extralight  max-md:max-w-full">
              AlphaSqr unlocks PMS for retail investors, offering wealth
              opportunities once limited to HNIs and family offices.
            </p>
          </header>

          <div className="mt-14 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="w-6/12 max-md:ml-0 max-md:w-full">
                <InfoCard
                  title="Independent, transparent, and unbiased."
                  description="Our advice is reliable, objective, and always in your best interest."
                />
              </div>
              <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <InfoCard
                  title="Tech-Driven, Personalized Advisory"
                  description="Our proprietary technology helps match you with the right PMS for your goals and risk profile."
                />
              </div>
            </div>
          </div>

          <div className="mt-6 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="w-6/12 max-md:ml-0 max-md:w-full">
                <InfoCard
                  title="Spam Free"
                  description="No spam— just occasional newsletters, but only if you choose to subscribe"
                />
              </div>
              <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <InfoCard
                  title="No Pressure, Just Guidance"
                  description="Our consultations are free, with no pressure to buy from AlphaSqr."
                />
              </div>
            </div>
          </div>

          <div className="flex items-start justify-center mt-16 max-md:mt-10">
            <ConnectWithExpert />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReliableAdviceYouTrust;
