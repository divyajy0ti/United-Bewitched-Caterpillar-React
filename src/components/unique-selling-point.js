import React from 'react'

import PropTypes from 'prop-types'

import './unique-selling-point.css'

const UniqueSellingPoint = (props) => {
  return (
    <div className="unique-selling-point-unique-selling-point">
      <img
        alt={props.button1Alt}
        src={props.button1Src}
        className="unique-selling-point-button1"
      />
      <span className="unique-selling-point-text">{props.text}</span>
    </div>
  )
}

UniqueSellingPoint.defaultProps = {
  text: 'Only high security data centers',
  button1Src: '/external/button10141-7sg-200h.png',
  button1Alt: 'button10141',
}

UniqueSellingPoint.propTypes = {
  text: PropTypes.string,
  button1Src: PropTypes.string,
  button1Alt: PropTypes.string,
}

export default UniqueSellingPoint
