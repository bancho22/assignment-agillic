import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../index.reducer'
import {name, genres, rating, summary, _embedded} from './mock.json'

const {episodes} = _embedded
const searchReducer = {
  item: {title: name, genres, rating, summary, episodes},
  searchText: ''
}

export default function configureStore(initialState = {searchReducer}) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  )
}
