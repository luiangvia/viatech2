import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import "./Reagent.css"
import axios from 'axios';
import Reagent from '../reagentscontainercomponent/Reagent'
import Reagentform from '../reagentformcomponent/Reagentform';



export default class LoadReagent extends Component {
  state = { reagents: [] }
  

  loadReagents =(event) => {
    event.preventDefault();
    axios.get("http://localhost:3000/api/reagent").then(data => {
      this.setState({ reagents: data.data})
    });
  }
   renderReagents = reagentsData => {
    return reagentsData.map(reagentData => {
      return <Reagent reagent={reagentData} key={reagentData.id} />;
    });
  }
  loadReagentform =(event) => {
    event.preventDefault();
    axios.get("http://localhost:3000/api/reagentname").then(data => {
      this.setState({reagentform: data.data})
    });
  }
  renderReagentform =reagentformData => {
    return reagentformData.map(reagentformData => {
      return <Reagentform reagentform={reagentformData} key={reagentformData.id}/>;
    });
  }
  render() {
    return (
      <div>
        <Button variant="primary" className="viatechButtons" onClick={this.loadReagents}>Reagent List</Button>
        {this.state.reagents ? this.renderReagents(this.state.reagents) :null}
        <Button variant="primary" className="viatechButtons" onClick={this.loadReagentform}>Add A Reagent</Button>
      
      </div>
    )
  }
}