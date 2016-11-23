import React from 'react'
import {Motion, spring} from 'react-motion'
import _ from 'lodash'
import css from './BullDemo.styl'
import bullPolygons from './assets/bull'

export default React.createClass({

  getInitialState() {
    return {
      start: false,
      uniqPolygons: [],
    }
  },

  componentWillMount() {
    this.setState({
      uniqPolygons: _.sampleSize(bullPolygons, 40).map(a => a.id),
    })
  },

  componentDidMount() {
    this.setState({
      start: true
    })
  },

  renderUniqPolygon(polygon) {
    const {start} = this.state
    const moveX = _.random(500, 900)
    const moveY = _.random(-300, 0)
    const moveZ = _.random(1.3, 2)
    return (
      <g key={polygon.id}>
        <polygon fill="#57006D" points={polygon.points} />
        <Motion
          style={{
            x: spring(!start ? moveX : 0),
            y: spring(!start ? moveY : 0),
            z: spring(!start ? moveZ : 1)
          }}
        >
          {value => {
            const {x, y, z} = value
            const style = {
              zIndex: 100,
              transform: `translate(${x}px, ${y}px) scale(${z})`
            }
            return (
              <polygon
                className="uniq"
                fill={polygon.fill}
                style={style}
                points={polygon.points}
              />
            )
          }}
        </Motion>
      </g>
    )
  },
  renderPolygon(polygon) {
    const {uniqPolygons} = this.state
    const node = _.includes(uniqPolygons, polygon.id)
      ? this.renderUniqPolygon(polygon)
      : <polygon key={polygon.id} fill={polygon.fill} points={polygon.points} />
    return node

  },
  render() {
    const {start} = this.state
    return (
      <section className={css.wrap}>
        <div className={css.container}>
          <Motion
            defaultStyle={{x: 800, y: 0}}
            style={{x: spring(0), y: spring(0)}}
          >
            {value => {
              const {x, y} = value
              return (
                <div
                  className={css.bull}
                  onClick={() => { this.setState({start: !start}) }}
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  <svg className="bull" viewBox="0 0 774 704">
                    {bullPolygons.map((polygon, id) => this.renderPolygon(polygon, id))}
                  </svg>
                </div>
              )
            }}
          </Motion>
        </div>
      </section>
    )
  },
})
