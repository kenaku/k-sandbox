import React from 'react'
import _ from 'lodash'
import {TimelineMax, Power4} from 'gsap'
import css from './BullDemo.styl'
import InlineSVG from 'svg-inline-react'

const animationTypes = {
  scale: {
    scale: 0,
    opacity: 0,
    ease: Power4.easeOut,
    transformOrigin: 'center center',
  },
  flyIn: {
    scale: 0,
    opacity: 0,
    rotate: -20,
    x: 800,
    transformOrigin: 'center center',
    ease: Power4.easeOut,
  },
  exploded: {
    scale: 0.7,
    ease: Power4.easeOut,
    transformOrigin: 'center center',
  }
}

const animateTo = {
  opacity: 1,
  scale: 1,
  rotate: 0,
  x: 0,
}


export default React.createClass({

  getInitialState() {
    return {
      polygons: []
    }
  },

  propTypes: {
    animationType: React.PropTypes.string.isRequired
  },

  componentDidMount() {
    this.handleAnimation()
  },

  componentDidUpdate(nextProps){
    this.handleAnimation()
  },

  handleAnimation() {
    const tmax_opts = {delay: 1}
    const { animationType } = this.props
    const stagger  = 0.002
    const duration = .2
    const polygons = document.querySelectorAll("#bull polygon")
    const timeline = new TimelineMax(tmax_opts)
    timeline.staggerFrom(
      polygons,
      duration,
      animationTypes[animationType],
      stagger,
      0,
    )
  },

  handleClick() {
    const tmax_opts2 = {
      repeat: 1,
      yoyo: true
    }
    const stagger  = -0.0015
    const polygons = document.querySelectorAll("#bull polygon")
    const timeline = new TimelineMax(tmax_opts2)
    const duration = .2
    timeline.staggerFromTo(
      polygons,
      duration,
      animateTo,
      animationTypes['exploded'],
      stagger,
      0
    )
  },

  render() {
    return (
      <div className={css.bull} onClick={() => this.handleClick()}>
       <InlineSVG src={require('./assets/bull.svg')} />
      </div>
    )
  },
})
