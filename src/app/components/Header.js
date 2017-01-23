import React from 'react'

import { Nav } from './Nav'

export class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="headerlogo">
          <img src="../images/logo.png" alt="It Cannoli Be Logo"/>
        </div>
        <Nav location={window.location}/>
      </header>
    )
  }
}
