import './App.css';

import { getScenicSpot } from './api/getScenicSpot'
import Pagination from './components/Pagination'
import ScenicSpotList from './components/ScenicSpotList'
import SearchBar from './components/SearchBarSimple'
import NavBar from './components/NavBar';
import Favorite from './components/Favorite'
import SearchResult from './components/SearchResult';
import SpotDetail from './components/SpotDetail';
import React from 'react'
import taiwanImg from './images/taiwan.png';
import { Routes, Route, Link, Navigate } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <div className="bg-blue-light text-content">
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

  submitSearch(evt) {
    if (evt && evt.keyCode !== 13) return;
    const searchKeyWord = this.state.seacrchInputValue;
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

  render() {
    const scenicSpotList = this.state.scenicSpotList;
    const seacrchInputValue = this.state.seacrchInputValue;
    const taiwanImgStyle = {
      backgroundImage: `url(${taiwanImg})`,
      width: '559px',
      height: '629px'
    }
    return (
      <div>
        <div className="container">
          <div className="flex pt-24 items-center">
            {this.state.isSubmit && (< Navigate to={`/searchResult?country=123&keyword=${this.state.seacrchInputValue}`} replace={true} />)}
            <SearchBar
              inputValue={seacrchInputValue}
              onChange={(val) => this.handleSearchInputChange(val)}
              submitSearch={(evt) => this.submitSearch(evt)}
            />
            <div style={taiwanImgStyle}>
            </div>
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

// const cityList = {
//   "Keelung": '基隆市',
//   "Taipei": '台北市',
//   "NewTaipei": '新北市',
//   "Taoyuan": '桃園市',
//   "Hsinchu": '新竹市',
//   "HsinchuCounty": '新竹縣',
//   "MiaoliCounty": '苗栗縣',
//   "Taichung": '台中市',
//   "ChanghuaCounty": '彰化縣',
//   "NantouCounty": '南投縣',
//   "YunlinCounty": '雲林縣',
//   "Chiayi": '嘉義市',
//   "ChiayiCounty": '嘉義縣',
//   "Tainan": '台南市',
//   "Kaohsiung": '高雄市',
//   "PingtungCounty": '屏東縣',
//   "TaitungCounty": '台東縣',
//   "HualienCounty": '花蓮縣',
//   "YilanCounty": '宜蘭縣',
//   "PenghuCounty": '澎湖縣',
//   "KinmenCounty": '金門縣',
//   "LienchiangCounty": '連江縣'
// }