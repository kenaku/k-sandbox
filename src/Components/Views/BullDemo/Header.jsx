import React from 'react'
import _ from 'lodash'
import css from './Header.styl'
import logo from './assets/logo.png'

export default React.createClass({
  getInitialState() {
    return {
      scattered: true,
    }
  },

  render() {
    return (
      <header className={css.header}>
        <img className={css.logo} src={logo} alt="logo"/>
        <nav className={css.nav}>
          <a href="#">Metrics</a>
          <a href="#">How it works</a>
          <a className={css.downloadButton} href="#" data-title="Download App"/>
        </nav>
      </header>
    )
  },
})
