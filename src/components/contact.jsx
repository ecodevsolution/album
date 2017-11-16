import React, { Component } from 'react';
import Navigasi from './navigasi';
import Footer from './footer';

class Contact extends Component {
    render() {
        return (
             <div id="page" className="hfeed site">
                
                 <Navigasi />                                            
                    <div id="main" className="site-main">
                        <div id="primary" className="content-area">
                            <div className="layout-fixed"> 
                                <article className="hentry page">
                                                                                    
                                    <header className="entry-header">
                                        <h1 className="entry-title">CONTACT ME</h1>
                                    </header>
                                    <div className="entry-content">
                                       
                                        <h2 className="section-title">REACH ME</h2>                                                            
                                        
                                        <div className="row">
                                            <div className="col-xs-6 col-sm-4">
                                                <div className="fun-fact">
                                                    <i className="pw-icon-location-outline"></i>
                                                    <h4>based in Los Angeles, USA</h4>
                                                </div>                                   
                                            </div>
                                            <div className="col-xs-6 col-sm-4">
                                        
                                                <div className="fun-fact">
                                                    <i className="pw-icon-phone-outline"></i>
                                                    <h4>Tel : +123 456 78900</h4>
                                                </div>                                        
                                            </div>

                                            <div className="col-xs-6 col-sm-4">
                                                
                                                <div className="fun-fact">
                                                    <i className="pw-icon-mail-1"></i>
                                                    <h4>johndoe@gmail.com</h4>
                                                </div>                                            

                                            </div>                                    
                                            
                                                                    
                                        </div>  

                                    </div>                            
                                </article>                        
               		        </div>                    
                        </div>
                     </div>
                 <Footer />                 
             </div>   
        );
    }
}

export default Contact;