import React, { Component } from "react";
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import Logincomponent from "../../logincomponents/Logincomponent";
import './LoginPageFE.css';
import Header from '../../headercomponent/Header';
import Footer from '../../footercomponent/Footer';
//
class LoginPageFE extends Component {
  state = {
   
  }

  handleLogin = (login) => {
    this.setState({ loggedin: login });
  }

  render() {
    return (
      <div class="mainDiv">
        <Header/>
        <Logincomponent handleLogin={this.handleLogin} />
        {/* here you are declaring the state by using the ?  and null*/}
        {this.state.loggedin ? <Redirect to='/main' /> : null}
        <Footer />
      </div>

    )
  }
}

export default LoginPageFE;