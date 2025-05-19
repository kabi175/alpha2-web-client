"use client";

import { TableDemo } from "./table";
import { Suspense } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = Number.parseInt(searchParams.get("page") || "1");
  return (
    <Suspense>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl px-4 py-8">
          <h1 className="text-2xl font-bold">Fund House</h1>
          <Tabs
            defaultValue={
              searchParams.get("unverified") === "true"
                ? "unverified"
                : "all-funds"
            }
            className="mt-4"
          >
            <TabsList>
              <TabsTrigger
                value="all-funds"
                onClick={() => {
                  router.push(`/admin?unverified=false&page=${page}`);
                }}
              >
                {" "}
                All Funds
              </TabsTrigger>
              <TabsTrigger
                value="unverified"
                onClick={() => {
                  router.push(`/admin?unverified=true&page=${page}`);
                }}
              >
                Unverified
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all-funds">
              <TableDemo />
            </TabsContent>
            <TabsContent value="unverified">
              <TableDemo />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Suspense>
  );
}
