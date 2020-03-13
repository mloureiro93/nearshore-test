import React, { Component } from 'react'
import './components.css'
import mountain from './../images/mountain.png'
import bridge from './../images/bridge.png'
import flower from './../images/flower.png'

export default class Cards extends Component {
  render() {
    return (
      <div class="card-deck">
      <div class="card">
        <img src={mountain} class="card-img-top" alt="mountain"/>
        <div class="card-body">
          <h5 class="card-title">Bringing Blockchain to Mountain Rescue</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div class="card-footer">
         <small class="text-muted"><span style={{fontWeight:'bold'}}>NEWS </span>/ JAN 21 2020</small>
        </div>
      </div>
      <div class="card">
        <img src={bridge} class="card-img-top" alt="bridge"/>
        <div class="card-body">
          <h5 class="card-title">Blockchain for complex Construction Projects</h5>
          <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        </div>
        <div class="card-footer">
        <small class="text-muted"><span style={{fontWeight:'bold'}}>PROJECTS </span>/ DEC 21 2020</small>
        </div>
      </div>
      <div class="card">
        <img src={flower} class="card-img-top" alt="flower"/>
        <div class="card-body">
          <h5 class="card-title">Introducing veri-chain, the self identity network</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        </div>
        <div class="card-footer">
          <small class="text-muted"><span style={{fontWeight:'bold'}}>PLATFORMS </span>/ NOV 21 2020</small>
        </div>
      </div>
    </div>

    )
  }
}
