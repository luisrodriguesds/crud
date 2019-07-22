import React from 'react';
import './footer.css';

const footer = (props) => {
  return (
    <footer className="footer">
    	<span>
    		Desenvolvido com <i className="fa fa-heart text-danger" />  
    		por <strong><a href="http://luisrodriguesdev.com.br" target="_blank">Luis Rodrigues</a></strong>
    	</span>
    </footer>
  )
}

export default footer;