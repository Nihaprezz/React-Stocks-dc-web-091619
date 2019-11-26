import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

let url = "http://localhost:3000/stocks"

class MainContainer extends Component {
  constructor(){
    super();

    this.state = {
      allStocks: [],
      myStocks: [],
      filterText: "", 
      alphabet: false,
      price: false
    }
  }

  componentDidMount(){
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        allStocks: data
      })
    })
  }

  addStock = (stockObj) => {
    this.state.myStocks.includes(stockObj) ? alert('Already Bought!') : this.setState({myStocks: [...this.state.myStocks, stockObj]})
  }

  removeStock =(stockObj) => {
    let updatedProfile = this.state.myStocks.filter(stock => stock !== stockObj)
    this.setState({
      myStocks: updatedProfile
    })
  }

  filterBy = (event) => {
    console.log(event.target.value)
    this.setState({
      filterText: event.target.value
    })
  }

  changeRadioBtn = (event) => {
    if(event.target.value === "Alphabetically"){
      if(!this.state.alphabet){
        this.setState({alphabet: true})
      } else {
        this.setState({alphabet: false})
        this.updateFilter()
      }
    } else if (event.target.value === "Price") {
      if(!this.state.price){
        this.setState({price: true})
      } else {
        this.setState({price: false})
      }
    }
  }

  updateFilter = () => {
    if(this.state.alphabet){
      let alphabetSort = this.state.allStocks.sort((a, b) => {
        return a.name > b.name ? 1 : -1
      })
      console.log(alphabetSort)
    }
  
    
  }


  render() {
    return (
      <div>
        <SearchBar filterBy={this.filterBy} changeRadioBtn={this.changeRadioBtn} alphabetStatus={this.state.alphabet} priceStatus ={this.state.price}/>

          <div className="row">
            <div className="col-8">

              <StockContainer allStocks={this.state.allStocks.filter(stock => stock.type.includes(this.state.filterText))} 
              addOrDelete={this.addStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer myStocks={this.state.myStocks} addOrDelete={this.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
