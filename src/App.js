import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {

  state={
    stocks: [],
    filterText: ""
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/stocks')
    .then(resp => resp.json())
    .then(stocksArr => {
      this.setState({
        stocks: stocksArr
      })
    })
  }

  handleChangeFilter = (event) => {
    this.setState({
      filterText: event.target.value
    })
  }

  handleSort = (event) => {
    if(event.target.value === 'Alphabetically'){
      this.setState({
        stocks: this.state.stocks.sort((a, b) => (a.name > b.name) ? 1 : -1)
      })
    }else if(event.target.value === 'Price'){
      this.setState({
        stocks: this.state.stocks.sort((a, b) => a.price - b.price)
      })
    } 
 }

  render() {

    const filteredStocks = this.state.stocks.filter(stock => stock.type.includes(this.state.filterText))
    return (
      <div>
        <Header/>
        <MainContainer stocks={filteredStocks} handleChangeFilter={this.handleChangeFilter} handleSort={this.handleSort} />
      </div>
    );
  }
}

export default App;
