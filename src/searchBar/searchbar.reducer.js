import {combineReducers} from 'redux'

const itemHasErrored = (state = false, action) => {
  switch (action.type) {
    case 'ITEM_HAS_ERRORED':
      return action.hasErrored
    default:
      return state
  }
}

const itemIsLoading = (state = false, action) => {
  switch (action.type) {
    case 'ITEM_IS_LOADING':
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

const item = (state = {}, action) => {
  switch (action.type) {
    case 'ITEM_FETCH_DATA_SUCCESS':
      return action.item
    default:
      return state
  }
}

export default combineReducers({
  itemHasErrored,
  itemIsLoading,
  searchText,
  item
})
