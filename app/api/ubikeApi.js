const apiUrl =
  "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

export async function fetchYouBikeData() {
  try {
    const response = await fetch(apiUrl);

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("API 請求出錯:", response.status, response.statusText);
      throw new Error("API 請求出錯");
    }
  } catch (error) {
    console.error("API 請求出錯:", error);
    throw error;
  }
}
