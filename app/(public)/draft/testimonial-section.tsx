"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Section from "./section";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { Header } from "./ui";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Testimonial {
  name: string;
  title: string;
  userAvatar: string;
  brand?: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Nishant Drolia",
    title: "CA",
    userAvatar: "https://github.com/shadcn.png",
    brand:
      "https://www.gstatic.com/marketing-cms/assets/images/c5/3a/200414104c669203c62270f7884f/google-wordmarks-2x.webp=n-w200-h64-fcrop64=1,00000000ffffffff-rw",
    content: `Invested with @alphasqr recently, and I must say—truly impressed.
The clarity of thought the team brings, the time they spend understanding your goals, and the genuine handholding throughout the portfolio process make a real difference.
Love seeing a team build something thoughtful and solid in the wealth-tech space.
`,
  },
  {
    name: "Parepalli Tharun Kumar",
    title: "Country Manager",
    userAvatar: "https://github.com/shadcn.png",
    content: ` I’ve had the pleasure of investing through AlphaSqr, and their approach truly stands out.

Right from the beginning, they made the effort to understand my goals rather than offering one-size-fits-all suggestions. What really earned my trust was their commitment to guiding me in the right direction — even when it meant lower commissions for them.
`,
  },
  {
    name: "Rohit Mehra",
    title: "Product Manager",
    userAvatar: "https://github.com/shadcn.png",
    brand:
      "https://www.gstatic.com/marketing-cms/assets/images/c5/3a/200414104c669203c62270f7884f/google-wordmarks-2x.webp=n-w200-h64-fcrop64=1,00000000ffffffff-rw",
    content:
      "AlphaSqr helped me cut through the noise and invest with clarity. Their approach is thoughtful, transparent, and truly aligned with my long-term goals.",
  },
  {
    name: "Rohit Mehra",
    title: "Product Manager",
    userAvatar: "https://github.com/shadcn.png",
    brand:
      "https://www.gstatic.com/marketing-cms/assets/images/c5/3a/200414104c669203c62270f7884f/google-wordmarks-2x.webp=n-w200-h64-fcrop64=1,00000000ffffffff-rw",
    content:
      "AlphaSqr helped me cut through the noise and invest with clarity. Their approach is thoughtful, transparent, and truly aligned with my long-term goals.",
  },
];

export default function TestimonialSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    if (container && content) {
      const distance = content.scrollHeight - container.clientHeight;
      setScrollDistance(-distance); // Negative to scroll up
    }
  }, []);

  return (
    <Section>
      <div className="w-full h-[556px] bg-[#0261CF] border rounded-4xl flex">
        <div className="w-1/2 flex justify-center items-center">
          <div>
            <Header> What Trust Sounds Like </Header>
            <p className="text-sm py-4">
              Real feedback from those who chose AlphaSqr for their financial
              journey.
            </p>

            <div className="flex gap-2">
              <Progress value={75} className="w-[45px]" />
              <Progress value={0} className="w-[45px]" />
              <Progress value={0} className="w-[45px]" />
            </div>
          </div>
        </div>
        <ScrollArea className="w-1/2 h-full relative" ref={containerRef}>
          <motion.div
            ref={contentRef}
            initial={{ y: 0 }}
            animate={{ y: scrollDistance }}
            transition={{
              duration: 5, // adjust speed
              ease: "easeInOut",
            }}
            className="flex flex-col justify-center items-center gap-8"
          >
            <div className="w-4/5 h-[10px]" />

            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </motion.div>
        </ScrollArea>
      </div>
    </Section>
  );
}

const TestimonialCard = ({
  content,
  userAvatar,
  name,
  title,
  brand,
}: Testimonial) => {
  return (
    <Card className="w-4/5 px-4 bg-[#FFFFFF] border rounded-4xl text-black flex flex-col justify-around">
      <p className="">{content}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={userAvatar} />
            <AvatarFallback> {name.slice(0, 2)} </AvatarFallback>
          </Avatar>
          <div className="">
            <p className="font-bold"> {name} </p>
            <p className="text-[#4A4A4A]"> {title} </p>
          </div>
        </div>

        {brand && (
          <div>
            <Image src={brand} alt=" Logo" width={100} height={32} />
          </div>
        )}
      </div>
    </Card>
  );
};
