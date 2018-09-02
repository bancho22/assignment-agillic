import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

const EpisodeList = ({episodes}) => (
  <div className='show-overview'>
    {_.map(episodes, ({id, name}) => (
      <li key={id}>{name}</li>
    ))}
  </div>
)

EpisodeList.propTypes = {
  episodes: PropTypes.array.isRequired
}

export default EpisodeList
