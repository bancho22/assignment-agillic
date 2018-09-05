import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const formatNumber = number => (number < 10 ? `0${number}` : `${number}`)

const generateSeeXyyString = ({season, number}) => `S${formatNumber(season)}E${formatNumber(number)}`

const EpisodeList = ({episodes}) => (
  <div>
    <h2>Episodes</h2>
    <div className='episode-list'>
      {episodes.map(({id, url, name, season, number, image}) => (
        <div className='episode-container'>
          <div key={id} className='episode-thumb'>
            {image && image.medium && <img src={image.medium} alt='episode-poster' />}
            <div className='episode-meta'>
              <span className='episode-seexyy'>{generateSeeXyyString({season, number})}</span>
              <span className='episode-name'>{name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

const mapStateToProps = ({show}) => ({
  episodes: show && show._embedded && show._embedded.episodes
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
