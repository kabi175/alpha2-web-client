"use client";
import * as React from "react";
import { FooterLogo } from "./FooterLogo";
import { FooterNavSection } from "./FooterNavSection";
import { FooterBottom } from "./FooterBottom";

const Footer: React.FC = () => {
  const navSections = {
    about: {
      title: "About us",
      links: [{ text: "More information", href: "/about-us" }],
    },
    products: {
      title: "Products",
      links: [
        { text: "Calculators", href: "/calculators" },
        { text: "Explore PMS", href: "/pms" },
        { text: "Connect with our Experts", href: "/experts" },
      ],
    },
    useful: {
      title: "Useful Links",
      links: [
        { text: "Top PMSs", href: "/top-pms" },
        { text: "Documentation", href: "/docs" },
      ],
    },
    legal: {
      title: "Legal",
      links: [
        { text: "Privacy Policy", href: "/privacy" },
        { text: "Terms and Conditions", href: "/terms" },
      ],
    },
  };

  return (
    <footer className="w-full backdrop-blur-[[8.433px]] bg-[#282A34] bg-opacity-20">
      <div className="flex flex-col gap-20 items-start px-28 py-16 max-md:px-16 max-sm:px-5">
        <div className="flex gap-8 items-center max-md:flex-col max-md:items-start">
          <FooterLogo />
          <div className="flex gap-8 items-start max-md:flex-wrap max-sm:flex-col">
            <FooterNavSection {...navSections.about} />
            <FooterNavSection {...navSections.products} />
            <FooterNavSection {...navSections.useful} />
            <FooterNavSection {...navSections.legal} />
          </div>
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
