import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import Project from './Project';


export default class LoadProject extends Component {
  //state:array of projects
  state = { projects: [] } //a place to store projects when button clicked
  //if we check the truthiness if this state, we know we haven't put anything in yet
  //when we add something, we know there's something via truthiness

  //if we have projects loaded, we'll render it, if not it returns null 



  //lifecycle - component did mount - for automatic loading of things

  loadProjects = (event) => {
    event.preventDefault();
    /*FOR BELOW AXIOS/API CALL - it will need to be changed
   Best practice is to move all your api call functions to a single file, 
   and export each function so you can use it in the corresponding file.
    Then in your api calls function, you would set a BASE_URL const.
     When developing, you could have that set to "localhost:3000",
      and then you can change it when you deploy.
   Each of the axios.get() calls would then use BASE_URL + '/api/project', 
   so they will work when switching environments
    */
    //api call using axios / axios gets promise, waits to resolve, then gets data
    // axios.get("http://localhost:3000/api/project").then(data => {
    axios.get("/api/project").then(data => {
      //if data.status===200, then set state, else display"dataload failed"; <-everytime you're getting something check for data like this / axios also has a .then.catch (which does the same thing)

      //set state to store data
      //use a serializer to limit data going to controller, so it doesn't show UserId
      this.setState({ projects: data.data })//projects corresponds to state of projects above(state)
      //data.data will slim down what we're getting
    });
  }

  renderProjects = projectsData => {
    //truthiness definition: when we evalute an object as a boolean, what will be returned? true if data present, false if undefined or null
    //ex. empty arrays truthiness is false, because nothing is returned
    //we're evaluating the truthiness of the this.state.projects in the tertiary operator below, in the render function
    return projectsData.map(projectData => {
      return <Project project={projectData} key={projectData.id} />; //added props called project, set equal to project data from state of Project
      //key is used to avoid a react warning
      //project is the name of the prop
    });
  }

  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.loadProjects}>ListProjects</Button>
        {this.state.projects ? this.renderProjects(this.state.projects) : null}
      </div>
    )
  }
}
//all of this is repeatable for displaying stages and runs, just have to change link for api calls and render different componets baed on data from api