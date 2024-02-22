import React from 'react'

import PropTypes from 'prop-types'

import './cta-primary.css'

const CTAPrimary = (props) => {
  return (
    <div className="cta-primary-primary-cta">
      <div className="cta-primary-container">
        <span className="cta-primary-text">{props.text}</span>
      </div>
    </div>
  )
}

CTAPrimary.defaultProps = {
  text: 'GET PERSONAL SETUP',
}

CTAPrimary.propTypes = {
  text: PropTypes.string,
}

export default CTAPrimary
