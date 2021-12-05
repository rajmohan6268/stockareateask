import { connect } from "react-redux";
import Table from "./Table";
const filterdatabyNamebasedonsearchvalue = (
  data,

  searchValue
) => {
  let warehouse = [];
  if (searchValue === "") {
    warehouse = data.map((obj) => obj);
  } else {
    warehouse = data
      .filter((obj) =>
        obj.name.toLowerCase().includes(searchValue.toLowerCase().trim())
      )
      .map((obj) => {
        return obj;
      });
  }
  return warehouse;
};
const getFilterCities = (data, filterby, FilterValue, searchValue) => {
  // console.log(
  //   filterdatabyNamebasedonsearchvalue(data, searchValue, filterby),
  //   "filterdatabyfilbykeyandvalue"
  // );
  let warehousedata = [];

  if (filterby === "All" || FilterValue === "All") {
    warehousedata = data.map((obj) => obj);
    warehousedata = filterdatabyNamebasedonsearchvalue(
      warehousedata,
      searchValue,
      filterby
    );
  } else {
    warehousedata = data
      .filter((obj) => obj[`${filterby}`] == FilterValue)
      .map((obj) => {
        return obj;
      });
    warehousedata = filterdatabyNamebasedonsearchvalue(
      warehousedata,
      searchValue,
      filterby
    );

  }
  return warehousedata;
};

const mapStateToProps = (state) => ({
  cities: getFilterCities(
    state.data,
    state.visibilityFilter.filterbyKey,
    state.visibilityFilter.FilterValue,
    state.visibilityFilter.searchValue
  ),
  filterby: state.visibilityFilter.filterbyKey,
  FilterValue: state.visibilityFilter.FilterValue,
});

export default connect(mapStateToProps)(Table);
