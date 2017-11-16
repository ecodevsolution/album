import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigasi extends Component {
    render() {
        return (
            <div>                
                
        <header id="masthead" className="site-header" role="banner">
                
                
                
                <div className="site-logo">
                	
                    
                
                    <h1 className="site-title">
                        <a href="index.html" rel="home">
                            <img src="images/site/logo.png" alt="logo" />
                        </a>
                    </h1>
                    
                    
                    
                </div>
                
                         
                
 				
                
                <nav id="primary-navigation" className="site-navigation primary-navigation" role="navigation">
                    
                    <a className="menu-toggle"><span className="lines"></span></a>
                    
                    
                    <div className="nav-menu">
                        <ul>
                            <li> <Link to="/index">Home</Link></li>                            
                            <li> <Link to="/album">Album</Link></li>                            
                            <li> <Link to="/contact">Contact</Link></li>                                                                                  
                        </ul>
                    </div>
                    </nav>    
                </header>        
            </div>
        );
    }
}

export default Navigasi;