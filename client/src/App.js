import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPageFE from "./pages/MainPage/MainPageFE";
import LoginPageFE from './pages/LoginPage/LoginPageFE';



function App() {
  return (
    <Router>
      <div>
        <Switch>
         <Route exact path="/main" component={MainPageFE}/>
         <Route exact path="/" component={LoginPageFE}/>
        </Switch>
      </div>
    </Router>
  );
}
export default App;