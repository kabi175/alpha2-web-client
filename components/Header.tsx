import AlphaNav from "./IntroSection/AlphaNav";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Circle } from "lucide-react";

export default function Header() {
  return (
    <>
      <Link href={"https://calendar.app.google/VriTd83Lz2NwsvRB9"}>
        <div className="bg-[#0076FF] w-full p-2 flex justify-between items-center text-white text-sm cursor-pointer">
          <Circle size={16} fill="white" />
          Explore MF-PMS - Schedule your call
          <div></div>
        </div>
      </Link>
      <main className="overflow-hidden relative px-5 mx-auto my-0 max-w-[1440px] max-md:max-w-[991px] max-sm:max-w-screen-sm">
        <header className="mt-10 mb-10 ml-20 flex items-center justify-between">
          {/* <AlphaLogo /> */}

          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={102.05} height={48.36} />
          </Link>

          <AlphaNav />
          <div className="w-64">
            <Button
              variant="outline"
              className="dark:border-[#077AFF] dark:bg-background"
            >
              <Link href="https://calendar.app.google/VriTd83Lz2NwsvRB9">
                Start Investing
              </Link>
            </Button>
          </div>
        </header>
      </main>
    </>
  );
}
