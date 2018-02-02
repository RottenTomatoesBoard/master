import React, { Component } from 'react';
import './App.css';
import rotlogo from '../MovieSearch/omdblogo.png';
import tomato from './tomato.png';
import {Link} from 'react-router-dom';
import axios from 'axios';
import defaultPoster from './movieposter.jpg'


require('dotenv').config({path:'../.env'})


class Params extends Component {
  constructor(props) {
    super(props);
    this.name = this.name.bind(this);
    this.comment = this.comment.bind(this);
    super(props);
    this.state = {
      data: {},
      dataN: {},
      data1:{},
      inputValue: '',
      error: '',
      name: '',
      comments: [{}]
    }
 }



  handleChange(event){

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

  handleClick(){
    this.setState({
      data: this.state.data1
    })
  }

  name(e){
    this.setState({name: e.target.value});
  }

  comment(e){
    this.setState({comment: e.target.value});
  }



  handlePost(){
    //this is what fires after submit button is clicked to submit comment
    var d = new Date();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var months =  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var monthOfYear = months[d.getMonth()]
    var dayOfWeek = days[d.getDay()];
    var dayOfMonth = d.getDate()
    var year = d.getFullYear()

    var timeStamp = monthOfYear + ' ' +dayOfMonth +', '+year;

    if (!this.state.name || !this.state.comment ) {
      console.log('invalid form');
      alert("You must provide both your name and your comment")
      return
    } else {
      console.log('form is good');
    axios.post(`/api/name/${this.state.name}/${this.state.comment}/${this.props.match.params.imdbID}/${timeStamp}`)
    .then(function refreshPage(){
      window.location.reload();
    })
    }
  };


  componentWillMount() {

     axios.get('http://www.omdbapi.com/?i='+this.props.match.params.imdbID+'&apikey='+process.env.REACT_APP_KEY)
     .then((res) => {
       this.setState({
         data: res.data
       });
     });
     //this API call fetches comments from the DB and stores them in state
     axios.get(`/api/id/${this.props.match.params.imdbID}`)
     .then((comment) => {
       this.setState({
         comments: comment.data
       });
     });

  } //end of componentWillMount





  onError() {
    this.setState({
      imageUrl: "movieposter.jpg"
    });
  }


  render() {

    //code below takes comments from state and then pushes them into rows array
    let comments = this.state.comments
    var rows = [];
      for(var i = 0; i < comments.length; i++) {
        rows.push(<div key={i}><b>{comments[i].name}</b> <br /><span>{comments[i].body}</span><br /><i>Posted: {comments[i].timestamp}</i><br /><br /></div>);
      }
    let commentsHeading = 'Comments'
    if (comments.length <=0) {
      commentsHeading = 'Be the first one to make a comment about this movie!';
    }
    let ratingsrc = {}
    let rating = '';
    let ratingarr =[];
    if(this.state.data.Ratings){
      ratingarr=this.state.data.Ratings;
      if(ratingarr.length >1) {
        rating = this.state.data.Ratings[1].Value
      } else {rating = "" };
    }


console.log(ratingarr.length);

    const tomatoView = () => {
        if(ratingarr.length <=2) {
          return (
          <div></div>
          )
        } else
      return(
        <img src={tomato} className="star" alt="" />

      )
    }

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

   //display default info in case it's not present in returned data
   if (this.state.data.Poster == 'N/A') {this.state.data.Poster = defaultPoster}
   if (this.state.data.Plot == 'N/A') {this.state.data.Plot = 'Plot information is not available for this movie'}

    return (
      <div className="App">
      <title>{this.state.data.Title} - OMDB Rotten Tomato</title>
      <header className="App-header">
        <a href="/" target="_self"><img src={rotlogo} className="App-logo" alt="logo" /></a>
        <form action={`/id/${this.state.data1.imdbID}`}>
          <div className="input-group2">
            <input type="text" className="form-control searchbar" placeholder="Search Movies" onChange={this.handleChange.bind(this)}/>
             <div className="input-group-btn">
              <Link to={`/id/${this.state.data1.imdbID}`} onClick={this.handleClick.bind(this)}>
              <button className="btn btn-default" type="submit">
              <span className="glyphicon glyphicon-search"></span>
              </button>
              </Link>
            </div>
            <div className="popup2">
              <ul className="list-group">
                {appendMovies()}
              </ul>
            </div>
          </div>
          </form>
        </header>
        <div className="container">
          <div className="movieimage ">

            <img width={203} src={this.state.data.Poster}  alt="poster"/>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-10 col-xs-12 ">
            <h2>{this.state.data.Title}</h2>
            <h4>Year: {this.state.data.Year}</h4>
            <h4>Country: {this.state.data.Country}</h4>
            <div className="rating">
              {tomatoView()}
              <div><ul>{rating}</ul></div>

            </div>
            <p>{this.state.data.Plot}</p>
            <br/>
            <hr/>
            <h4>Add Your Comment</h4>
            <br/>
            <label>Your Name <span className="required">*</span></label>
            <br/>
            <input type="text" onChange={this.name} className="col-lg-4 col-md-4 col-sm-6 col-xs-12"/>
            <br/>
            <br/>
            <label>Comments <span className="required">*</span></label>
            <br/>
            <textarea name="comment" onChange={this.comment} className="col-lg-12 col-md-12 col-sm-12 col-xs-12"></textarea>
            <button className="btn btn-success" onClick={this.handlePost.bind(this)}>Post</button>
            <br/>
            <br/>
            <div>
              <div >
                <hr />
                <h4>{commentsHeading} </h4>
                <div>
                  {rows}
                </div>
                <br/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Params;
