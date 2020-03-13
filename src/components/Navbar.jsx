import React, { Component } from 'react'
import './components.css'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-white mx-auto">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link " href="#">About</a>
      <a class="nav-item nav-link" href="#">Why Blockchain</a>
      <a class="nav-item nav-link" href="#">Company</a>
      <a class="nav-item nav-link " href="#" tabindex="-1" aria-disabled="true">Contact</a>
    </div>
  </div>
</nav>
      </div>
    )
  }
}
