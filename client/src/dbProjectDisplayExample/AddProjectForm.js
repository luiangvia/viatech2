import React, { Component } from 'react'
import axios from 'axios';

export default class AddProjectForm extends Component {

    //add project form: adds project name with submit button 
    //adds to database

    state = {projectname:""}
    
    
    handleChange = (event,value)=>{
        this.setState({projectname: event.target.value})
        //console.log(event.target.value);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post('/projects', {
            projectname: this.state.projectname
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <label>
                    Project Name:
        <input type="text" name="projectname" onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>

        )
    }
}

