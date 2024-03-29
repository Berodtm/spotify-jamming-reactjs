import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' }; // Add state to hold the input value

    // Bind methods to this class
    this.handleSearch = this.handleSearch.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  // Method to update state with the input value
  handleTermChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  // Method to call onSearch prop with the current input value
  handleSearch() {
    this.props.onSearch(this.state.searchTerm);
  }

  render() {
    return (
      <div className="SearchBar">
        <input
          placeholder="Enter a song, album, or artist"
          value={this.state.searchTerm} // Controlled component
          onChange={this.handleTermChange} // Update state on input change
        />
        <button onClick={this.handleSearch}>Search</button> {/* Call handleSearch when clicked */}
      </div>
    );
  }
}

export default SearchBar;
