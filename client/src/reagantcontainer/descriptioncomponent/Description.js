import React, { Component } from 'react'

export default class Description extends Component {
  handleDescriptionClick=(hideDescription)=>{
    hideDescription.preventDefault();
    this.props.handleDescription(false);
  };
  render() {
    return (
      <form>
        <p className="reagantname">Reagant Name:</p>
        <p className="lotnumber"> Lot Number:</p>
        <button className="hidebutton" onClick={this.handleDescriptionClick}>Hide</button>
      </form>
      
    )
  }
}