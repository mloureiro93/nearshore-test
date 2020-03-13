import React, { Component } from 'react'
import './components.css'

export default class Jumbotron extends Component {
  render() {
    return (
      <div class="jumbotron jumbotron-fluid">
  <div class="container-fluid">
    <h1 class="display-4">We bring blockchain to life!</h1>
   <button className="custom-btn" 
   style={{background: 'transparent', border: ' 1px solid white', borderRadius: '0%' }}>
   LEARN MORE
   </button>
  </div>
</div>
    )
     
    
  }
}
