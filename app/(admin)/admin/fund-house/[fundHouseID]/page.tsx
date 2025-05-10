"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import {
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";
import { DatabaseZap, EyeOff, Merge, ShieldAlert } from "lucide-react";
import { useEffect, useState } from "react";

export default function Page({
  params,
}: {
  params: Promise<{ fundHouseID: string }>;
}) {
  const [fundList, setFundList] = useState<Array<Fund>>([]);
  useEffect(() => {
    const fetchFunds = async () => {
      const { fundHouseID } = await params;
      const funds = await getFunds(fundHouseID);
      setFundList(funds);
    };
    fetchFunds();
  }, []);
  return (
    <div className="h-screen w-screen p-12">
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-6">
              <Card>
                <CardHeader className="text-center flex items-center justify-center">
                  <DatabaseZap /> <CardTitle>{fundList.length}</CardTitle>
                </CardHeader>
                <CardContent className="text-center"> Total Funds </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center flex items-center justify-center">
                  <Merge />{" "}
                  <CardTitle>
                    {fundList.filter((f) => f.merged_with).length}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  {" "}
                  Merged Funds{" "}
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center flex items-center justify-center">
                  <EyeOff />{" "}
                  <CardTitle>
                    {fundList.filter((f) => f.is_hidden).length}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  {" "}
                  Hidden Funds{" "}
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center flex items-center justify-center">
                  <ShieldAlert />{" "}
                  <CardTitle>
                    {fundList.filter((f) => !f.display_name).length}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  {" "}
                  Unapproved Funds{" "}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Display Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Merged With</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fundList.map((fund) => (
              <TableRow key={fund.id}>
                <TableCell className="font-medium">{fund.name}</TableCell>
                <TableCell>{fund.display_name || "N/A"}</TableCell>
                <TableCell>
                  <Badge variant={fund.is_hidden ? "destructive" : "default"}>
                    {fund.is_hidden ? "Hidden" : "Visible"}
                  </Badge>
                </TableCell>
                <TableCell>{fund.merged_with || "N/A"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

interface Fund {
  id: number;
  name: string;
  display_name?: string;
  is_hidden: boolean;
  merged_with?: string;
}

async function getFunds(fundHouseID: string): Promise<Array<Fund>> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/fund-house/${fundHouseID}/funds`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data || [];
  } catch (error) {
    console.error("Error fetching trailing returns:", error);
    return [];
  }
}
