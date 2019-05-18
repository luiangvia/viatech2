import React, { Component } from 'react'
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './App.css';

const User = (params) => {
  // const User = ({match}) => {
    // return(<h1>Welcome User {match.params.username}</h1>
return(<h1>Welcome User {params.username}</h1>
)
}
class Login extends Component {
  state = {
    loggedIn:false,
    loggedin: false,
    hello:"world",
    showMe: false,
    showMeCategory: false,
  }
  loginHandle = () => {
    this.setState(prevState => ({
      // ! everytime you click it will change the state
      loggedIn: !prevState.loggedIn}));
  }
  changeHello = ()=>{
  return this.setState({hello: "Luis"})
  }
    handleLogin = (login) => {
      this.setState({ loggedin: login });
    }
  
    operation = (project)=>{
      this.setState({ showMe: project});
        //replace project with the following code in order to show and hide after every click
        // !this.state.showMe
    } 
    handleCategory = (projectCategory)=>{
      projectCategory= !this.state.showMeCategory;
      this.setState({ showMeCategory: projectCategory});
    } 
  render() {
    return (
      //with the boundary of <Router> you are allowed to use a router package
      <Router>
      <div className="App">
      {/* to is a parameter, basically when you click in the link, where you want it to go */}
      <ul>
      {/* <li><Link to="/">Home</Link></li>
      <li><Link to="/app">App</Link></li>
      <li><Link to="/user/Luis">User Luis</Link></li>
      <li><Link to="/user/Monica">User Monica</Link></li> */}
      {/* activeStyle is so that when this link is active it should have a specififc style */}
      <li><NavLink to="/" exact activeStyle={{color: 'green'}}>Home</NavLink ></li>
      <li><NavLink  to="/app" activeStyle={{color: 'green'}}>App</NavLink ></li>
      <li><NavLink to="/user/Luis" activeStyle={{color: 'green'}}>User Luis</NavLink ></li>
      <li><NavLink  to="/user/Monica" activeStyle={{color: 'green'}}>User Monica</NavLink ></li>
      </ul>
      <Prompt
      when = {!this.state.loggedIn}
      message = {(location)=>{
        return location.pathname.startsWith('/user') ? 'Are you sure?' : true
      }}
      />
      <input type= "button" value= {this.state.loggedIn ? 'Log Out' : 'Log In' } onClick={this.loginHandle.bind(this)}/>
      {/* exact makes it so that the path has to be exact or else it will match multiple paths */}
      {/* strict makes it so that /app/ path only opens with the / at the end and not without*/}
      <Route path="/" exact strict render={
        () => {
          return (<h1>Welcome to Login</h1>);
        }
      }/>
      <Route path="/app" exact strict render={
        () => {
          return (
            <h1>Hello App!</h1>
          );
        }
      }/>
      <Route path="/user/:username" exact strict render={({match})=>(
        // ? = true; : = else
        this.state.loggedIn ? ( <User username={match.params.username}/>) : (<Redirect to="/" />)
      )}/>
      </div>
      </Router>
    )
  }
}

export default Login;