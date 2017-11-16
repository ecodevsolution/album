import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Content from './components/content';
import Contact from './components/contact';


import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();

ReactDOM.render(

   <Router path='/index' history={history}>
    <div className='container'>
      <Route path='/album' component={App} />
      <Route path='/index' component={Content} />    
      <Route path='/contact' component={Contact} />          
    </div>
   </Router>,
 document.getElementById('root')
);

registerServiceWorker();
