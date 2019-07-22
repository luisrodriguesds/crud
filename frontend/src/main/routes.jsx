import React from 'react';
import {Switch, Route, Redirect} from 'react-router';
import Home from '../components/home/home';
import UserCrud from '../components/users/userCrud';

const routes = (props) => {
  return (
    <Switch>
    	<Route exact path='/' component={Home} />
    	<Route path='/users' component={UserCrud} />
    	<Redirect from="*" to='/' />
    </Switch>
  )
}

export default routes;