import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const searchParams = new URLSearchParams(window.location.search);
const redirect = searchParams.get('redirect');

if (redirect && window.location.pathname === '/') {
  window.history.replaceState(null, '', redirect);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
