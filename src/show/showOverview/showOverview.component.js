import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import ReactHtmlParser from 'react-html-parser'

const ShowOverview = ({title, genres, rating, summary, imageUrl}) => (
  <div className='show-overview'>
    {imageUrl ? (<img src={imageUrl} alt='show-poster' />) : (<p>No poster available</p>)}
    <strong><h1 className='show-title'>{title}</h1></strong>
    <div className='show-genres'>
      <span className='bold'>Genres:&nbsp;</span><span>{(genres && genres.length > 0) ? genres.join(', ') : 'N/A'}</span>
    </div>
    <div className='show-rating'>
      <span className='bold'>Rating:&nbsp;</span><span>{rating || 'N/A'}</span>
    </div>
    <div className='show-summary'>
      <span className='bold'>Summary:&nbsp;</span><p className='summary-text'>{(summary && summary.length > 0) ? ReactHtmlParser(summary) : 'N/A'}</p>
    </div>
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
