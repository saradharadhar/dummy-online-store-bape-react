import React, { Component} from 'react'

export default class Header extends Component {
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
                <header id={'header'}>
                  <div className={'logo'}>
                    Bape
                  </div>
                  <div className={'menu'}>
                    <nav>
                      <a href={'/lookbook.html'}>
                        Home
                      </a>
                      <a href={'/lookbook.html'}>
                        Lookbook
                      </a>
                      <a href={'/lookbook.html'}>
                        Mens
                      </a>
                      <a href={'/lookbook.html'}>
                        Womens
                      </a>
                      <a href={'/lookbook.html'}>
                        News
                      </a>
                    </nav>
                  </div>
                </header>
            )
  }
}
