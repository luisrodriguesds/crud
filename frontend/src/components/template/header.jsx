import React from 'react';
import './header.css';

const header = (props) => {
  return (
  	// d-none -> para celulares essa div nao ira aparecer
  	//d-sm-flex -> para medios o disply sera flex
    <header className="header d-none d-sm-flex flex-column">
    	<h1 className="mt-3">
    		<i className={`fa fa-${props.icon}`} />
    		{props.title}
    	</h1>
    	<p className="lead text-muted">
    		{props.subtitle}
    	</p>
    </header>
  )
}

export default header;