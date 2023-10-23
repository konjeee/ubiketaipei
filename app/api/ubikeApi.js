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

// sno: 站点编号（Station Number）。
// sna: 站点名称（Station Name）。
// tot: 站点总车位数（Total Parking Spaces）。
// sbi: 目前可借出的单车数量（Available Bikes）。
// sarea: 站点所属行政区域（Station Area）。
// mday: 数据更新时间，通常是 Unix 时间戳（最后一次修改时间）。
// lat: 纬度坐标（Latitude）。
// lng: 经度坐标（Longitude）。
// ar: 地址（Address）。
// sareaen: 英文站点所属行政区域名称（English Station Area Name）。
// snaen: 英文站点名称（English Station Name）。
// aren: 英文地址（English Address）。
// bemp: 目前可停放的单车数量（Available Parking Spaces）。
// act: 活跃状态，通常是 1 表示活跃，0 表示停用（Active）。
// srcUpdateTime: 数据来源最后更新时间。
// updateTime: 数据更新时间。
// infoTime: 数据信息更新时间。
// infoDate: 数据信息更新日期。