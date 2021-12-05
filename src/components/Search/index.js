import React from "react";

class Search extends React.Component {
  render() {
    const { value, onChange, children } = this.props;
    return (
      <div>
        {children}
        <input
          className="px-4 py-1 mb-4 border shadow-sm focus:outline-none"
          placeholder="Search by Warehouse Name"
          type="search"
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default Search;
