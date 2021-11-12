import React from "react";
import { Link } from "react-router-dom";

export default class Card extends React.Component {
  render() {
    const { item } = this.props
    console.log(item)
    const imgStyle = {
      backgroundImage: `url(${item.Picture.PictureUrl1})`
    }
    return (
      <div className="bg-white rounded card">
        <Link to="/spotDetail"
          state={{ item }}
        >
          <div className="bg-cover bg-center w-full card-img rounded-t" style={imgStyle}>
            {/* <img src={item.Picture.PictureUrl1} className="w-auto"></img> */}
          </div>
        </Link>

        <div className="p-md">
          <h2 className="text-sm">{item.Name}</h2>
          <div className="text-ss text-gray-dark py-md space-y-sm">
            <div>
              {item.OpenTime}
            </div>
            <div>
              {item.Address}
            </div>
          </div>
        </div>
      </div>
    )
  }
}