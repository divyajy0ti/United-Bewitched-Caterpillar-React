import React from 'react'

import PropTypes from 'prop-types'

import './card-region.css'

const CardRegion = (props) => {
  return (
    <div className={`card-region-regioncard ${props.rootClassName} `}>
      <div className="card-region-image-container">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="card-region-image"
        />
      </div>
      <div className="card-region-description-container">
        <span className="card-region-text">{props.text1}</span>
      </div>
      <span className="card-region-text1">{props.text}</span>
    </div>
  )
}

CardRegion.defaultProps = {
  text1:
    'Puerto Rico offers significant tax advantages for cryptocurrency and blockchain companies under Acts 20 and 22. This can mean reduced capital gains and business taxes.',
  rootClassName: '',
  text: 'Learn more',
  imageAlt: 'image',
  imageSrc: '/external/tq_kkqsckpdb4-82h-1500w.png',
}

CardRegion.propTypes = {
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default CardRegion
