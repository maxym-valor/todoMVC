import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import 'todomvc-app-css/index.css';
import { BrowserRouter } from 'react-router-dom';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
