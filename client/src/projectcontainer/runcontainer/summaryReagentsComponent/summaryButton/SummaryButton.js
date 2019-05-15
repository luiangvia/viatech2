import React, { Component } from 'react'
import "./SummaryButton.css"
export default class SummaryButton extends Component {
    handleSummaryReagentsClick=(showSummaryReagents)=>{
        showSummaryReagents.preventDefault();
        this.props.handleSummaryReagents(true);
      }
  render() {
    return (
      <div>
        <button id="summarybtn" class="viatechButtons"  onClick={this.handleSummaryReagentsClick}>Summary of Reagents Per Run</button>
      </div>
    )
  }
}

