import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import axios from 'axios';
//use props to render the project data from db
//project corresponds to name of project (state) in listpojects



//this is a CONTAINER
export default class Project extends Component {
  state = { stages: [] }
  loadStages = (event) => {
    event.preventDefault();
    axios.get("http://localhost:3000/api/project/" + this.props.project.id + "/stage").then(data => {

      this.setState({ stages: data.data })

    });
  }


  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.loadStages}>{this.props.project.name}</Button>

      </div>
    )
  }
}
