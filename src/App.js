// create your App component here
import React, { Component } from 'react';

export default class App extends Component {
  
  state = {
    people: []
  }
  
  componentDidMount(){
    fetch("http://api.open-notify.org/astros.json")
    .then(resp => resp.json())
    .then(date => this.setState({people: date.people}))
  }
  
  render(){
    return (
      <div>
        {this.state.people.map(person => person.name)}
      </div>
    )
  }
}