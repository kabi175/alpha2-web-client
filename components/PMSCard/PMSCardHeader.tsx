interface PMSCardHeaderProps {
  title: string;
}

export const PMSCardHeader: React.FC<PMSCardHeaderProps> = ({ title }) => {
  return (
    <header className="self-stretch border border-solid bg-neutral-800 bg-opacity-70 border-zinc-800">
      <div className="flex flex-col justify-center px-px py-6 w-full border border-solid bg-neutral-700 bg-opacity-10 border-neutral-700 border-opacity-40">
        <div className="flex gap-3.5 justify-center items-center">
          <div className="flex overflow-hidden gap-3.5 justify-center items-center self-stretch my-auto min-w-60 w-[303px]">
            <div className="flex shrink-0 self-stretch my-auto bg-white rounded-full h-[46px] w-[46px]" />
            <p className="self-stretch my-auto">{title}</p>
          </div>
        </div>
      </div>
    </header>
  );
};
