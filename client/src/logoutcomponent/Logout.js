import React, { Component } from 'react'
import "./Logout.css";
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
export default class Logout extends Component {
    state = {
        
    }
    handleLogOut = (logout) => {
        this.setState({ loggedout: logout });
      }

    handleLogoutSubmit = (event) => {
        event.preventDefault();
        this.handleLogOut(true);
      }
     
    render() {

        return (
            <div class="logout">
                <form onSubmit={this.handleLogoutSubmit}>
                    <label class="usernamemainpage">username</label>
                    <input class="viatechButtons" id="logoutbutton" type="submit" value="Log Out" />
                    {this.state.loggedout ? <Redirect to='/' /> : null}
                </form>
                
            </div>
        )
    }
}


