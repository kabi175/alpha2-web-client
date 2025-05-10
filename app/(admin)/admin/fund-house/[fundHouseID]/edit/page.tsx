"use client";
import { ImageUpload } from "@/components/image-upload";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useFundHouse, { FundHouseData } from "@/hooks/useFundHouse";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useParams } from "next/navigation";

export default function FundHousePage() {
  // const fundHouseData = await feimport { useParams } from 'next/navigation'tchFundHouseData(fundHouseID.fundHouseID);
  const { fundHouseID } = useParams<{ fundHouseID: string }>();
  const fundHouseData = useFundHouse(fundHouseID);

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-7xl px-4 py-8">
        <h1 className="text-2xl font-bold">Fund House</h1>
        {fundHouseData && <FundHouseForm fundHouse={fundHouseData} />}
      </div>
    </div>
  );
}

function FundHouseForm({ fundHouse }: { fundHouse: FundHouseData }) {
  if (!fundHouse.slug) {
    fundHouse.slug = slugify(fundHouse.name);
  }

  const formSchema = z.object({
    id: z
      .string()
      .min(1, {
        message: "Username must be at least 2 characters.",
      })
      .readonly(),
    name: z
      .string()
      .min(2, {
        message: "Username must be at least 2 characters.",
      })
      .readonly(),
    display_name: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    slug: z.string().min(5, {
      message: "URL must be at least 5 characters.",
    }),
    description: z.string().min(2, {
      message: "Description must be at least 2 characters.",
    }),
    logo_url: z.string().optional(),
    managers: z
      .array(
        z.object({
          id: z.number(),
          name: z.string().min(2, {
            message: "Name must be at least 2 characters.",
          }),
          title: z.string().readonly(),
          about: z.string(),
          image: z.string().optional(),
          email: z
            .string()
            .email({
              message: "Invalid email address",
            })
            .optional(),
          contact: z.string().optional(),
        })
      )
      .optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: fundHouse,
  });
  const managers = form.watch("managers") ?? [];

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await updateFundHouse(values);
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
                <FormDescription>Name as per SEBI</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="slug"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Slug</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  URL slug for the fund house. This is auto-generated from the
                  name.
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
            render={({}) => (
              <FormItem>
                <FormLabel>Fund House Logo</FormLabel>
                <FormControl>
                  {/* <Image src={"/fund_house_placeholder.png"} alt="Fund House" width={50} height={50} /> */}
                  <ImageUpload
                    className="w-1/3"
                    defaultImageUrl={
                      form.getValues("logo_url")
                        ? `${process.env.NEXT_PUBLIC_API_URL}${form.getValues(
                            "logo_url"
                          )}`
                        : "/fund_house_placeholder.png"
                    }
                    onImageUpload={(url) =>
                      form.setValue("logo_url", url || undefined)
                    }
                  />
                </FormControl>
                <FormDescription>Logo of the fund house.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Fund Managers</h2>
            {managers.map((_, index) => (
              <Card key={index} className="bg-[#111111] text-white">
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                  <Input
                    {...form.register(`managers.${index}.name`)}
                    placeholder="Name"
                  />
                  <Input
                    {...form.register(`managers.${index}.title`)}
                    readOnly
                    placeholder="Title"
                  />
                  <Textarea
                    {...form.register(`managers.${index}.about`)}
                    placeholder="About"
                  />
                  <Input
                    {...form.register(`managers.${index}.email`)}
                    placeholder="Email"
                  />
                  <Input
                    {...form.register(`managers.${index}.contact`)}
                    placeholder="Contact"
                  />

                  <FormField
                    control={form.control}
                    name={`managers.${index}.image`}
                    render={({}) => (
                      <FormItem>
                        <FormLabel>Fund House Logo</FormLabel>
                        <FormControl>
                          <ImageUpload
                            className="w-1/3"
                            defaultImageUrl={
                              form.getValues(`managers.${index}.image`)
                                ? `${
                                    process.env.NEXT_PUBLIC_API_URL
                                  }${form.getValues(`managers.${index}.image`)}`
                                : "/fund_manager_placeholder.png"
                            }
                            onImageUpload={(url) =>
                              form.setValue(
                                `managers.${index}.image`,
                                url || undefined
                              )
                            }
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex gap-2">
            <Button
              type="submit"
              onClick={form.handleSubmit(onSubmit, (err) => console.log(err))}
            >
              Submit
            </Button>
            <Button variant="outline">
              {" "}
              <Link href={"/admin"}>Cancel</Link>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

async function updateFundHouse(fundHouse: FundHouseData) {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/admin/fund-house`;
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(fundHouse),
    });
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    alert("updated!");
  } catch (err) {
    console.error("Error fetching fund house data:", err);
    throw new Error("Error fetching fund house data");
  }
}

function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove non-word characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/--+/g, "-") // Replace multiple hyphens with a single one
    .replace(/^-+|-+$/g, ""); // Trim hyphens from start and end
}
