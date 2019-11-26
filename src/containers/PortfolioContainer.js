import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.myStocks.map(stock => <Stock key={stock.id} stockObject={stock} addOrDelete={this.props.addOrDelete} onChange={() => {}}/>)
          }
      </div>
    );
  }

}

export default PortfolioContainer;
