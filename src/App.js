import React, { Component } from 'react';
import rotlogo from './omdblogo.png';
import './App.css';
import Well from 'react-bootstrap/lib/Well';

class App extends Component {
  handlePost(){

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a href="search.html"><img src={rotlogo} className="App-logo" alt="logo" /></a>
        </header>
        <div className="container">
          <div className="movieimage">
            <img src='' onerror=''/>
          </div>
          <div>
          <Well>This is a test well!</Well>
            <h2>MOVIE TITLE HERE</h2>
            <p>Date for the movie here (country)</p>
            <br/>
            <div>
              <img src=''/>
              <div><span>rating value</span> /10</div>
            </div>
            <p>movie description here</p>
            <br/>
            <hr/>
            <div>Add your rating</div>
            <br/>
            <label>Your Name <span className="required">*</span></label>
            <br/>
            <input type="text" />
            <br/>
            <br/>
            <label>Comments <span className="required">*</span></label>
            <br/>
            <textarea name="comment"></textarea>
            <br/>
            <br/>
            <button className="btn btn-create" onClick={this.handlePost.bind(this)}>Post</button>
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
