import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DeezerProvider } from './context/DeezerContext';
import './styles/style.css'


ReactDOM.render(
  <DeezerProvider>
    <App />
  </DeezerProvider>,
  document.getElementById('root')
);
