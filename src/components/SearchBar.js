import React, { useState } from "react";
import Label from "./label";

export default function SearchBar() {

  return (
    <div className="bg-white flex flex-1 px-4 py-3 rounded border border-brown-lighter h-fit-content mt-8">
      <input
        type="text"
        className="flex-1 focus:outline-none "
        placeholder="輸入關鍵字"
      />
      <div className="border-l"></div>
      <div className="flex flex-col py-1 px-2 flex-1">
        <div className="text-gray text-ss mb-1">縣市</div>
        <div className="">
          <Label></Label>
        </div>
      </div>
      <button
        type="submit"
        className="border bg-brown-yellow px-6 py-2 rounded text-sm text-white h-auto"
        onClick={() => this.props.submitSearch()}
      >
        搜尋
      </button>
    </div>
  )
}