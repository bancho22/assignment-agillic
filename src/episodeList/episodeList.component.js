import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const formatNumber = number => (number < 10 ? `0${number}` : `${number}`)

const generateName = ({season, number, name}) => `S${formatNumber(season)}E${formatNumber(number)} ${name}`

const EpisodeList = ({episodes}) => (
  <div className='show-overview'>
    {_.map(episodes, ({id, url, name, season, number, image}) => (
      <li key={id}>
        {image && image.medium && <img src={image.medium} alt='episode-poster' />}
        {generateName({season, number, name})}
      </li>
    ))}
  </div>
)

const mapStateToProps = ({item}) => ({
  episodes: _.get(item, '_embedded.episodes')
})

EpisodeList.propTypes = {
  episodes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    url: PropTypes.string,
    name: PropTypes.string,
    season: PropTypes.number,
    number: PropTypes.number,
    image: PropTypes.shape({
      medium: PropTypes.string
    })
  }))
}

export default connect(mapStateToProps)(EpisodeList)
