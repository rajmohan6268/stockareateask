const visibilityFilter = (
  state = {
    filter: "All",
    searchValue: "",
    FilterValue: "All",
    filterbyKey: "All",
  },
  action
) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      console.log(action, "SET_VISIBILITY_FILTER");

      return {
        ...state,
        filter: action.filter,
        filterbyKey: action.filter,
      };
    case "SET_VISIBILITY_FilterValue":
      console.log(action, "SET_VISIBILITY_FilterValue");
      return {
        ...state,
        FilterValue: action.value,
      };
    case "SET_VISIBILITY_SearchTerm":
      console.log(action, "SET_VISIBILITY_FilterValue");
      return {
        ...state,
        searchValue: action.value,
      };

    default:
      return state;
  }
};

export default visibilityFilter;
