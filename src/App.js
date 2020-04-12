import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css'
import './Card.js'
import {CardList, Form} from "./Card";

class App extends React.Component{

  state ={
    profiles: [],
  };

  addNewProfile = (profile) => {
      console.log('app', profile);
      this.setState(prevState =>({profiles:[...prevState.profiles, profile]}));
  };

  render() {
    return (
        <div>
          <img align="left" src={logo} alt="logo" width="100" height="100"/>
          <Form onSubmit={this.addNewProfile}></Form>
          <CardList profiles={this.state.profiles}>
          </CardList>
        </div>
    );
  }
}

export default App;
