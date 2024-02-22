import React from 'react'

import PropTypes from 'prop-types'

import './launchpad.css'

const Launchpad = (props) => {
  return (
    <div className="launchpad-launchpad">
      <div className="launchpad-launchpadcard">
        <span className="launchpad-text">{props.text}</span>
        <span className="launchpad-text1">
          <span>1. Connect your wallet;</span>
          <br></br>
          <span>2. Allocate assets;</span>
          <br></br>
          <span>3. Make up to 5.32 ARY.</span>
        </span>
        <div className="launchpad-frame1171275095">
          <span className="launchpad-text7">Connect wallet</span>
          <img
            alt={props.leftAlt}
            src={props.leftSrc}
            className="launchpad-left"
          />
        </div>
      </div>
      <img
        alt={props.imageAlt1}
        src={props.imageSrc1}
        className="launchpad-image"
      />
      <img
        alt={props.imageAlt2}
        src={props.imageSrc2}
        className="launchpad-image1"
      />
    </div>
  )
}

Launchpad.defaultProps = {
  text: 'Start staking today with Gateway Launchpad',
  leftAlt: 'Left1195',
  leftSrc: '/external/left1195-kd37-200h.png',
  imageSrc2: '/external/morediamonds11197-zr5n-200w.png',
  imageAlt2: 'image',
  imageAlt1: 'image',
  imageSrc: '2cb65311-3e90-46ef-aef4-952f3d1b60d7',
  imageSrc1: '/external/asdd11200-nol-300w-200w.png',
  imageAlt: 'image',
}

Launchpad.propTypes = {
  text: PropTypes.string,
  leftAlt: PropTypes.string,
  leftSrc: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default Launchpad
