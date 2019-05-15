import React, { Component } from 'react';
import "./Projectsearchbar.css";



export default class Projectsearchbarcomponent extends Component {
  handleProject=(hide)=>{
    hide.preventDefault();
    this.props.operation(true);
  }
  
  render() {
    return (
      <div >
        
        <form onSubmit={this.handleProject} class="projectsearchform">
            Search for Project Number:
            <input class="projectsearchinput" type="text" name="project#"/>
            <button  class="viatechButtons" value="Submit" type="submit">Search</button>
        </form>
      </div>
    )
  }
}
