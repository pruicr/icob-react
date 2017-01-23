import React from 'react'
import { IndexLink, Link } from 'react-router'

export class Nav extends React.Component {
  constructor() {
    super()
    this.state = {collapsed: true}
  }
  toggleCollapse() {
    const collapsed = !this.state.collapsed
    this.setState({collapsed})
  }
  render() {
    const { location } = this.props
    const { collapsed } = this.state
    const homeClass = window.location.pathname === "/" ? "active" : ""
    const menuClass = window.location.pathname.match(/^\/menu/) ? "active" : ""
    const scheduleClass = window.location.pathname.match(/^\/schedule/) ? "active" : ""
    const cateringClass = window.location.pathname.match(/^\/catering/) ? "active" : ""
    const navClass = collapsed ? "collapse" : ""
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" onClick={this.toggleCollapse.bind(this)}>
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
          </div>
          <div className={"navbar-collapse " + navClass}>
            <ul className="nav navbar-nav">
              <li className={homeClass}><IndexLink to={"/"} onClick={this.toggleCollapse.bind(this)}>HOME</IndexLink></li>
              <li className={menuClass}><IndexLink to={"/menu"} onClick={this.toggleCollapse.bind(this)}>MENU</IndexLink></li>
              <li className={scheduleClass}><IndexLink to={"/schedule"} onClick={this.toggleCollapse.bind(this)}>SCHEDULE</IndexLink></li>
              <li className={cateringClass}><IndexLink to={"/catering"} onClick={this.toggleCollapse.bind(this)}>CATERING</IndexLink></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
