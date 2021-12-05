exports.setVisibilityFilter = ({ filter }) => {
  return {
    type: "SET_VISIBILITY_FILTER",
    filter,
  };
};
exports.setVisibilityFilterValue = ({ value }) => {
  return {
    type: "SET_VISIBILITY_FilterValue",
    value,
  };
};

exports.setSearchTerm = ({ value }) => {
  return {
    type: "SET_VISIBILITY_SearchTerm",
    value,
  };
};
exports.addWareHouse = (value) => {

  console.log(value)
  return {
    type: "ADD_WAREHOUSE",
    value,
  };
};

exports.updateWareHouse = ({ value, id }) => {
  return {
    type: "UPDATE_WAREHOUSE",
    value,
    id,
  };
};

exports.deleteWareHouse = ({ id }) => {
  return {
    type: "DELETE_WAREHOUSE",
    id,
  };
};
