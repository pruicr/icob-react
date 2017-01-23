import React from 'react'

import { Footer } from './Footer'
import { Header } from './Header'
import { Instagram } from './Instagram'

export class Root extends React.Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <div className="row content">
          {this.props.children}
          <Instagram/>
        </div>
        <Footer/>
      </div>
    )
  }
}
