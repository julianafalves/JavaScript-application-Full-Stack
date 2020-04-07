import React from 'react';
import ReactDOM from 'react-dom'; //conecção com a arvore dom

import App from './App';

//jsx html integrado ao javascript

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

