import React from 'react'

import PropTypes from 'prop-types'

import './card-case-study.css'

const CardCaseStudy = (props) => {
  return (
    <div className={`card-case-study-frame1171275065 ${props.rootClassName} `}>
      <div className="card-case-study-top-bit">
        <img
          alt="IMAGE5d951653caa6c4927d213859d314e5d2c933bdd810248"
          src={props.logo}
          className="card-case-study-image5d951653caa6c4927d213859d314e5d2c933bdd81"
        />
        <img
          alt="Left0249"
          src="/external/left0249-ar58-200h.png"
          className="card-case-study-left"
        />
      </div>
      <span className="card-case-study-text">{props.text}</span>
    </div>
  )
}

CardCaseStudy.defaultProps = {
  text: 'We run validators on behalf of Lido. We’re part of DUCK initiative',
  logo: '/external/image5d951653caa6c4927d213859d314e5d2c933bdd810248-p2nr-200h.png',
  rootClassName: '',
}

CardCaseStudy.propTypes = {
  text: PropTypes.string,
  logo: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default CardCaseStudy
