import React, { Component } from 'react';
import rotlogo from './omdblogo.png';
import './App.css';

class MovieSearch extends Component{
  constructor(props) {
    super(props);
 }
  handleSearch(){

  }
  render(){
    return(
      <div className="searchview">
        <div className="displayinfo">
          <img src={rotlogo} className="App-logo2" alt="logo" />

          <div class="input-group mb-3">
            <input type="search" class="form-control" placeholder="Movie Search" aria-label="Movie Search" aria-describedby="basic-addon2"/>
            <div class="input-group-append">
              <button class="btn btn-default" type="button" onClick="/App"><span className="glyphicon glyphicon-search"></span></button>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default MovieSearch;
