import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import ReactHtmlParser from 'react-html-parser'

const ShowOverview = ({title, genres, rating, summary, imageUrl}) => (
  <div className='show-overview'>
    <strong><h1>{title}</h1></strong>
    <h2>Genres: {!_.isEmpty(genres) ? _.join(genres, ', ') : 'N/A'}</h2>
    <h3>Rating: {_.isNumber(rating) ? rating : 'N/A'}</h3>
    <div>
      Summary: {!_.isEmpty(summary) ? ReactHtmlParser(summary) : 'N/A'}
    </div>
    <img src={imageUrl} alt='show-poster' />
  </div>
)

const mapStateToProps = ({item}) => ({
  title: _.get(item, 'name'),
  genres: _.get(item, 'genres'),
  rating: _.get(item, 'rating.average'),
  summary: _.get(item, 'summary'),
  imageUrl: _.get(item, 'image.medium')
})

ShowOverview.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
  rating: PropTypes.number,
  summary: PropTypes.string,
  imageUrl: PropTypes.string
}

export default connect(mapStateToProps)(ShowOverview)
