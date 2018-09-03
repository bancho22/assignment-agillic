import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const ShowOverview = ({title, genres, rating, summary}) => (
  <div className='show-overview'>
    <h1>{title}</h1>
    <h2>Genres: {_.join(genres, ', ')}</h2>
    <h3>Rating: {rating}</h3>
    <p>Summary: {summary}</p>
  </div>
)

const mapStateToProps = ({item}) => ({
  title: _.get(item, 'name'),
  genres: _.get(item, 'genres'),
  rating: _.get(item, 'rating.average'),
  summary: _.get(item, 'summary')
})

ShowOverview.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  rating: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(ShowOverview)
