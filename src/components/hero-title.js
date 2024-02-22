import React from 'react'

import PropTypes from 'prop-types'

import './hero-title.css'

const HeroTitle = (props) => {
  return (
    <div className={`hero-title-container ${props.rootClassName} `}>
      <span className="hero-title-text">
        <span className="">
          STAKING
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="hero-title-text2">THAT MEANS</span>
        <span className=""> BUSINESS</span>
      </span>
    </div>
  )
}

HeroTitle.defaultProps = {
  rootClassName: '',
}

HeroTitle.propTypes = {
  rootClassName: PropTypes.string,
}

export default HeroTitle
