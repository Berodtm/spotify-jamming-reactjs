import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' }; 

   
    this.handleSearch = this.handleSearch.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  
  handleTermChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

 
  handleSearch() {
    this.props.onSearch(this.state.searchTerm);
  }

  render() {
    return (
      <div className="SearchBar">
        <input
          placeholder="Enter a song, album, or artist"
          value={this.state.searchTerm} 
          onChange={this.handleTermChange} 
        />
        <button onClick={this.handleSearch}>Search</button> 
      </div>
    );
  }
}

export default SearchBar;
