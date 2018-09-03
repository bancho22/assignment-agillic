import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {itemFetchData} from './searchBar.actions'

const SearchBar = ({fetchData, searchText}) => {
  const lookForShow = ({value}) => fetchData(_.isString(value) ? value : '')

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
  fetchData: url => dispatch(itemFetchData(url))
})

SearchBar.propTypes = {
  fetchData: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
