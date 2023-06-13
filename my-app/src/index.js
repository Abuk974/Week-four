import React from 'react';
import ReactDOM from 'react-dom/client';
import WeatherSearch from './WeatherSearch';
import Small from './Small';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <WeatherSearch/>
    <Small/>
  </React.StrictMode>
);

reportWebVitals();