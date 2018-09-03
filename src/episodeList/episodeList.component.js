import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const EpisodeList = ({episodes}) => (
  <div className='show-overview'>
    {_.map(episodes, ({id, name}) => (
      <li key={id}>{name}</li>
    ))}
  </div>
)

const mapStateToProps = ({item}) => ({
  episodes: _.get(item, '_embedded.episodes')
})

EpisodeList.propTypes = {
  episodes: PropTypes.array
}

export default connect(mapStateToProps)(EpisodeList)
