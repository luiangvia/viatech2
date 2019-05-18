import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import axios from 'axios';
import ListStages from './ListStages';
//use props to render the project data from db
//project corresponds to name of project (state) in listpojects



//this is a CONTAINER
export default class Project extends Component {
  state = { runs: [] }
  loadRuns = (event) => {
    event.preventDefault();
    //http://localhost:3000/api/project/1/stage
    axios.get("http://localhost:3000/api/project/" + this.props.project.id + "/run").then(data => {
     let isArray = Array.isArray(data.data);
     console.log(data.data);
    if(isArray){
      
      this.setState({ runs: data.data }) 
      }
 


    });
  }

//ternary operater checks if there are stages in state, if so, render liststages component and pas prop of stages
  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.loadRuns}>{this.props.project.name}</Button>
        {this.state.stages ? <ListStages stages = {this.state.runs}/> : null}  
      </div> 
    )
  }
}
