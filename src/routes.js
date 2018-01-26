import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Search from './MovieSearch';
import Params from './params';

const routes = (<BrowserRouter>
 <div>
     <Switch>
       <Route path="/" exact component={Search}/>
       <Route path="/id/:imdbID" component={Params}/>
     </Switch>
   </div>
 </BrowserRouter>
)

export default routes
