import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import App from './r1/App'

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root'),
);

if(module.hot){
    module.hot.accept();
}
