import React, { Component } from 'react'
import "./Projectcategory.css"
export default class Projectcategory extends Component {
  handleRunClick=(showRun)=>{
    showRun.preventDefault();
    this.props.handleRun(true);
  }
  render() {
    return (
      <div>
        
        <p class="category" onClick={this.handleRunClick}>MD</p>
        <p class="category" onClick={this.handleRunClick}>MV</p>
        <p class="category" onClick={this.handleRunClick}>SA</p>
        <p class="category" onClick={this.handleRunClick}>TS</p>
      </div>
    )
  }
}
