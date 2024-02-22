import React from 'react'

import PropTypes from 'prop-types'

import './footer-link.css'

const FooterLink = (props) => {
  return (
    <div className="footer-link-container">
      <span className="footer-link-text">{props.text}</span>
    </div>
  )
}

FooterLink.defaultProps = {
  text: 'Case studies',
}

FooterLink.propTypes = {
  text: PropTypes.string,
}

export default FooterLink
