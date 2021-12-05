import { connect } from "react-redux";
import {
  setVisibilityFilter,
  setVisibilityFilterValue,
} from "../../actions/filter";
import Filter from "./Filter";

const getFilterclusters = (data, filterbyKey) => {
  console.log(filterbyKey, "filterby");
  let arrclusters = [];
  data.forEach((item) => {
    if (arrclusters.indexOf(item[`${filterbyKey}`]) === -1) {
      arrclusters.push(item[`${filterbyKey}`]);
    }
  });
  return arrclusters.sort((a, b) => a - b);
};

const mapStateToProps = (state) => ({
  filters: getFilterclusters(state.data, state.visibilityFilter.filterbyKey),
  filterbyKey: state.visibilityFilter.filterbyKey,
  active: state.visibilityFilter.FilterValue,
});

const mapDispatchToProps = (dispatch) => ({
  onClickHandler: (FilterValue) =>
    dispatch(setVisibilityFilterValue(FilterValue)),
  setfilter: (filter) => dispatch(setVisibilityFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
