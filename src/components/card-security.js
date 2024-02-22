import React from 'react'

import PropTypes from 'prop-types'

import './card-security.css'

const CardSecurity = (props) => {
  return (
    <div className={`card-security-card-security ${props.rootClassName} `}>
      <span className="card-security-text">{props.heading}</span>
      <span className="card-security-text1">{props.text}</span>
    </div>
  )
}

CardSecurity.defaultProps = {
  rootClassName: '',
  text: 'Gateway.fm has undergone an annual audit by PwC in accordance with the International Financial Reporting Standards (IFRS) since 2021',
  heading: 'PwC audit',
}

CardSecurity.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
}

export default CardSecurity
