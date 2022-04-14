import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Header from './components/Header';
import './css/style.css';


import './css/style.css';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

