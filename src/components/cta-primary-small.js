import React from 'react'

import PropTypes from 'prop-types'

import './cta-primary-small.css'

const CTAPrimarySmall = (props) => {
  return (
    <div className="cta-primary-small-primary-cta-small">
      <span className="cta-primary-small-text">{props.text}</span>
    </div>
  )
}

CTAPrimarySmall.defaultProps = {
  text: 'Personal setup ',
}

CTAPrimarySmall.propTypes = {
  text: PropTypes.string,
}

export default CTAPrimarySmall
