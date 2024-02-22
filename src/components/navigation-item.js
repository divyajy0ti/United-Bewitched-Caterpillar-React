import React from 'react'

import PropTypes from 'prop-types'

import './navigation-item.css'

const NavigationItem = (props) => {
  return (
    <div className="navigation-item-container">
      <span className="navigation-item-text">{props.name}</span>
    </div>
  )
}

NavigationItem.defaultProps = {
  name: 'Case studies',
}

NavigationItem.propTypes = {
  name: PropTypes.string,
}

export default NavigationItem
