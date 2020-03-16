import React, { Component } from 'react'
import './components.css'

export default class Title extends Component {
  render() {
    return (
      <div data-testid = 'title' className="title-news">
        <h2> <span className="our-news">Our </span> latest news!</h2>
      </div>
    )
  }
}
