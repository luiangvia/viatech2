import React from 'react';
import './Logincomponent.css';
import logo from '../images/viatechlogo.png'

//we are creating the "Logincomponent" component in order be render/re-use in other places.
class Logincomponent extends React.Component {
  
  //handleSubmit allows you to access the Main page once you have Log in
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleLogin(true);
  }

  render() {
    return (
      <div class="loginComponentDiv">
        <img class="logoImage" src={logo} alt="Logo" />
        <form onSubmit={this.handleSubmit}>
          <label class="loginLabel">Login</label>
          <br/>
          <input class="usernameInputBox" type="text" name="name" placeholder="username" />
          <br/>
          <input class="passwordInputBox" type="text" name="password" placeholder="password" />
          <br/>
          <input class="viatechButtons" id="loginButton" type="submit" value="Log in" />
          <br/>

        </form>

      </div>
    );
  }
}
//exporting the "Logincomponent" component
export default Logincomponent;