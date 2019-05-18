import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import Stage from './Stage';


export default class ListStage extends Component {


  renderStages = stagesData => {

    return stagesData.map(stageData => {
      return <Stage stage={stageData} key={stageData.id} />; //added props called stages, set equal to stage data from state of Stage
      //key is used to avoid a react warning
      //project is the name of the prop
    });
  }
// this does: click on project button, load stages, render listattges compoent
//this is a PURE (no state, only props) contrainer compontent - takes in stages and render 1 stage per stages
  render() {
    return (
      <div>
  {this.renderStages(this.props.stages)}
      </div>
    )
  }
}