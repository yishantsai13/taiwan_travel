import React from "react";
import crossImg from '.././images/cross.png';

export default function Label(props) {
  let { customClass, customStyle, isActive, children, selectLabel, unSelect } = props
  const crossImgStyle = {
    backgroundImage: `url(${crossImg})`,
    backgroundSize: '8px 8px',
    width: '8px',
    height: '8px'
  }
  let className = 'px-2 py-1 leading-none w-max bg-white cursor-pointer '
  if (isActive) {
    className += 'bg-gray-lighter '
  }
  return (
    <div className={className + customClass} style={customStyle} onClick={() => selectLabel()}>
      <span className={'text-ss text-secondary'}>{children}</span>
      {isActive && (<div className={'inline-block ml-2'} style={crossImgStyle}></div>)
      }
    </div >
  )
}