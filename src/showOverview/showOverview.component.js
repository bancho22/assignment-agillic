import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import ReactHtmlParser from 'react-html-parser'

const ShowOverview = ({title, genres, rating, summary, imageUrl}) => (
  <div className='show-overview'>
    <strong><h1>{title}</h1></strong>
    <h2>Genres: {(genres && genres.length > 0) ? genres.join(', ') : 'N/A'}</h2>
    <h3>Rating: {rating || 'N/A'}</h3>
    <div>
      Summary: {(summary && summary.length > 0) ? ReactHtmlParser(summary) : 'N/A'}
    </div>
    {imageUrl ? (<img src={imageUrl} alt='show-poster' />) : (<p>No poster available</p>)}
  </div>
)

const mapStateToProps = ({show}) => ({
  title: show && show.name,
  genres: show && show.genres,
  rating: show && show.rating && show.rating.average,
  summary: show && show.summary,
  imageUrl: show && show.image && show.image.medium
})

ShowOverview.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
  rating: PropTypes.number,
  summary: PropTypes.string,
  imageUrl: PropTypes.string
}

export default connect(mapStateToProps)(ShowOverview)
