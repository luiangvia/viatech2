import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
//use props to render the project data from db
//project corresponds to name of project (state) in listpojects

//this is a CONTAINER
export default class Project extends Component {
  render() {
    return (
      <div>
        <Button variant="primary">{this.props.project.name}</Button>
        
      </div>
    )
  }
}
