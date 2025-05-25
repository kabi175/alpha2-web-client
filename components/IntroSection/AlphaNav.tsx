"use client";

import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function AlphaNav() {
  return (
    <nav className="flex gap-10 items-center px-8 py-2 rounded-[290px] w-fit max-sm:hidden text-nowrap">
      <Image
        onClick={() => redirect("/")}
        src="/nav-home.svg"
        width={24}
        height={24}
        alt="Home"
      />
      <Link
        href="/calculator"
        className="text-xs lg:text-base text-white no-underline duration-[0.3s] transition-[color] hover:text-[color:var(--primary-blue)]"
      >
        Compare PMS
      </Link>
      <Link
        href="/explore"
        className="text-xs lg:text-base text-white no-underline duration-[0.3s] transition-[color] hover:text-[color:var(--primary-blue)]"
      >
        Explore PMS
      </Link>
      <Link
        href="/#faqs"
        className="text-xs lg:text-base text-white no-underline duration-[0.3s] transition-[color] hover:text-[color:var(--primary-blue)]"
      >
        FAQs
      </Link>
      <Link
        href="/about-us"
        className="text-xs lg:text-base text-white no-underline duration-[0.3s] transition-[color] hover:text-[color:var(--primary-blue)]"
      >
        About Us
      </Link>
    </nav>
  );
}
