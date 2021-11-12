import React from "react";

export default class SearchResult extends React.Component {
  render() {
    const { item } = this.props
    console.log(item)
    const imgStyle = {
      backgroundImage: `url(${item.Picture.PictureUrl1})`
    }
    return (
      <div className="flex-1 bg-white rounded card">
        <div className="bg-cover bg-center w-full card-img rounded-t" style={imgStyle}>
          {/* <img src={item.Picture.PictureUrl1} className="w-auto"></img> */}
        </div>
        <div className="p-md">
          <h2 className="text-sm">{item.Name}</h2>
          <div className="text-ss text-gray-dark py-md space-y-sm">
            <div>
              {item.OpenTime}
            </div>
            <div>
              位置
            </div>
          </div>
        </div>
      </div>
    )
  }
}