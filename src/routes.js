import React from 'react';
import MovieSearch from './containers/MovieSearchContainer';
import Params from './containers/ParamsContainer';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={MovieSearch} />
        <Route exact path="/id/:imdbID" component={Params} />
      </div>
    </Router>
  )
};

export default Routes;
