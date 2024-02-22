import React from 'react'

import PropTypes from 'prop-types'

import './card-token.css'

const CardToken = (props) => {
  return (
    <div className={`card-token-token ${props.rootClassName} `}>
      <div className="card-token-content">
        <div className="card-token-top-container">
          <div className="card-token-logo">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="card-token-image"
            />
          </div>
          <div className="card-token-description">
            <span className="card-token-text">{props.label}</span>
            <span className="card-token-text1">{props.name}</span>
          </div>
        </div>
        <img
          alt="Line50205"
          src="/external/line50205-24l.svg"
          className="card-token-separator"
        />
        <span className="card-token-text2">{props.apr}</span>
      </div>
    </div>
  )
}

CardToken.defaultProps = {
  rootClassName: '',
  apr: '4.2% APR',
  imageSrc: '/external/ethereum-logo.svg',
  label: 'ETH',
  name: 'Ethereum',
  imageAlt: 'image',
}

CardToken.propTypes = {
  rootClassName: PropTypes.string,
  apr: PropTypes.string,
  imageSrc: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default CardToken
