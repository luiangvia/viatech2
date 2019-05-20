import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import axios from 'axios';
//use props to render the project data from db
//project corresponds to name of project (state) in listpojects



//this is a CONTAINER
export default class Stage extends Component {
state = {runs:[]}
loadRuns = (event) =>{
  event.preventDefault();
  axios.get("/api/project/"+this.props.project.id+"/stage/"+this.props.stage.id+"/run").then(data => {

    this.setState({ runs: data.data })
   
  });
}


  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.loadRuns}>{this.props.stage.name}</Button>
        
      </div>
    )
  }
}
