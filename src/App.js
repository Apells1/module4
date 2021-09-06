
import './App.css';
import React, { Component } from 'react';
import Country from './components/country';
class App extends Component {
  state = { 
    //cannot get medal component to work nor object destructoring 
    countries: [
      { id: 1, name: 'America', gold: 0, silver: 0, bronze:0},
      { id: 2, name: 'China', gold: 0, silver: 0, bronze:0},
      { id: 3, name: 'Russia', gold: 0, silver: 0, bronze:0 },
    ],
    medals: [
      { id: 1, name: "gold" },
      { id: 2, name: "silver" },
      { id: 3, name: "bronze" },
    ]
   }
    //to try tomorrow. Maybe im wrong. Use the name property to find the name of the country, create a replica using const, add or minus one and then update state?
  handleIncrement=(countryId, medalType)=> {
   // use spread operator to clone array
    const countriesMutable = [...this.state.countries];
    // use array.findIndex to return the index of the array element with matching id
    const idx = countriesMutable.findIndex((c) => c.id === countryId);
    countriesMutable[idx][medalType] += 1
    this.setState({ countries: countriesMutable });
  }
  getTotalMedalCount() {
    let sum = 0;
    this.state.medals.forEach(medal => { sum += this.state.countries.reduce((a, b) => a + b[medal.name], 0)});
    return sum;
  }
  //this says the gold medal count is not defined 
  handleReduction=(countryId, medalType)=> {
    // use spread operator to clone array
    const countriesMutable = [...this.state.countries];
    // use array.findIndex to return the index of the array element with matching id
    const idx = countriesMutable.findIndex((c) => c.id === countryId);
    countriesMutable[idx][medalType] -= 1
    this.setState({ countries: countriesMutable });     
  }
  
  render() { 
    return ( 
      <div className="App">
        <header className="App-header">
         {/* not certain how to call a function within the app component, perhaps <App getTotalMedalCount/>? */}
         Olympi Medals - {this.getTotalMedalCount()}
        </header>
        {/* <Countries countries={this.state.countries} onIncrement={this.handleIncrement} onReduction={this.handleReduction} /> */}
        { this.state.countries.map(country => 
          <Country 
            key={ country.id } 
            onIncrement={ this.handleIncrement }
            onReduction= { this.handleReduction }
            country={ country }
            medals={ this.state.medals }
          />) }
      </div>
     );
  }
}
export default App;
