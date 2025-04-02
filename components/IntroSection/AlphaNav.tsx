"use client";

import Image from "next/image";
import { redirect } from "next/navigation";

export default function AlphaNav() {
  return (
    <nav className="flex gap-10 items-center px-8 py-1.5 bg-[color:var(--nav-bg)] rounded-[290px] w-fit max-sm:hidden">
      <div className="px-4 py-2 bg-[color:var(--nav-active)] rounded-[40px]">
        <i className="ti ti-home" aria-hidden="true" />
        <Image
          onClick={() => redirect("/")}
          src="/nav-home.svg"
          width={24}
          height={24}
          alt="Home"
        />
      </div>
      <a
        href="/calculator"
        className="text-base text-white no-underline duration-[0.3s] transition-[color] hover:text-[color:var(--primary-blue)]"
      >
        Calculator
      </a>
      <a
        href="/explore"
        className="text-base text-white no-underline duration-[0.3s] transition-[color] hover:text-[color:var(--primary-blue)]"
      >
        Explore PMS
      </a>
      <a
        href="/#faqs"
        className="text-base text-white no-underline duration-[0.3s] transition-[color] hover:text-[color:var(--primary-blue)]"
      >
        FAQs
      </a>
      <a
        href="/about-us"
        className="text-base text-white no-underline duration-[0.3s] transition-[color] hover:text-[color:var(--primary-blue)]"
      >
        About Us
      </a>
    </nav>
  );
}
