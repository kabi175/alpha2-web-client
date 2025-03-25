export default function AlphaSection({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex overflow-hidden flex-col items-center py-24 px-20 text-white max-md:pl-5">
      {children}
    </section>
  );
}
