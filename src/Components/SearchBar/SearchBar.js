import React from "react";
import "./SearchBar.css";

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }
    search(searchTerm) {
        this.props.onSearch(searchTerm);
    }
    
    handleTermChange(e) {
        this.search(e.target.value);
    }
    render() {
    return (
      <div className="SeachBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
        <button clasName="SearchButton">SEARCH</button>
      </div>
    );
  }
}
