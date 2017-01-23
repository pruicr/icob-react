import React from 'react'
import { render } from 'react-dom'
import { browserHistory, IndexRoute, Redirect, Route, Router } from 'react-router'

import { Root } from './components/Root'
import { Home } from './components/Home'
import { Menu } from './components/Menu'
import { Schedule } from './components/Schedule'
import { Catering } from './components/Catering'

require('./bootstrap.min.css')
require('./styles.css')

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path={'/'} component={Root}>
          <IndexRoute component={Home}/>
          <Route path={'/menu'} component={Menu}/>
          <Route path={'/schedule'} component={Schedule}/>
          <Route path={'/catering'} component={Catering}/>
          <Redirect from="*" to={"/"}/>
        </Route>
      </Router>
    )
  }
}

render(<App/>, window.document.getElementById('app'))
