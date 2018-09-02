import React from 'react'
import PropTypes from 'prop-types'

const ShowOverview = ({title, genres, rating, summary}) => (
  <div className='show-overview'>
    <h1>{title}</h1>
    <h2>Genres: {genres}</h2>
    <h3>Rating: {rating}</h3>
    <p>Summary: {summary}</p>
  </div>
)

ShowOverview.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired
}

export default ShowOverview
