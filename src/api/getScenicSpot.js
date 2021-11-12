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

function getScenicSpot(data = {}) {
  console.log(data)
  let url = ''
  let query = ['$format=JSON']
  if (data.hasOwnProperty('keyWord')) query.push(`$filter=contains(Name,'${data.keyWord}')`)
  if (data.hasOwnProperty('limitNum')) query.push(`$top=${data.limitNum}`)
  let queryStr = query.join('&')
  if (data.hasOwnProperty('city')) {
    url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${data.city}?${queryStr}`
  } else {
    url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?${queryStr}`
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