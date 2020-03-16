import React, { Component } from 'react'
import './components.css'
import mountain from './../images/mountain.png'
import bridge from './../images/bridge.png'
import flower from './../images/flower.png'

export default class Cards extends Component {
  render() {
    return (
      <div className="card-deck">
      <div className="card" data-testid = 'card-1'>
        <img src={mountain} className="card-img-top" alt="mountain"/>
        <div className="card-body">
          <h5 className="card-title">Bringing Blockchain to Mountain Rescue</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div className="card-footer">
         <small className="text-muted"><span style={{fontWeight:'bold'}}>NEWS </span>/ JAN 21 2020</small>
        </div>
      </div>
      <div className="card" data-testid = 'card-2'>
        <img src={bridge} className="card-img-top" alt="bridge"/>
        <div className="card-body">
          <h5 className="card-title">Blockchain for complex Construction Projects</h5>
          <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        </div>
        <div className="card-footer">
        <small className="text-muted"><span style={{fontWeight:'bold'}}>PROJECTS </span>/ DEC 21 2020</small>
        </div>
      </div>
      <div className="card" data-testid = 'card-3'>
        <img src={flower} className="card-img-top" alt="flower"/>
        <div className="card-body">
          <h5 className="card-title">Introducing veri-chain, the self identity network</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        </div>
        <div className="card-footer">
          <small className="text-muted"><span style={{fontWeight:'bold'}}>PLATFORMS </span>/ NOV 21 2020</small>
        </div>
      </div>
    </div>

    )
  }
}
