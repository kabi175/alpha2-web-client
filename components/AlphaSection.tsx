export default function AlphaSection({
  children,
  isTop = false,
}: Readonly<{
  children: React.ReactNode;
  isTop?: boolean;
}>) {
  return (
    <section
      className={`flex overflow-hidden flex-col items-center text-white px-20 max-md:px-5 ${
        isTop ? "" : "py-24"
      }`}
    >
      {children}
    </section>
  );
}
