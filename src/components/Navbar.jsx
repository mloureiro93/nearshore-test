import React, { Component } from 'react'
import './components.css'

export default class Navbar extends Component {
  render() {
    return (
      <div data-testid = 'navbar'>
        <nav className="navbar navbar-expand-lg navbar-light bg-white mx-auto">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link " href="#">About</a>
      <a className="nav-item nav-link" href="#">Why Blockchain</a>
      <a className="nav-item nav-link" href="#">Company</a>
      <a className="nav-item nav-link " href="#" tabIndex="-1" aria-disabled="true">Contact</a>
    </div>
  </div>
</nav>
      </div>
    )
  }
}
