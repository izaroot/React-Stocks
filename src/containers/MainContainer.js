import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state={
    portfolio: []
  }

  updatePortfolio = (stock) => {   
    if(this.state.portfolio.some(s => s.name === stock.name)){
      let index = this.state.portfolio.findIndex(s => s.name === stock.name)
      let newPortfolio = [...this.state.portfolio]
      newPortfolio.splice(index, 1)
      this.setState({
        portfolio: newPortfolio
      })
    }
    else{
      this.setState({
        portfolio: [...this.state.portfolio, stock]
      })
      console.log("stock is now in")
    }
}

  render() {
    return (
      <div>
        <SearchBar handleChangeFilter={this.props.handleChangeFilter} handleSort={this.props.handleSort} />

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.props.stocks} updatePortfolio={this.updatePortfolio} />

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} updatePortfolio={this.updatePortfolio} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
