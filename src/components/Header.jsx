import React, { Component } from 'react'
import './components.css'

export default class Header extends Component {
  render() {
    return (
      <div>
       <header data-testid = 'header'>
      <span style={{fontWeight: 'bold'}}> BLOCKCHAIN</span>CONSORTIUM
        </header>
        
      </div>
    )
  }
}
