import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function Section({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <section className={cn("p-5 lg:p-20", className)}>{children}</section>;
}
