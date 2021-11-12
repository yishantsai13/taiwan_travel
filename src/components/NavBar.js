import React from "react";
import { Link } from "react-router-dom";

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="bg-brown h-76px flex items-center justify-end px-20">
        <Link to="/" className="logo mr-auto">Go Travel</Link>
        <div className="text-sm text-white border-gray-border">
          <a href="#" className="mr-8">景點搜尋</a>
          <Link to="/favorite">我的收藏</Link>
        </div>
      </div>
    )
  }
}