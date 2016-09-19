import classNames from 'classnames'
import React, { PropTypes } from 'react'
import styles from './styles.css'

const propTypes = {
  className: PropTypes.string,
}

const OctobluNavLogo = ({ className }) => {
  const classes = classNames(styles.root, className)

  return (
    <img
      className={classes}
      src="//d2zw6j512x6z0x.cloudfront.net/master/d48dc0bf063ecc1477d1163831ee8ff17efbbfae/assets/images/octoblu_logo.png"
    />
  )
}

OctobluNavLogo.propTypes = propTypes

export default OctobluNavLogo
