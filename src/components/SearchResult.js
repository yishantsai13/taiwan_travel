import React, { useEffect, useState } from "react";
import { getScenicSpot } from '.././api/getScenicSpot'
import { useSearchParams } from "react-router-dom";

// components
import SearchBar from "./SearchBar";
import Card from "./Card";

export default function SearchResult() {
  const [country] = useState('')
  const [scenicSpotList, setScenicSpotList] = useState([])
  const [totalDataAmount, setTotalDataAmount] = useState(0)

  let [searchParams] = useSearchParams();
  const value = searchParams.get("country")
  const keyWord = searchParams.get("keyword")
  console.log(keyWord)
  useEffect(() => {
    getScenicSpot({ keyWord, limitNum: 20 }).then(
      (result) => {
        setScenicSpotList(result)
        setTotalDataAmount(result.length)
      },
      (error) => {
        console.log(error);
      }
    );
  }, [keyWord])

  // const scenicSpotList = this.state.scenicSpotList.slice();
  const cardList = scenicSpotList.map((item, index) => {
    return (
      <Card
        key={index}
        item={item}
      ></Card>
    );
  });

  return (
    <div className="container">
      <SearchBar></SearchBar>
      <div className="grid grid-cols-4 gap-4 mt-10">
        {cardList}
      </div>
    </div>
  )
}
