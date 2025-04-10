"use client";
import * as React from "react";
import { FooterLogo } from "./FooterLogo";
import { FooterNavSection } from "./FooterNavSection";
import { FooterBottom } from "./FooterBottom";

const Footer: React.FC = () => {
  const navSections = {
    about: {
      title: "About us",
      links: [{ text: "Meet the Team", href: "/about-us" }],
    },
    products: {
      title: "Products",
      links: [
        { text: "Explore PMS", href: "/explore" },
        { text: "Compare PMS", href: "/calculator" },
        {
          text: "Connect with our Experts",
          href: "https://calendar.app.google/VriTd83Lz2NwsvRB9",
        },
      ],
    },
    legal: {
      title: "Legal",
      links: [
        { text: "Privacy Policy", href: "/privacy-policy" },
        { text: "Terms and Conditions", href: "/terms-and-conditions" },
        { text: "Code of Conduct", href: "/code-of-conduct" },
        { text: "Disclaimer", href: "/disclaimer" },
      ],
    },
  };

  return (
    <footer className="w-full backdrop-blur-[[8.433px]] bg-[#282A34] bg-opacity-20">
      <div className="flex flex-col gap-20 items-start px-28 py-16 max-md:px-16 max-sm:px-5">
        <div className="flex flex-wrap gap-8 items-center max-md:flex-col max-md:items-start">
          <FooterLogo />
          <div className="flex gap-8 items-start max-md:flex-wrap max-sm:flex-col">
            <FooterNavSection {...navSections.about} />
            <FooterNavSection {...navSections.products} />
            <FooterNavSection {...navSections.legal} />
          </div>
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
