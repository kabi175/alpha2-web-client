interface ReturnsData {
  ReportDate: string;
  "1_month_return": number;
}

interface FundDetails {
  id: number;
  name: string;
  manager: string;
}

const fetchTrailingReturns = async (
  fundId: Number,
  start: Date,
  end: Date
): Promise<ReturnsData[]> => {
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

const fetchAllFunds = async (name?: string): Promise<FundDetails[]> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/funds${name ? `?name=${name}` : ""}`
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

export { fetchTrailingReturns, fetchDiscreteReturns, fetchAllFunds };
