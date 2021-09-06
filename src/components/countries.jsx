import React, { Component } from 'react';
import Country from './country';

class Countries extends Component {
  render() { 
    return ( 
    <React.Fragment>
      { this.props.countries.map(country => 
      <Country 
        key={ country.id } 
        onIncrement={this.props.onIncrement}
        onReduction={this.props.onReduction}
        id={ country.id }
        name={ country.name } 
        goldMedalCount={ country.goldMedalCount } 
        silverMedalCount={country.silverMedalCount}
        bronzeMedalCount={country.bronzeMedalCount}
      />) }
    </React.Fragment> );
  }
}

export default Countries;