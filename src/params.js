import React, { Component } from 'react';
import rotlogo from './omdblogo.png';
import tomato from './tomato.png';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './App.css';


class Params extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      dataN: {},
      inputValue: '',
      error: ''
    }
 }
 handlePost(){

 }

  handleChange(event){
    let url = 'http://www.omdbapi.com/?i=tt3896198&apikey=88aa8b1e&t=' + event.target.value.replace(' ', '+');
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
        dataN: res.data
      });
    })
    .catch(err => {
      console.log(err)
    });
  }

  handleClick(){
    this.setState({
      data: this.state.dataN
    })
  }


  componentWillMount() {
     axios.get('http://www.omdbapi.com/?i='+this.props.match.params.imdbID+'&apikey=88aa8b1e')
     .then((res) => { 
      console.log(res.data)
       this.setState({
         data: res.data
       });
     });
  }
  onError() {
    this.setState({
      imageUrl: "movieposter.jpg"
    });
  }
  render() {

    let rating = '';
    if(this.state.data.Ratings){
        rating = this.state.data.Ratings[1].Value;
    }

    return (
      <div className="App">
        <header className="App-header">
          <a href="/" target="_self"><img src={rotlogo} className="App-logo" alt="logo" /></a>
          <form>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search Movies" onChange={this.handleChange.bind(this)}/>
               <div className="input-group-btn">
                <Link to={`/id/${this.state.dataN.imdbID}`} onClick={this.handleClick.bind(this)}>
                <button className="btn btn-default" type="submit">
                  <i className="glyphicon glyphicon-search"/>
                </button>
                </Link>
              </div>
            </div>
        </form>
        </header>
        <div className="container">
          <div className="movieimage ">
            <img width={203} src={this.state.data.Poster} onError={this.onError.bind(this)} alt="poster"/>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-10 col-xs-12">
            <h2>{this.state.data.Title}</h2>
            <h4>Year: {this.state.data.Year}</h4>
            <h4>Country: {this.state.data.Country}</h4>
            <div className="rating">
              <img src={tomato} className="star" alt="tomato" />
              <div><ul>{rating}</ul></div>
            </div>
            <p>{this.state.data.Plot}</p>
            <br/>
            <hr/>
            <div>Add your rating</div>
            <br/>
            <label>Your Name <span className="required">*</span></label>
            <br/>
            <input type="text" className="col-lg-4 col-md-4 col-sm-6 col-xs-12"/>
            <br/>
            <br/>
            <label>Comments <span className="required">*</span></label>
            <br/>
            <textarea name="comment" className="col-lg-12 col-md-12 col-sm-12 col-xs-12"></textarea>
            <button className="btn btn-success" onClick={this.handlePost.bind(this)}>Post</button>
            <br/>
            <br/>
            <div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 commentbox">
                <div>
                  <span className="pull-left">Your Name</span>
                  <span className="pull-right">Date posted</span>
                </div>
                <br/>
                <div>Comment post in here</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Params;
