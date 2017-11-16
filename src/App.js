import React, { Component } from 'react';
import Navigasi from './components/navigasi';
import Work from './components/work';
import Footer from './components/footer';


class App extends Component {
  render() {
    return (
        <div>
            <div id="page" className="hfeed site">
                <Navigasi />

                <Work />

                <Footer />
            </div>
        
        </div>
    );
  }
}

export default App;
