import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Andrew", age: 26},
      {name: "Silas", age: 36},
      {name: "Kat", age: 24}
    ]
  }

  switchNameHandler = (newName) => {
    //console.log('was clicked');
    // DON'T DO THIS this.state.persons[0] = "Max";
    this.setState({ 
      persons: [
        {name: newName, age: 26},
        {name: "Silas", age: 36},
        {name: "Kat", age: 54}
      ]
    })
  } 

  nameChangedHanler = (event) => {
    this.setState({ 
      persons: [
        {name: 'Maxxy', age: 26},
        {name: event.target.value, age: 33},
        {name: "Kat", age: 54}
      ]
    })  
  }

  render() {
    const styles = {
      backgroundColor: '#fff',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This is really working!!</p>
        <button 
          onClick={() => this.switchNameHandler('Dude')}
          style={styles}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHanler}>
          My Hobbies: Racing
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
