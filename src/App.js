import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'fdf', name: 'Maxxy', age: 26},
      {id: 'sag', name: 'Silas', age: 33},
      {id: 'df3', name: "Kat", age: 54}
    ],
    otherState: 'some other value',
    showPersons: false
  } 

  nameChangedHanler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })  
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const styles = {
      backgroundColor: '#fff',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
                      click={() => this.deletePersonHandler(index)}
                      name={person.name}
                      age={person.age} 
                      key={person.id}
                      changed={(event) => this.nameChangedHanler(event, person.id)} />
          })}
        </div>       
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This is really working!!</p>
        <button 
          onClick={this.togglePersonsHandler}
          style={styles}>Toggle Persons</button>
          {persons}
        </div>
    );
  }
}

export default App;
