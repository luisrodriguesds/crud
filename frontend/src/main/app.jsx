import Logo from '../components/template/logo';
import Nav from '../components/template/nav';
import Footer from '../components/template/footer';
import React from 'react';
import {HashRouter, BrowserRouter} from 'react-router-dom';
import Routes from './routes';

import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const app = (props) => {
  return (
    <BrowserRouter>
    	<div className="app">
	    	<Logo />
	    	<Nav />
	    	<Routes />
	    	<Footer />
	    </div>
    </BrowserRouter>
  )
}

export default app;