import React from "react";
import { cityList as cityData } from "../api/CityData";
import Label from "./Label";
import { Navigate, Link } from "react-router-dom";


export default class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      city: props.city,
      seacrchInputValue: props.keyWord || '',
      isSubmit: false
    }
  }
  selectCity() {
    this.setState({
      city: ''
    })
  }

  handleSearchInputChange(evt) {
    this.setState({
      seacrchInputValue: evt.target.value
    });
  }

  // submitSearch() {
  //   this.setState({
  //     isSubmit: true
  //   })
  // }

  render() {
    const cityLabel = this.state.city && (<Label
      isActive={true}
      selectLabel={() => this.selectCity()}
    >{cityData[this.state.city].name}</Label >)

    const searchQuery = []

    if (this.state.city) searchQuery.push(`country=${this.state.city}`)
    if (this.state.seacrchInputValue) searchQuery.push(`keyword=${this.state.seacrchInputValue}`)

    return (
      <div className="bg-white flex flex-1 px-4 py-3 rounded border border-brown-lighter h-fit-content mt-8 items-center">
        {/* {this.state.isSubmit && (< Navigate to={`/searchResult?${searchQuery.join('&')}`} replace={true} />)} */}
        <input
          type="text"
          className="flex-1 focus:outline-none"
          placeholder="輸入關鍵字"
          value={this.state.seacrchInputValue}
          onChange={(event) => this.handleSearchInputChange(event)}
        />
        <div className="border-l"></div>
        <div className="flex flex-col py-1 px-2 flex-1">
          <div className="text-gray text-ss mb-1">縣市</div>
          <div className="">
            {this.state.city && cityLabel}
          </div>
        </div>
        <Link
          className="border bg-brown-yellow px-6 py-3 rounded text-sm text-white h-fit-content"
          // onClick={() => this.submitSearch()}
          to={`/searchResult?${searchQuery.join('&')}`}
        >搜尋
        </Link>
      </div>
    )
  }

}