import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../index.reducer'

export default function configureStore(initialState = {}) {
  console.log('initState', initialState)
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  )
}
