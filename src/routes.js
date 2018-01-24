import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import App from './App';
import Search from './MovieSearch';

const routes = (<BrowserRouter>
 <div>
     <Switch>
       <Route path="/" exact component={Search}/>
       <Route path="/app" component={App}/>
     </Switch>
   </div>
 </BrowserRouter>
)

export default routes
