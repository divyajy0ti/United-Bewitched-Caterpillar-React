import React from 'react'

import PropTypes from 'prop-types'

import './heading.css'

const Heading = (props) => {
  return (
    <div className={`heading-container ${props.rootClassName} `}>
      <span className="heading-text">{props.text}</span>
    </div>
  )
}

Heading.defaultProps = {
  rootClassName: '',
  text: 'YOU CAN CHOOSE ANY REGION',
}

Heading.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default Heading
