"use client";
import * as React from "react";

interface NavLink {
  text: string;
  href: string;
}

interface FooterNavSectionProps {
  title: string;
  links: NavLink[];
}

export const FooterNavSection: React.FC<FooterNavSectionProps> = ({
  title,
  links,
}) => {
  return (
    <nav className="flex flex-col gap-4 items-start w-[190px] max-md:flex-1">
      <h2 className="text-lg font-bold leading-6 text-white">{title}</h2>
      <ul className="flex flex-col gap-2 items-start w-full">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="text-lg leading-6 text-zinc-400 hover:text-zinc-300 transition-colors"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
