import makeDebounce from 'redux-debounce-thunk'

export const itemHasErrored = bool => ({
  type: 'ITEM_HAS_ERRORED',
  hasErrored: bool
})

export const itemIsLoading = bool => ({
  type: 'ITEM_IS_LOADING',
  isLoading: bool
})

export const searchTextChanged = text => ({
  type: 'SEARCH_TEXT_CHANGED',
  searchText: text
})

export const itemFetchDataSuccess = item => ({
  type: 'ITEM_FETCH_DATA_SUCCESS',
  item
})

const itemFetchData = name => dispatch => {
  dispatch(itemIsLoading(true))
  
  const prepareNameForUrl = name => name.trim().replace(/\s+/g, '-').toLowerCase()
  fetch(`http://api.tvmaze.com/singlesearch/shows?q=${prepareNameForUrl(name)}&embed=episodes`)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(itemIsLoading(false))
      return response
    })
    .then(response => response.json())
    .then(item => {
      console.log('item', item)
      dispatch(itemFetchDataSuccess(item))
    })
    .catch(() => dispatch(itemHasErrored(true)))
}

const debounceMs = 500
export const itemFetchDataDebounced = makeDebounce(itemFetchData, debounceMs)
