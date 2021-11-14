import React, { useEffect, useState } from "react";
// import { getScenicSpot } from '../api/getScenicSpot'
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// components
import SearchBar from "./SearchBar";

export default function SpotDetail() {
  const location = useLocation();
  const detail = location.state && location.state.item || {}

  const navigate = useNavigate()
  return (
    <div className="container">
      <SearchBar></SearchBar>
      <div>
        <div className="my-6 text-secondary">
          <span onClick={() => navigate(-1)} className={'cursor-pointer'}>返回</span>
        </div>
        <div className="bg-white px-10 py-8">
          <div className="text-xl mb-5">{detail.Name}</div>
          <div className="flex">
            <div className="w-3/4">
              <img src={detail.Picture.PictureUrl1} className='bg-cover bg-center w-full'></img>
              <p className="mt-12 text-black-dark">{detail.DescriptionDetail}</p>
            </div>
            <div className="ml-8 w-1/4">
              <div className="text-lg mb-6">詳細資訊</div>
              <div className="flex flex-col text-sm">
                <div className="flex mb-4">
                  <span className="mr-4">時間</span>
                  <span>{detail.OpenTime}</span>
                </div>
                <div className="flex mb-4">
                  <span className="mr-4">電話</span>
                  <span>{detail.Phone}</span>
                </div>
                <div className="flex mb-4">
                  <span className="mr-4">位置</span>
                  <span className="flex-auto">{detail.Address}</span>
                </div>
              </div>
              <div>
                <div className="text-lg mb-6">交通資訊</div>
                <p className="text-sm">{detail.TravelInfo}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
