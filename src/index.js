import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import NavigationBar from './components/NavigationBar';

ReactDOM.render(
  <React.StrictMode>
    <NavigationBar name="Hello" />
  </React.StrictMode>,
  document.getElementById('root')
);
