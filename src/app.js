import React from 'react'
import _ from 'lodash'
import logo from './logo.svg'
import {name, genres, rating, summary} from './mock.json'

import SearchBar from './searchBar/searchBar.component'
import ShowOverview from './showOverview/showOverview.component'
import EpisodeList from './episodeList/episodeList.component'

const App = () => (
  <div className='app'>
    <header className='app-header'>
      <img src={logo} className='app-logo' alt='logo' />
      <SearchBar />
    </header>
    <content className='app-content'>
      <ShowOverview title={name} genres={_.join(genres, ', ')} rating={rating.average} summary={summary} />
      <EpisodeList />
    </content>
  </div>
)

App.propTypes = {}

export default App
