import React, { Component } from 'react';
class Medal extends Component {
    render() {
        const { country, medal, onIncrement, onReduction } = this.props;
        return (
            <div style={{textTransform: 'capitalize'}}>
                { medal.name } Medals:  {country[medal.name] }
                <button onClick={ () => onIncrement(country.id, medal.name) }>+</button>
                <button disabled={ country[medal.name] === 0 } onClick={ () => onReduction(country.id, medal.name) }>-</button>
            </div>
        );
    }
}

export default Medal;