"use client";
import { ImageUpload } from "@/components/image-upload";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { z } from "zod"



export default function FundHousePage({ params }: { params: Promise<{ fundHouseID: string }> }) {

    // const fundHouseData = await fetchFundHouseData(fundHouseID.fundHouseID);
    const [fundHouseData, setFundHouseData] = useState<FundHouseData | null>();
    useEffect(() => {
        const fetchData = async () => {
            const fundHouseID = await params;
            const data = await fetchFundHouseData(fundHouseID.fundHouseID);
            setFundHouseData(data)
        }
        fetchData();
    }, [])

    return (
        <div className="w-full flex justify-center">
            <div className="w-full max-w-7xl px-4 py-8">
                <h1 className="text-2xl font-bold">Fund House</h1>
                {fundHouseData &&
                    <FundHouseForm fundHouse={fundHouseData} />
                }
            </div>
        </div>
    );

}

function FundHouseForm({ fundHouse }: { fundHouse: FundHouseData }) {
    const formSchema = z.object({
        id: z.string().min(1, {
            message: "Username must be at least 2 characters.",
        }).readonly(),
        name: z.string().min(2, {
            message: "Username must be at least 2 characters.",
        }).readonly(),
        display_name: z.string().min(2, {
            message: "Username must be at least 2 characters.",
        }),
        description: z.string().min(2, {
            message: "Description must be at least 2 characters.",
        }),
        logo_url: z.string().optional()
    })


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: fundHouse,
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)

        await updateFundHouse(values)
    }

    return (
        <div className="w-full flex justify-center pt-20">
            <Form {...form}>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-8 w-3/4">

                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input readOnly {...field} />
                                </FormControl>
                                <FormDescription>
                                    Name as per SEBI
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="display_name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Display Name</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Fund House Description</FormLabel>
                                <FormControl>
                                    <Textarea {...field} />
                                </FormControl>
                                <FormDescription>
                                    Description of the fund house.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="logo_url"
                        render={({ }) => (
                            <FormItem>
                                <FormLabel>Fund House Logo</FormLabel>
                                <FormControl>
                                    {/* <Image src={"/fund_house_placeholder.png"} alt="Fund House" width={50} height={50} /> */}
                                    <ImageUpload className="w-1/2" defaultImageUrl={`${process.env.NEXT_PUBLIC_API_URL}${form.getValues("logo_url")}` || "/fund_house_placeholder.png"} onImageUpload={(url) => {
                                        if (url) {
                                            form.setValue("logo_url", url);
                                        }
                                    }} />
                                </FormControl>
                                <FormDescription>
                                    Logo of the fund house.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="flex gap-2">
                        <Button type="submit" onClick={form.handleSubmit(onSubmit, (err) => console.log(err))}>Submit</Button>
                        <Button variant="outline"> <Link href={"/admin"}>Cancel</Link></Button>
                    </div>
                </form>
            </Form>
        </div>
    );

}

export async function fetchFundHouseData(fundID: string): Promise<FundHouseData> {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL
            }/admin/fund-house?id=${fundID}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }
        );
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        return data[0];
    } catch (err) {
        console.error("Error fetching fund house data:", err);
        throw new Error("Error fetching fund house data");
    }
}

export async function updateFundHouse(fundHouse: FundHouseData) {
    try {
        const url = `${process.env.NEXT_PUBLIC_API_URL
            }/admin/fund-house`
        const response = await fetch(
            url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(fundHouse),
        }
        );
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        alert("updated!")
    } catch (err) {
        console.error("Error fetching fund house data:", err);
        throw new Error("Error fetching fund house data");
    }
}

interface FundHouseData {
    id: string;
    name: string;
    display_name: string;
    description: string;
    logo_url?: string;
}
