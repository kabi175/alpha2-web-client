interface AlphaStatCardProps {
  label: string;
  value: string;
  suffix?: string;
  icon?: string;
  iconColor?: string;
  description: string;
  highlight?: string;
  subtext: string;
  subtextHighlight?: string;
  isOdd: boolean;
}

const AlphaStatCard: React.FC<AlphaStatCardProps> = ({
  label,
  value,
  suffix,
  icon,
  iconColor,
  description,
  highlight,
  subtext,
  subtextHighlight,
  isOdd,
}) => {
  let gradientCls =
    "bg-gradient-to-br from-[#666666] to-[#4A9EFF12] via-gray-800";
  if (isOdd === true) {
    gradientCls = "bg-gradient-to-br from-slate-900 to-[#666666] via-gray-800";
  }

  const rootCss = `overflow-hidden relative p-5 rounded-3xl max-sm:mb-5 w-[265px] h-[284px] ${gradientCls}`;
  return (
    <article className={rootCss}>
      <div className="px-4 py-1.5 mb-12 text-xs rounded-xl bg-white/10 w-fit">
        {label}
      </div>
      <div className="mb-8 text-2xl font-light tracking-tighter">
        <span>{value}</span>
        {suffix && (
          <span className="ml-1.5 text-[color:var(--success-green)]">
            {suffix}
          </span>
        )}
        {icon && (
          <span className="ml-2.5" style={{ color: iconColor }}>
            {icon}
          </span>
        )}
      </div>
      <p className="mb-2.5 text-sm font-light">
        <span>{description} </span>
        {highlight && <span className="font-semibold">{highlight}</span>}
      </p>
      <p className="text-sm font-light text-white opacity-80">
        <span>{subtext} </span>
        {subtextHighlight && (
          <span className="font-semibold">{subtextHighlight}</span>
        )}
      </p>
    </article>
  );
};

export default AlphaStatCard;
