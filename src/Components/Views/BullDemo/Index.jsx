import React from 'react'
import {TweenMax, Power4} from 'gsap'
import _ from 'lodash'
import css from './Index.styl'
import Bull from './BullGSAP'
import Header from './Header'
import CSSTransition from 'react-addons-css-transition-group'

export default React.createClass({

  getInitialState() {
    return {
      animationType: 'scale',
    }
  },

  componentDidMount() {
    // TweenMax.from(header, 1, {opacity: 0, y: -100, ease: Power3.easeOut, delay:3});
    // TweenMax.from(text, 2, {opacity: 0, ease: Power4.easeOut, delay:1});
    // TweenMax.from(animationSelector, 1, {y: -100, opacity: 0, ease: Power4.easeOut, delay:4, clearProps:'all'});
  },

  render() {
    const {animationType} = this.state
    return (
      <section className={css.wrap}>
        <Header />
        <div ref="animationSelector" className={css.animationSelector}>
          Выбрать анимацию<br/>
          <button onClick={() => this.setState({animationType: 'scale'})}>scale</button>
          <button onClick={() => this.setState({animationType: 'flyIn'})}>flyIn</button>
        </div>
        <div className={css.container}>
           <CSSTransition
              transitionName={css}
              transitionAppear={true}
              transitionAppearTimeout={2000}
              transitionEnter={false}
              transitionLeave={false}
            >
              <div className={css.mainText} ref="text">
                <h1>
                  Invest your intellect <br/>to earn dividends
                </h1>
                <p>
                  Become an investor <br/>of our Crowd Intelligence Fund, <br/>contribute your mental asset <br/>and supplement your income <br/>every month.
                </p>
              </div>
            </CSSTransition>
          <Bull animationType={animationType} />
        </div>
      </section>
    )
  },
})
