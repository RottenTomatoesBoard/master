import React, { Component } from 'react';
import rotlogo from './omdblogo.png';
import './App.css';

class Search extends Component{
  handleSearch(){

  }
  render(){
    return(
      <div>
        <img src={rotlogo} className="App-logo" alt="logo" />
        <input className="col-lg-6 col-md-6 col-sm-12 col-xs-12" value="Movie Search" type="search" />
        <button className="btn" onClick={this.handleSearch.bind(this)}><span className="glyphicon glyphicon-search"></span></button>
      </div>
    )
  }
}

export default Search;
