import React, { Component } from 'react';
import ListContent from './list-content';
import Navigasi from './navigasi';
import Footer from './footer';

class Content extends Component {
    render() {
        return (
               <div id="page" className="hfeed site">
                
                    <Navigasi />                    
                        <ListContent />    
                    <Footer />
                    
                </div>   
        );
    }
}

export default Content;