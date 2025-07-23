import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Header({ children }: { children: ReactNode }) {
  return <p className="font-semibold text-3xl lg:text-5xl">{children}</p>;
}

export function SubHeader({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={cn(className, "text-[#8E8E8E]")}>{children}</p>;
}
