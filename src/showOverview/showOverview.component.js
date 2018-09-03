import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const ShowOverview = ({title, genres, rating, summary}) => (
  <div className='show-overview'>
    <h1>{title}</h1>
    <h2>Genres: {genres}</h2>
    <h3>Rating: {rating}</h3>
    <p>Summary: {summary}</p>
  </div>
)

const mapStateToProps = ({searchText}) => ({
  title: searchText
})

const mapDispatchToProps = () => {}

ShowOverview.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowOverview)
