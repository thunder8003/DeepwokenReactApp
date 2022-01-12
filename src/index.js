import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import NavigationBar from './components/NavigationBar';

ReactDOM.render(
  <React.StrictMode>
    <img src="/images/Background.png" className="background"></img>
    <NavigationBar />
  </React.StrictMode>,
  document.getElementById('root')
);
