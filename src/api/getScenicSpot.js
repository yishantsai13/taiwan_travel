import jsSHA from "jssha";
function getAuthorizon() {
  const APPID = "f90c9da674534df398fca338c8aa34b8";
  const APPKEY = "XEg5uRI-uoeY6vXF0Xr3Udz-HNI";
  let GMTStr = new Date().toGMTString();
  let ShaObj = new jsSHA("SHA-1", "TEXT");
  ShaObj.setHMACKey(APPKEY, "TEXT");
  ShaObj.update("x-date: " + GMTStr);

  let HMAC = ShaObj.getHMAC("B64");

  let authorization = `hmac username="${APPID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`;
  return { Authorization: authorization, "X-Date": GMTStr };
}

function getScenicSpot(keyWord = "", city) {
  const limitNum = 5;
  let url = ''
  if (city) {
    url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${city}?$top=${limitNum}&$filter=contains(Name,'${keyWord}')&$format=JSON`
  } else {
    url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=${limitNum}&$filter=contains(Name,'${keyWord}')&$format=JSON`
  }

  return fetch(
    url,
    {
      headers: getAuthorizon()
    }
  ).then((res) => res.json());
}

export {
  getScenicSpot
}