import React, { Component } from 'react'
import './components.css'
import facebook from './../images/Facebook.png'
import instagram from './../images/Instagram.png'
import twitter from './../images/Twitter.png'
import pinterest from './../images/Pinterest.png'

export default class Footer extends Component {
  render() {
    return (
      <div data-testid = 'footer'>
        <footer className="footer mt-auto py-3">
  <div className="container">
    <div className="footer-text">
    <a href="#">About</a>
    <a href="#">Why Blockchain</a>
    <a href="#">Company</a>
    <a href="#">Contact</a>
  </div>
  <div className="social-media">
    <a href=""><img src={facebook} alt="facebook"/></a>
    <a href=""><img src={twitter} alt="twitter"/></a>
    <a href=""><img src={instagram} alt="instagram"/></a>
    <a href=""><img src={pinterest} alt="pinterest"/></a>
  </div>
  <div className="copyright">
  <p>  &copy; 2020 The Blockchain Consortium. All rights reserved</p>
  </div>
  </div>
</footer>
      </div>
    )
  }
}
