import React, { Component } from 'react'
import "./SummaryReagents.css"
export default class SummaryReagents extends Component {
  render() {
    return (
      <div class="rgnsummary">
    
        <h2>Run 1</h2>
        <ul>
        <li>Reagent 1</li>
        <li>Reagent 2</li>
        <li>Reagent 3</li>
        <li>Reagent 4</li>
        </ul>
        <h2>Run 2</h2>
        <ul>
        <li>Reagent 1</li>
        <li>Reagent 2</li>
        <li>Reagent 3</li>
        <li>Reagent 4</li>
        </ul>
        <h2>Run 3</h2>
        <ul>
        <li>Reagent 1</li>
        <li>Reagent 2</li>
        <li>Reagent 3</li>
        <li>Reagent 4</li>
        </ul>
        <button type="submit">Print Reagent List</button>
      </div>
    )
  }
}
