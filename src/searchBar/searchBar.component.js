import React from 'react'

class SearchBar extends React.Component {
  state = {
    searchText: ''
  }

  updateSearchText = ({text: searchText}) => this.setState({searchText})

  render = () => (
    <div className='search-bar'>
      <input type='text' value={this.state.searchText} onChange={this.updateSearchText} />
    </div>
  )
}

SearchBar.propTypes = {}

export default SearchBar
