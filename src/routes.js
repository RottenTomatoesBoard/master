import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App';
import Search from './MovieSearch';
import Params from './params';

const routes = (<BrowserRouter>
 <div>
     <Switch>
       <Route path="/" exact component={Search}/>
       <Route path="/app" component={App}/>
       <Route path="/id/:imdbID" component={Params}/>
     </Switch>
   </div>
 </BrowserRouter>
)

export default routes
