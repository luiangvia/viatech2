import React, { Component } from 'react'
import Checkbox from './Checkbox';
import "./AddRunForm.css"



const items = [

 'Overall check for blank spaces and that N/A is present if not used',
  'Overall check to make nothing has been recorded on the packet as expired',
  'Overall check to make that all additional attachments are referenced within the packet',
  'Check Calibration Due dates on Pipettes against QCBD and paperwork',
  'Check that all Calculations and Dilutions are performed correctly',
  'Incubation times fall within BP parameters',
  'Check that Read Time and Reader match with Raw Data Printout',
  'Watson Paperwork should have the same date as the assay date',
  'All footnotes are present with initials and date',
  'Any stray entries have initials and date',
  'Every page with written work performed contains initials and date',
  'Pages not used should be NA’d with Initial and Date',
];
export default class AddRunForm extends Component {
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox, 'is selected.');
    }
  }

  createCheckbox = label => (
    <Checkbox
            label={label}
            handleCheckboxChange={this.toggleCheckbox}
            key={label}
        />
  )

  createCheckboxes = () => (
    items.map(this.createCheckbox)
  )

  render() {
    return (
      <div>
        <div>
          <div class="formdiv"> 
         
              <label class="rName">
               Analyst Name: 
             </label>
        <input class="rnamebox" type="text" name="name" />
        <br/>
        <label class="rName">
               Assay Date: 
             </label>
        <input class="rnamebox" type="text" name="name" />
        <br/>
        <label class="rName">
               Run Number: 
             </label>
        <input class="rnamebox" type="text" name="name" />
        <br/>
        <label class="rName">
               First Review: 
             </label>
        <input class="rnamebox" type="text" name="name" />
        <br/>
            <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}
              <h4>Add Reagents:</h4>
              <p>Reagent 1</p>
              <label class="rName">
               Reagent Name: 
             </label>
        <input class="rnamebox" type="text" name="name" />
        <label class="rName">
               Lot Number: 
             </label>
        <input class="rnamebox" type="text" name="name" />
        <p>Reagent Documentation Present?</p> <h1 class="yes">Yes</h1>
        <p>Reagent 2</p>
              <label class="rName">
               Reagent Name: 
             </label>
        <input class="rnamebox" type="text" name="name" />
        <label class="rName">
               Lot Number: 
             </label>
        <input class="rnamebox" type="text" name="name" />
        <p>Reagent Documentation Present?</p> <h1 class="no">No</h1>
        <p>Reagent 3</p>
              <label class="rName">
               Reagent Name: 
             </label>
        <input class="rnamebox" type="text" name="name" />
        <label class="rName">
               Lot Number: 
             </label>
        <input class="rnamebox" type="text" name="name" />
             
            </form>
            <button type="submit">Submit Run</button>
          </div>
        </div>
      </div>
    );
  }
}

