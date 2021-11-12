import React from "react";
export default class SearchBar extends React.Component {
  render() {
    return (
      <div className="bg-white flex flex-1 px-4 py-3 rounded border border-brown-lighter h-fit-content mr-12">
        <input
          type="text"
          className="flex-1 focus:outline-none "
          placeholder="輸入關鍵字"
          value={this.props.inputValue}
          onChange={(event) => this.props.onChange(event)}
          onKeyUp={(event) => this.props.submitSearch(event)}
        />
        <button
          type="submit"
          className="border bg-brown-light px-8 py-2.5 rounded text-sm text-white"
          onClick={() => this.props.submitSearch()}
        >
          搜尋
        </button>
      </div>
    );
  }
}