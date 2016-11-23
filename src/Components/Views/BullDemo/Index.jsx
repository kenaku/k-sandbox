import React from 'react'
import {TweenMax, Power1, Power3} from 'gsap'
import _ from 'lodash'
import css from './Index.styl'
import Bull from './BullGSAP'
import Header from './Header'

export default React.createClass({

  getInitialState() {
    return {
      animationType: 'flyIn',
    }
  },

  componentDidMount() {
    const {header, text, animationSelector} = this.refs
    TweenMax.from(header, 1, {opacity: 0, y: -100, ease: Power3.easeOut, delay:3});
    TweenMax.from(text, 3, {opacity: 0, ease: Power1.easeOut, delay:.5});
    TweenMax.from(animationSelector, 1, {y: -100, opacity: 0, ease: Power1.easeOut, delay:4, clearProps:'all'});
  },

  handleAnimationSelect(animationType) {

  },

  render() {
    const {animationType} = this.state
    return (
      <section className={css.wrap}>
        <div ref="header"><Header /></div>
        <div ref="animationSelector" className={css.animationSelector}>
          Выбрать анимацию<br/>
          <button onClick={() => this.setState({animationType: 'scale'})}>scale</button>
          <button onClick={() => this.setState({animationType: 'flyIn'})}>flyIn</button>
        </div>
        <div className={css.container}>
          <div className={css.mainText} ref="text">
            <h1>
              Invest your intellect <br/>to earn dividends
            </h1>
            <p>
              Become an investor <br/>of our Crowd Intelligence Fund, <br/>contribute your mental asset <br/>and supplement your income <br/>every month.
            </p>
          </div>
          <Bull animationType={animationType} />
        </div>
      </section>
    )
  },
})
