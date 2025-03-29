export default function AlphaSection({
  children,
  isTop = false,
}: Readonly<{
  children: React.ReactNode;
  isTop?: boolean;
}>) {
  return (
    <section
      className={`flex overflow-hidden flex-col items-center  px-20 text-white max-md:pl-5 ${
        isTop ? "" : "py-24"
      }`}
    >
      {children}
    </section>
  );
}
