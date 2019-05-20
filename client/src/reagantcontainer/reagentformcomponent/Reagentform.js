import React, { Component } from 'react'

export default class Reagentform extends Component {

handleSubmitForm = submitFormEvent => {
    submitFormEvent.preventDefault();
}

  render() {
    return (
      <div>
          <form>
            <label className="reagentname">Reagent Name:</label>
            <input className="rrnamebox"></input>
            <br/>
            <label className="lotnumber">Lot Number:</label>
            <input className="lnamebox"></input>
            <button type="submit">Submit Form</button>
          </form>
        
      </div>
    )
  }
}
