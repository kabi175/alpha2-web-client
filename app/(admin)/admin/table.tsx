"use client";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Pen } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export function TableDemo() {

    const router = useRouter()

    const [records, setRecords] = useState<FundHouseData[]>([]);
    const [page, setPage] = useState(1);
    const perPage = 10;


    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchFundHouseData({ page: page, per_page: perPage, cb: () => router.push("/login") });
            setRecords(data)
        }

        fetchData();
    }, [page])

    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead> Name </TableHead>
                        <TableHead> Dispaly Name </TableHead>
                        <TableHead>  </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {records.map((record) => (
                        <TableRow key={record.id}>
                            <TableCell className="font-medium">{record.name}</TableCell>
                            <TableCell className="font-medium">{record.display_name}</TableCell>
                            <TableCell onClick={() => router.push(`/admin/fund-house/${record.id}`)} >
                                <Pen /></TableCell>
                        </TableRow>
                    ))
                    }
                </TableBody >
            </Table >
            <Pagination>
                <PaginationContent>
                    <PaginationItem onClick={() => setPage(p => {
                        if (p > 1) {
                            return p - 1
                        }
                        return p
                    })} >
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" isActive> {page}</PaginationLink>
                    </PaginationItem>
                    <PaginationItem onClick={() => setPage(p => p + 1)}>
                        <PaginationNext href="#" hidden={records.length < perPage} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </>

    )
}


export async function fetchFundHouseData({ page = 1, per_page = 10, cb }: { page?: number, per_page?: number, cb: () => void }) {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL
            }/admin/fund-house?page=${page}&per_page=${per_page}`, {
            credentials: 'include',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }
        );
        if (response.status == 401) {
            cb()
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