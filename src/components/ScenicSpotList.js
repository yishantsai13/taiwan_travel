import React from "react";
import Card from "./Card";
export default class ScenicSpotList extends React.Component {
  render() {
    const scenicSpotList = this.props.scenicSpotList.slice();
    const cardList = scenicSpotList.map((item, index) => {
      return (
        <Card
          key={index}
          item={item}
        ></Card>
        // <div key={index} className={"border-black border-2 rounded p-1 mb-2"}>
        //   <h2 className={"font-bold text-lg"}>{item.Name}</h2>
        //   <span className={"text-sm"}>{item.Description}</span>
        // </div>
      );
    });
    const emptyMessage = <div>沒有資料喔!</div>;
    return (
      <div className="flex jusitfy-between space-x-4">{scenicSpotList.length ? cardList : emptyMessage}</div>
    )
  }
}