import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.props.portfolio.map(stockObj => <Stock stock={stockObj} key={stockObj.id} updatePortfolio={this.props.updatePortfolio} /> )}
      </div>
    );
  }

}

export default PortfolioContainer;
