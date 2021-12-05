import React from "react";
import "./Filter.css";

const Filter = ({
  filterbyKey,
  filters,
  active,
  onClickHandler,
  setfilter,
}) => {
  const _filterbyKey = filterbyKey;
  console.log(filterbyKey, "filterbyKey");

  const [isSlectedfilter, SetisSlectedfilter] = React.useState(false);
  filters.sort();
  if (filterbyKey === "space_available") {
    filters.sort((a, b) => a - b);
  }
  const btnFilterclusters = filters.map((filter, index) => {
    return (
      <>
        <option key={index} value={filter}>
          {filter}
        </option>
      </>
    );
  });

  return (
    <div className="flex items-center space-x-4">
      <div>Filter by:</div>
      <button
        key="1"
        className={`${_filterbyKey === "city" ? "active" : "btn"} `}
        onClick={() => {
          setfilter({ filter: "city" });
          SetisSlectedfilter(true);
          onClickHandler({ value: "All" });
        }}
      >
        city
      </button>
      <button
        key="2"
        className={`${_filterbyKey === "cluster" ? "active" : "btn"} `}
        onClick={() => {
          setfilter({ filter: "cluster" });
          SetisSlectedfilter(true);

          onClickHandler({ value: "All" });
        }}
      >
        cluster
      </button>
      <button
        key="3"
        className={`${_filterbyKey === "space_available" ? "active" : "btn"} `}
        onClick={() => {
          setfilter({ filter: "space_available" });
          SetisSlectedfilter(true);

          onClickHandler({ value: "All" });
        }}
      >
        space available limit
      </button>
      {isSlectedfilter && (
        <>
          <div> select filter value:</div>
          <select
            disabled={_filterbyKey == ""}
            className="w-40 max-w-xs py-1 truncate "
            onChange={(e) => {
              console.log(e);
              onClickHandler({ value: e.target.value });
            }}
          >
            <option default value="All">
              All
            </option>
            {btnFilterclusters}
          </select>
        </>
      )}
    </div>
  );
};

export default Filter;
