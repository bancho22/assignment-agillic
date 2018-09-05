import React from 'react'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'

import SearchBar from './searchBar/searchBar.component'
import ShowOverview from './showOverview/showOverview.component'
import EpisodeList from './episodeList/episodeList.component'

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
        {/* <img src={logo} className='app-logo' alt='logo' /> */}
        <SearchBar />
      </header>
      <content className='app-content'>
        <ShowOverview />
        <EpisodeList />
      </content>
    </div>
  </Provider>
)

export default App
