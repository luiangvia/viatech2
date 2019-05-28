import React, { Component } from 'react'
import "./Reagentlist.css"
 
export default class Reagentlist extends Component {
        handleDescriptionClick=(showDescription)=>{
          showDescription.preventDefault();
          this.props.handleDescription(true);
        }
render() {
   return (
      <div>
          {
        <h1 onClick={this.handleDescriptionClick} className="reagentlist"  > Reagent Name:</h1> 
        
        }
        {
        <h1 onClick={this.handleDescriptionClick} className="reagentlist"  > Reagent Name:</h1> 
        
        }
        {
        <h1 onClick={this.handleDescriptionClick} className="reagentlist"  > Reagent Name:</h1> 
        
        }
        {
        <h1 onClick={this.handleDescriptionClick} className="reagentlist"  > Reagent Name:</h1> 
        
        }
        {
        <h1 onClick={this.handleDescriptionClick} className="reagentlist"  > Reagent Name:</h1> 
        
        }
        {
        <h1 onClick={this.handleDescriptionClick} className="reagentlist"  > Reagent Name:</h1> 
        
        }
        {/* <form onClick={this.handleReagents}>
        <button class="Reagentlist"  class="searchReagentbtn" value="Submit" type="submit">Reagent Name: 106-C1082</button>
        </form> */}
        
      </div>
    )
  }
}

