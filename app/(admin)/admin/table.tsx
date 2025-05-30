"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export function TableDemo() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [records, setRecords] = useState<FundHouseData[]>([]);
  const page = Number.parseInt(searchParams.get("page") || "1");
  const unverified = searchParams.get("unverified") === "true";
  const perPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFundHouseData({
        page: page,
        per_page: perPage,
        unverified: unverified,
        cb: () => router.push("/login"),
      });
      setRecords(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead> Name </TableHead>
            <TableHead> Dispaly Name </TableHead>
            <TableHead> </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {records.map((record) => (
            <TableRow key={record.id}>
              <TableCell className="font-medium">{record.name}</TableCell>
              <TableCell className="font-medium">
                {record.display_name}
              </TableCell>
              <TableCell
                className="cursor-pointer"
                onClick={() => router.push(`/admin/fund-house/${record.id}`)}
              >
                <ExternalLink />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={`/admin?page=${page - 1}&unverified=${unverified}`}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              {" "}
              {page}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href={`/admin?page=${page + 1}&unverified=${unverified}`}
              hidden={records.length < perPage}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}

export async function fetchFundHouseData({
  page = 1,
  per_page = 10,
  unverified = false,
  cb,
}: {
  page?: number;
  per_page?: number;
  unverified?: boolean;
  cb: () => void;
}) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/fund-house?page=${page}&per_page=${per_page}&unverified=${unverified}`,
      {
        credentials: "include",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    if (response.status == 401) {
      cb();
    }
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching trailing returns:", error);
    return [];
  }
}

interface FundHouseData {
  id: string;
  name: string;
  display_name: string;
  description: string;
  logo_url: string;
}
