import React, { useState } from "react";
import taiwanImg from '.././images/taiwan.png';
import { cityList } from "../api/CityData";
import Label from "./Label";

export default function TainwanMap(props) {
  const { selectCity, selectedCityList } = props
  const [cityData] = useState(cityList)

  const taiwanImgStyle = {
    backgroundImage: `url(${taiwanImg})`,
    width: '559px',
    height: '629px',
    backgroundRepeat: 'no-repeat',
  }

  const cityLable = Object.keys(cityData).map(city => {
    let data = cityData[city]
    return (
      <Label
        customClass="absolute"
        customStyle={data.position}
        isActive={selectedCityList && selectedCityList.some(i => i === city)}
        selectLabel={() => selectCity(city)}
        key={city}
      >{data.name}</Label >
    )
  })
  return (
    <div style={taiwanImgStyle} className="relative">
      {cityLable}
    </div>
  )
}
