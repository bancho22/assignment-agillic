import {combineReducers} from 'redux'

const showHasErrored = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_HAS_ERRORED':
      return action.hasErrored
    default:
      return state
  }
}

const showIsLoading = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_IS_LOADING':
      return action.isLoading
    default:
      return state
  }
}

const searchText = (state = '', action) => {
  switch (action.type) {
    case 'SEARCH_TEXT_CHANGED':
      return action.searchText
    default:
      return state
  }
}

const show = (state = {}, action) => {
  switch (action.type) {
    case 'SHOW_FETCH_DATA_SUCCESS':
      return action.item
    default:
      return state
  }
}

export default combineReducers({
  showHasErrored,
  showIsLoading,
  searchText,
  show
})
