import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import ShowOverview from './showOverview/showOverview.component'
import EpisodeList from './episodeList/episodeList.component'

const Show = ({showIsLoading}) => (
  showIsLoading
    ?
    (
      <div className='app-content'>
        <div className='mdl-progress mdl-js-progress mdl-progress__indeterminate' />
      </div>
    )
    :
    (
      <content className='app-content'>
        <ShowOverview />
        <EpisodeList />
      </content>
    )
)

const mapStateToProps = ({showIsLoading}) => ({showIsLoading})

Show.propTypes = {
  showIsLoading: PropTypes.bool.isRequired
}

export default connect(mapStateToProps)(Show)
