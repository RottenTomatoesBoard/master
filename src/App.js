import React, { Component } from 'react';
import rotlogo from './omdblogo.png';
import star from './Star.svg';
import './App.css';
import Well from 'react-bootstrap/lib/Well';

class App extends Component {
  constructor(props) {
    super(props);
 }
  handlePost(){

  }
  onError() {
    this.setState({
      imageUrl: "movieposter.jpg"
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a href="/" target="_self"><img src={rotlogo} className="App-logo" alt="logo" /></a>
        </header>
        <div className="container">
          <div className="movieimage col-lg-3 col-md-3 col-sm-2 col-xs-12">
            <img src="#" onError={this.onError.bind(this)} />
          </div>
          <div className="col-lg-9 col-md-9 col-sm-10 col-xs-12">
            <Well>This is a test well!</Well>
            <h2>MOVIE TITLE HERE</h2>
            <p>Date for the movie here (country)</p>
            <div className="rating">
              <img src={star} className="star" />
              <div><span>rating value</span> /10</div>
            </div>
            <p>movie description here</p>
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

export default App;
