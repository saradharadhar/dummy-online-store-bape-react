import React, { Component} from 'react'

export default class ContentArea extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (
      <section id={'content-area'}>
        <div className={'col-md-6 model'}>
          <img src={'/img/bape2.png'}/>
        </div>
        <div className={'col-md-6 info'}>
          <div className={'insider'}>
            <h5>MENS</h5>
            <h1>JACKET DRIPPING SAUCE</h1>
            <p>I'm baby tote bag twee kombucha selfies. Dreamcatcher neutra kitsch ugh, brooklyn chambray hexagon pok pok shabby chic. Subway tile cold-pressed YOLO mlkshk, marfa selfies shaman. Gochujang coloring book disrupt tbh offal chia, humblebrag direct trade marfa narwhal seitan. Fam mixtape succulents literally vice glossier. Cliche gentrify aesthetic, tilde marfa fanny pack 8-bit la croix drinking vinegar.
            </p>
            <div className={'size'}>
              <div className={'title'}>
                sizes
              </div>
              <ul className={'sizes'}>
                <li className={'circle'}>S</li>
                <li className={'circle'}>M</li>
                <li className={'circle'}>L</li>
                <li className={'semi-circle'}>XL</li>
                <li className={'semi-circle'}>XXL</li>
                <li className={'semi-circle'}>CUSTOM</li>
              </ul>
            </div>
            <div className={'action-btns'}>
              <a className={'col-md-6 red-hollow-btn'}>
                <span className={'price'}>
                  $232
                </span>
                add to cart
              </a>
              <a className={'col-md-6 lightgrey-btn'}>
                find a store
              </a>
            </div>
          </div>
        </div>
      </section>
            )
  }
}
