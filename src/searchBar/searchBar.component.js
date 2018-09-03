import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {itemFetchDataDebounced, searchTextChanged} from './searchBar.actions'

const SearchBar = ({fetchData, setSearchText, searchText}) => {
  const lookForShow = ({value}) => {
    setSearchText(value)
    fetchData(_.isString(value) ? value : '')
  }

  return (
    <div className='search-bar'>
      <FontAwesomeIcon className='search-icon' icon={faSearch} />
      <div className='mdl-textfield mdl-js-textfield'>
        <input className='mdl-textfield__input search-bar-input' id='search-bar-field' type='text' value={searchText} onChange={event => lookForShow(event.target)} />
        <label className='mdl-textfield__label search-bar-input' htmlFor='search-bar-field'>Rick and Morty</label>
        <div className='mdc-line-ripple' />
      </div>
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
