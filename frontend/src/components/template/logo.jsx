import React from 'react';
import logo_lrx from '../../assets/imgs/logo_lrx.png';
import './logo.css';

const logo = (props) => {
  return (
    <aside className="logo">
    	<a href="/" className="logo">
    		<img src={logo_lrx} alt="logo" />
    	</a>
    </aside>
  )
}

export default logo;