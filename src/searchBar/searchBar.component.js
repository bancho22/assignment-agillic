import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {itemFetchDataDebounced, searchTextChanged} from './searchBar.actions'

const SearchBar = ({fetchData, setSearchText, searchText}) => {
  const lookForShow = ({value}) => {
    setSearchText(value)
    fetchData(_.isString(value) ? value : '')
  }

  return (
    <div className='search-bar'>
      <input type='text' value={searchText} onChange={event => lookForShow(event.target)} />
    </div>
  )
}

const mapStateToProps = ({searchText}) => ({
  searchText
})

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(itemFetchDataDebounced(url)),
  setSearchText: text => dispatch(searchTextChanged(text))
})

SearchBar.propTypes = {
  fetchData: PropTypes.func.isRequired,
  setSearchText: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
