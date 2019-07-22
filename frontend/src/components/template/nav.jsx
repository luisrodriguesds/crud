import React from 'react';
import {Link} from 'react-router-dom';
import './nav.css';

const nav = (props) => {
  return (
    <aside className="menu-area">
    	<nav className="menu">
    		<Link to="/">
    			<i className="fa fa-home" /> Home
    		</Link>
    		<Link to="/users">
    			<i className="fa fa-users" /> Usuários
    		</Link>
    	</nav>
    </aside>
  )
}

export default nav;