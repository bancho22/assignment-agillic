import React from 'react'
import logo from './logo.svg'

const App = () => (
  <div className='app'>
    <header className='app-header'>
      <img src={logo} className='app-logo' alt='logo' />
      <h1 className='app-title'>Welcome to React</h1>
    </header>
    <p className='app-intro'>
      THIS IS AMAZING
    </p>
  </div>
)

App.propTypes = {}

export default App
