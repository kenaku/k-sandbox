import React from 'react'
import _ from 'lodash'
import {TimelineMax, Power2} from 'gsap'
import css from './BullDemo.styl'
import bullData from './assets/bull'

const tmax_opts = {
  delay: 0.5,
}
const tmax_opts2 = {
  repeat: 1,
  yoyo: true
}

const timeline = new TimelineMax(tmax_opts)
const bullStagger  = 0.0035
const bullDuration = .4

const bullScattered = {
  scale: 0,
  rotate: -20,
  opacity: 0,
  x: 900,
  transformOrigin: 'center center',
  ease: Power2.easeOut
}

const bullWhole = {
  opacity: 1,
  scale: 1,
  x: 0,
  rotate: 0,
}

const bullExploded = {
  opacity: .5,
  scale: .7,
  x: 0,
  ease: Power2.easeOut
}

export default React.createClass({

  getInitialState() {
    return {
      scattered: true,
    }
  },

  componentDidMount() {
    this.handleAnimation()
  },

  handleAnimation() {
    const bullPolygons = _.values(this.refs)
    timeline.staggerFromTo(bullPolygons, bullDuration, bullScattered, bullWhole, bullStagger, 0)
  },

  handleClick() {
    const bullPolygons = _.values(this.refs)
    const timeline = new TimelineMax(tmax_opts2)
    timeline.staggerFromTo(bullPolygons, bullDuration, bullWhole, bullExploded, bullStagger, 0)
  },

  render() {
    return (
      <section className={css.wrap}>
        <div className={css.container}>
          <div
            className={css.bull}
            onClick={() => {this.handleClick()}}
          >
            <svg className="bull" viewBox="0 0 774 704">
              {bullData.map(polygon => {
                const {id, fill, points} = polygon
                return <polygon ref={`polygon${id}`} key={id} fill={fill} points={points} />
              })}
            </svg>
          </div>
        </div>
      </section>
    )
  },
})
