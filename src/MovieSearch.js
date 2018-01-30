import React, { Component } from 'react';
import rotlogo from './omdblogo.png';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './App.css';


class MovieSearch extends Component{
    constructor(props) {
    super(props);
    this.state = {
      error: '',
      dataS:[],
      data1:{}
    }
 }

  handleClick(event){

    let url = 'http://www.omdbapi.com/?i=tt3896198&apikey=88aa8b1e&s=' + event.target.value.replace(' ', '+');
    this.setState({
      error: ''
    })
    axios.get(url)
    .then((res) => {
      if(res.data.Error){
        this.setState({
          error: res.data.Error
        })
      }
      this.setState({
        dataS: res.data.Search,
        data1: res.data.Search[0]
      });
    })
    .catch(err => {
      console.log(err)
    });
  }



  render(){
    const appendMovies = () => {
      if(this.state.dataS){
        return this.state.dataS.map((movie,index) => {
          return (
            <a href={`/id/${movie.imdbID}`}>
            <li key={movie.imdbID} className="list-group-item">{movie.Title}</li>
            </a>
          )
        })
      } 
    }
    return(
      <div className="searchview">
        <div className="displayinfo">
          <img src={rotlogo} className="App-logo2" alt="logo" />

          <div className="input-group">
            <input type="search" className="form-control" placeholder="Movie Search" aria-label="Movie Search" aria-describedby="basic-addon2" onChange={this.handleClick.bind(this)}/>
            <div className="input-group-append">
             <Link to={`/id/${this.state.data1.imdbID}`}>
                <button className="btn btn-default" type="button">
                <span className="glyphicon glyphicon-search"></span>
                </button>
             </Link>
            </div>
          </div>
         <div className="popup">     
            <ul className="list-group">
              {appendMovies()}
            </ul>
          </div>
        </div>

      </div>

    )
  }
}

export default MovieSearch;
