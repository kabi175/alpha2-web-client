import { useEffect, useState } from "react";

export default function useFundHouse(fundID: string) {
  const [fundHouseData, setFundHouseData] = useState<FundHouseData | null>();
  useEffect(() => {
    fetchFundHouseData(fundID).then((data) => {
      setFundHouseData(data);
    });
  }, [fundID]);

  return fundHouseData;
}

export interface FundHouseData {
  id: string;
  name: string;
  display_name: string;
  description: string;
  logo_url?: string;
  slug?: string;

  managers?: FundManger[];
}

export interface FundManger {
  id: number;
  name?: string;
  title: string;
  about?: string;
  image?: string;
  email?: string;
  contact?: string;
}

async function fetchFundHouseData(fundID: string): Promise<FundHouseData> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/fund-house/${fundID}`,
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
    return data;
  } catch (err) {
    console.error("Error fetching fund house data:", err);
    throw new Error("Error fetching fund house data");
  }
}
