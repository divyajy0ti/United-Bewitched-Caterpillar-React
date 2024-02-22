import React from 'react'

import PropTypes from 'prop-types'

import './faq-item.css'

const FaqItem = (props) => {
  return (
    <div className={`faq-item-frame1171275098 ${props.rootClassName} `}>
      <span className="faq-item-text">{props.name}</span>
      <img
        alt="ChevronLeft1202"
        src="/external/chevronleft1202-gkok-200h.png"
        className="faq-item-chevron-left"
      />
    </div>
  )
}

FaqItem.defaultProps = {
  rootClassName: '',
  name: 'Gateway staking',
}

FaqItem.propTypes = {
  rootClassName: PropTypes.string,
  name: PropTypes.string,
}

export default FaqItem
