import React, { Component } from 'react';
import "./Projectlist.css"



export default class Projectlist extends Component {
  handleCategoryClick=(showCategory)=>{
    showCategory.preventDefault();
    this.props.handleCategory(true);
  }


  render() {
    return (
   
      <div>
       
       {
        <h1 onClick={this.handleCategoryClick} class="projectlist"  > Project Number: 106-C1082</h1> 
        
        }
        {
        <h1 onClick={this.handleCategoryClick} class="projectlist"  > Project Number: 108-C1084</h1> 
        
        }
        {
        <h1 onClick={this.handleCategoryClick} class="projectlist"  > Project Number: 116-C1922</h1> 
        
        }
        {
        <h1 onClick={this.handleCategoryClick} class="projectlist"  > Project Number: 193-C1232</h1> 
        
        }
        {
        <h1 onClick={this.handleCategoryClick} class="projectlist"  > Project Number: 102-C3282</h1> 
        
        }
        {
        <h1 onClick={this.handleCategoryClick} class="projectlist"  > Project Number: 134-C2332</h1> 
        
        }
        {/* <form onClick={this.handleProjects}>
        <button class="projectlist"  class="searchprojectbtn" value="Submit" type="submit">Project Number: 106-C1082</button>
        </form> */}
      </div>
    )
  }
}

