import React, { Component } from 'react'
import "./Addrun.css"
export default class Addrun extends Component {
  handleAddRunFormClick=(showAddRunForm)=>{
    showAddRunForm.preventDefault();
    this.props.handleAddRunForm(true);
  }

  
  render() {
   

    return (
      <div>
        <button id="addrunbtn" class="viatechButtons" onClick={this.handleAddRunFormClick} > Add Run</button>
      </div>
    )
  }
}
