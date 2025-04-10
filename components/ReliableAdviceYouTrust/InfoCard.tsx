import * as React from "react";

interface InfoCardProps {
  title: string;
  description: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({ title, description }) => {
  return (
    <article className="grow text-white max-md:mt-5 max-md:max-w-full h-full">
      <div className="flex flex-col px-7 pt-6 pb-9 rounded-3xl bg-zinc-900 bg-opacity-70 max-md:px-5 max-md:max-w-full h-full">
        <h3 className="self-start text-2xl font-medium tracking-tight">
          {title}
        </h3>
        <p className="mt-6 text-xl font-light tracking-normal max-md:max-w-full">
          {description}
        </p>
      </div>
    </article>
  );
};
