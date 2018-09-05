import makeDebounce from 'redux-debounce-thunk'

export const showHasErrored = bool => ({
  type: 'SHOW_HAS_ERRORED',
  hasErrored: bool
})

export const showIsLoading = bool => ({
  type: 'SHOW_IS_LOADING',
  isLoading: bool
})

export const searchTextChanged = text => ({
  type: 'SEARCH_TEXT_CHANGED',
  searchText: text
})

export const showFetchDataSuccess = item => ({
  type: 'SHOW_FETCH_DATA_SUCCESS',
  item
})

const showFetchData = showName => dispatch => {
  dispatch(showIsLoading(true))

  const prepareNameForUrl = name => name.trim().replace(/\s+/g, '-').toLowerCase()
  fetch(`http://api.tvmaze.com/singlesearch/shows?q=${prepareNameForUrl(showName)}&embed=episodes`)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(showIsLoading(false))
      return response
    })
    .then(response => response.json())
    .then(show => dispatch(showFetchDataSuccess(show)))
    .catch(() => dispatch(showHasErrored(true)))
}

const debounceMs = 500
export const showFetchDataDebounced = makeDebounce(showFetchData, debounceMs)
