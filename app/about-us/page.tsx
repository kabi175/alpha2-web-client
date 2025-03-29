"use client";

import AlphaSection from "@/components/AlphaSection";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

export default function Calculator() {
  return (
    <div className="pb-24">
      <AlphaSection isTop>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto  mb-20">
            <h1 className="flex items-center gap-5 text-4xl sm:text-5xl font-bold mb-6">
              <div>Introducing</div>
              <Image src="/logo.svg" alt="logo" width={200} height={75} />
            </h1>
            <p className="text-xl text-zinc-400 italic mb-12">
              Driving your wealth creation with precision and purpose
            </p>

            <p className="text-lg text-zinc-300 mb-6">
              We’re building a revolutionary platform that unlocks access to
              Portfolio Management Services ‘PMS’, empowering you with the
              insights and tools to optimize portfolio performance and generate
              alpha on top of mutual funds.
            </p>

            <p className="text-lg text-zinc-300 mb-6">
              By aligning the right assets with your financial goals, we amplify
              your potential returns—what we call AlphaSqr.
            </p>
            <p className="text-lg text-zinc-300 mb-6">
              For the first time, we’re bringing this exclusive opportunity—once
              reserved for High Net Worth Individuals, Ultra-High Net Worth
              Individuals, and Family Offices—within your reach. Tailored, and
              designed just for you.
            </p>
            <p className="text-lg text-zinc-300 mb-6">
              Our journey began when Dheeraj, representing TVS Capital, met
              Ankit, then CFO of Increff, a TVS Capital portfolio company. What
              started as a professional connection quickly turned into a shared
              vision—to transform the wealth management landscape.
            </p>
            <p className="text-lg text-zinc-300 mb-6">
              With Ankit’s 15 years of experience in equity markets and
              Dheeraj’s expertise in unlisted investments, they discovered a
              shared passion for investing & wealth management. As investors,
              they recognized a critical gap—no platform existed to evaluate and
              navigate the 400+ PMS funds available to find the right fit for
              their goals and portfolios. An underserved segment in need of a
              smarter, more accessible solution.
            </p>
            <p className="text-lg text-zinc-300 mb-6">
              Driven by a passion for innovation, we set out to build a
              tech-first platform that delivers unparalleled value, bridging
              this gap with a seamless, tailored experience.
            </p>
            <p className="text-lg text-zinc-300 mb-6">
              This personal need sparked the idea for AlphaSqr—a platform
              designed to simplify and optimize PMS discovery for investors.
            </p>
          </div>

          <h2 className="text-5xl font-bold text-center mb-16">
            Meet the Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {Array.from({ length: 2 }).map((_, index) => (
              <Card key={index} className="bg-zinc-900/50 border-zinc-800 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Team member"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">Ankit Himatsingka</h3>
                    <a href="#" className="text-blue-400 hover:text-blue-300">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <p className="text-zinc-300">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
              </Card>
            ))}
          </div>
        </div>
      </AlphaSection>
    </div>
  );
}
