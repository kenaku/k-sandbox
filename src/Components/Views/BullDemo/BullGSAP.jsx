import React from 'react'
import _ from 'lodash'
import {TimelineMax, Power4} from 'gsap'
import css from './BullDemo.styl'
import bullData from './assets/bull'

const tmax_opts2 = {
  repeat: 1,
  yoyo: true
}

const animationTypes = {
  scale: {
    scale: 0,
    opacity: 0,
    ease: Power4.easeOut,
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
    const stagger  = 0.004
    const duration = .4
    const polygons = _.values(this.refs)
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
    const stagger  = 0.0045
    const polygons = _.values(this.refs)
    const timeline = new TimelineMax(tmax_opts2)
    const duration = .5
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
      <div className={css.bull}>
        <svg
          className="bull"
          viewBox="0 0 774 704"
          onClick={() => {this.handleClick()}}
        >
          {bullData.map(polygon => {
            const {id, fill, points} = polygon
            return <polygon ref={`polygon${id}`} key={id} fill={fill} points={points} />
          })}
        </svg>
      </div>
    )
  },
})
