import AlphaNav from "./IntroSection/AlphaNav";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <main className="overflow-hidden relative px-5 mx-auto my-0 max-w-[1440px] max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <header className="mt-10 mb-10 ml-20 flex items-center justify-between">
        {/* <AlphaLogo /> */}

        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={102.05} height={48.36} />
        </Link>

        <AlphaNav />
        <div className="w-64" />
      </header>
    </main>
  );
}
