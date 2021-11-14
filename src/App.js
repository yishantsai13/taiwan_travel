import './App.css';

import { getScenicSpot } from './api/getScenicSpot'
// import Pagination from './components/Pagination'
import ScenicSpotList from './components/ScenicSpotList'
import SearchBarSimple from './components/SearchBarSimple'
import NavBar from './components/NavBar';
import Favorite from './components/Favorite'
import SearchResult from './components/SearchResult';
import SpotDetail from './components/SpotDetail';
import TainwanMap from './components/TaiwanMap';
import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <div className="bg-blue-light text-content pb-12">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />}></Route>
          <Route path="/searchResult" element={<SearchResult />}></Route>
          <Route path="/spotDetail" element={<SpotDetail />}></Route>
        </Routes>
      </div>
    );
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scenicSpotList: [],
      seacrchInputValue: "",
      pageData: {
        perPage: 4,
        currentPage: 1
      },
      totalDataAmount: 0,
      isSubmit: false,
      selectedCityList: []
    };
  }

  componentDidMount() {
    getScenicSpot({ limitNum: 4 }).then(
      (result) => {
        this.setState({
          scenicSpotList: result,
          totalDataAmount: result.length
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  handleSearchInputChange(evt) {
    this.setState({
      seacrchInputValue: evt.target.value
    });
  }

  submitSearch() {
    // const searchKeyWord = this.state.seacrchInputValue;
    this.setState({
      isSubmit: true
    })
    this.setState({
      pageData: {
        currentPage: 1,
        perPage: this.state.pageData.perPage
      }
    });
  }

  sliceData(arr) {
    let beginIndex =
      (this.state.pageData.currentPage - 1) * this.state.pageData.perPage;
    return arr.slice(beginIndex, beginIndex + this.state.pageData.perPage);
  }

  jumpToPage(i) {
    const totalPage = Math.ceil(
      this.state.totalDataAmount / this.state.pageData.perPage
    );
    if (i < 1 || i > totalPage) return;
    this.setState({
      pageData: {
        currentPage: i,
        perPage: this.state.pageData.perPage
      }
    });
  }

  selectCity(city) {
    if (this.state.selectedCityList.some(i => i === city)) {
      let oldCityList = this.state.selectedCityList.slice()
      let newCityList = oldCityList.filter(item => item !== city)
      this.setState({
        selectedCityList: newCityList
      })
      return
    }
    if (this.state.selectedCityList.length > 0) return
    this.setState({
      selectedCityList: [...this.state.selectedCityList, city]
    })
  }

  render() {
    const scenicSpotList = this.state.scenicSpotList;
    const seacrchInputValue = this.state.seacrchInputValue;
    const searchQuery = []
    if (this.state.selectedCityList[0]) searchQuery.push(`country=${this.state.selectedCityList[0]}`)
    if (seacrchInputValue) searchQuery.push(`keyword=${seacrchInputValue}`)

    return (
      <div>
        <div className="container">
          <div className="flex pt-24 items-center">
            {this.state.isSubmit && (< Navigate to={`/searchResult?${searchQuery.join('&')}`} replace={true} />)}
            <SearchBarSimple
              inputValue={seacrchInputValue}
              onChange={(val) => this.handleSearchInputChange(val)}
              submitSearch={(evt) => this.submitSearch(evt)}
            />
            <TainwanMap
              selectedCityList={this.state.selectedCityList}
              selectCity={(city) => this.selectCity(city)}
            ></TainwanMap>
          </div>
          <div>
            <h3 className="text-lg pb-4">熱門景點</h3>
            <ScenicSpotList scenicSpotList={this.sliceData(scenicSpotList)} />
          </div>
          {/* <Pagination
            totalAmount={this.state.totalDataAmount}
            pageData={this.state.pageData}
            jumpToPage={(i) => this.jumpToPage(i)}
          /> */}
        </div>
      </div >
    );
  }
}
