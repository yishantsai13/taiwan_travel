/* This example requires Tailwind CSS v2.0+ */
// import {
//   ChevronLeftIcon,
//   ChevronRightIcon,
//   ChevronDoubleLeftIcon,
//   ChevronDoubleRightIcon
// } from "https://cdn.skypack.dev/@heroicons/react/solid";
import React from "react"
export default class Pagination extends React.Component {
  render() {
    const { pageData, totalAmount } = this.props;
    const currentPage = pageData.currentPage;
    const beginIndex = (currentPage - 1) * pageData.perPage + 1;
    const endIndex = beginIndex + pageData.perPage - 1;
    const totalPage = Math.ceil(totalAmount / pageData.perPage);

    let pageUnit = Math.floor((currentPage - 1) / 10);

    let pages = [];
    for (let i = pageUnit * 10 + 1; i <= pageUnit * 10 + 10; i++) {
      if (i <= totalPage) {
        let className =
          i === currentPage
            ? "z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium";
        pages.push(
          <a
            href="#"
            key={`pagination_${i}`}
            className={className}
            onClick={() => this.props.jumpToPage(i)}
          >
            {i}
          </a>
        );
      }
    }
    return (
      <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div className="flex-1 flex justify-between sm:hidden">
          <a
            href="#"
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            onClick={() => this.props.jumpToPage(currentPage - 1)}
          >
            Previous
          </a>
          <a
            href="#"
            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            onClick={() => this.props.jumpToPage(currentPage + 1)}
          >
            Next
          </a>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{beginIndex}</span> to{" "}
              <span className="font-medium">{endIndex}</span> of{" "}
              <span className="font-medium">{totalAmount}</span> results
            </p>
          </div>
          <div>
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                onClick={() => this.props.jumpToPage((pageUnit - 1) * 10 + 1)}
              >
                <span className="sr-only">PreviousPages</span>
                {/* <ChevronDoubleLeftIcon className="h-5 w-5" aria-hidden="true" /> */}
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                onClick={() => this.props.jumpToPage(currentPage - 1)}
              >
                <span className="sr-only">Previous</span>
                {/* <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" /> */}
              </a>
              {pages}
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                onClick={() => this.props.jumpToPage(currentPage + 1)}
              >
                <span className="sr-only">Next</span>
                {/* <ChevronRightIcon className="h-5 w-5" aria-hidden="true" /> */}
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                onClick={() => this.props.jumpToPage((pageUnit + 1) * 10 + 1)}
              >
                <span className="sr-only">NextPages</span>
                {/* <ChevronDoubleRightIcon
                  className="h-5 w-5"
                  aria-hidden="true"
                /> */}
              </a>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}