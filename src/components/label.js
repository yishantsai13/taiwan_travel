import React, { useState } from "react";
import crossImg from '.././images/cross.png';

export default function Label() {
  const crossImgStyle = {
    backgroundImage: `url(${crossImg})`,
    backgroundSize: '8px 8px',
    width: '8px',
    height: '8px'
  }
  return (
    <div className={'bg-gray-lighter px-2 py-1 leading-none w-max'}>
      <span className={'text-ss text-secondary'}>台北</span>
      <div className={'inline-block ml-2'} style={crossImgStyle}></div>
    </div>
  )
}