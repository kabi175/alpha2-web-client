import { queryObjects } from "v8";

interface ReturnsData {
  report_date: string;
  amount: number;
  returns: number;
}

interface FundDetails {
  id: number;
  name: string;
  manager: string;
}

export interface FundExploreData {
  schemeName: string;
  manager: string;
  aum: number;
  oneMonth: number;
  threeMonth: number;
  sixMonth: number;
  oneYear: number;
  twoYear: number;
  threeYear: number;
  fourYear: number;
  fiveYear: number;
  sharpeRatio: number;
  maxDrawdown: number;
  slug?: string;
}

export interface FundData extends FundExploreData {
  uv?: number;
}

export interface FundExploreDataResponse {
  data: FundExploreData[];
  total: number;
}

const fetchTrailingReturns = async (
  fundId: number,
  start: Date,
  end: Date
): Promise<ReturnsData[]> => {
  if (fundId === 0 || isNaN(fundId)) {
    return [];
  }
  try {
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_API_URL
      }/fund/${fundId}/trailing-returns?start=${start.toISOString()}&end=${end.toISOString()}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching trailing returns:", error);
    return [];
  }
};

const fetchDiscreteReturns = async (
  fundId: Number,
  period: "Y" | "Q"
): Promise<ReturnsData[]> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/fund/${fundId}/discrete-returns?period=${period}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data.discrete_returns;
  } catch (error) {
    console.error("Error fetching trailing returns:", error);
    return [];
  }
};

const fetchAllFunds = async (
  name?: string,
  type?: string
): Promise<FundDetails[]> => {
  try {
    const param = new URLSearchParams();
    if (name) {
      param.append("name", name);
    }
    if (type) {
      param.append("type", type == "PMS" ? "PMF" : type);
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/funds${
        param.size > 0 ? `?${param.toString()}` : ""
      }`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching trailing returns:", error);
    return [];
  }
};

const fetchFundsForExplore = async (
  params: Record<string, string>
): Promise<FundExploreDataResponse> => {
  try {
    const param = new URLSearchParams(params);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/funds/explore${
        param.size > 0 ? `?${param.toString()}` : ""
      }`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return {
      data: data.data || [],
      total: data.total,
    };
  } catch (error) {
    console.error("Error fetching trailing returns:", error);
    return {
      data: [],
      total: 0,
    };
  }
};

const fetchFundsForImpact = async (): Promise<Array<FundData>> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/funds/impact`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching trailing returns:", error);
    return [];
  }
};

export interface FundManager {
  name: string;
  title: string;
  about: string;
  image: string;
}

export interface FundHouseData {
  id: number;
  display_name: string;
  logo?: string;
  description: string;
  last_updated: string;
  inception_date: string;

  aum: string;
  clients: string;
  strategies: string;

  managers: FundManager[];
}

const fetchFundHouse = async (slug: string): Promise<FundHouseData> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/fund-house/${slug}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching trailing returns:", error);
    throw error;
  }
};

export interface AUMChartData {
  report_date: string;
  aum: number;
}

const fetchFundHouseAUM = async (slug: string): Promise<AUMChartData[]> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/fund-house/aum/${slug}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching trailing returns:", error);
    throw error;
  }
};

export {
  fetchTrailingReturns,
  fetchDiscreteReturns,
  fetchAllFunds,
  fetchFundsForExplore,
  fetchFundsForImpact,
  fetchFundHouse,
  fetchFundHouseAUM,
};
