import React from 'react'

import PropTypes from 'prop-types'

import './art-bottom.css'

const ArtBottom = (props) => {
  return (
    <div className={`art-bottom-container ${props.rootClassName} `}>
      <img
        alt="bottomart1210"
        src={props.bottomartSrc}
        className="art-bottom-bottomart"
      />
    </div>
  )
}

ArtBottom.defaultProps = {
  rootClassName: '',
  bottomartSrc: '/external/bottomart1210-nc0l-200h.png',
  bottomartAlt: 'bottomart1210',
}

ArtBottom.propTypes = {
  rootClassName: PropTypes.string,
  bottomartSrc: PropTypes.string,
  bottomartAlt: PropTypes.string,
}

export default ArtBottom
