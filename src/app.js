import React from 'react'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'

import Show from './show/show.component'
import SearchBar from './searchBar/searchBar.component'

import {name, genres, rating, summary, image, _embedded} from './store/mock.json'
// import logo from './logo.svg'

const initState = {
  show: {name, genres, rating, summary, image, _embedded},
  searchText: ''
}

const store = configureStore(initState)

const App = () => (
  <Provider store={store}>
    <div className='app'>
      <header className='app-header'>
        <SearchBar />
      </header>
      <Show />
    </div>
  </Provider>
)

export default App
