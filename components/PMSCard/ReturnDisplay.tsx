interface ReturnDisplayProps {
  percentage: string;
}

export const ReturnDisplay: React.FC<ReturnDisplayProps> = ({ percentage }) => {
  return (
    <div className="flex gap-1 justify-center items-end mt-10 max-w-full tracking-tighter w-[222px]">
      <p>up to</p>
      <p className="text-5xl font-medium tracking-tighter text-center max-md:text-4xl">
        {percentage}
      </p>
      <p>p.a.</p>
    </div>
  );
};
