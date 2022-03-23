import React from 'react';
import ReactDOM from 'react-dom';

import store from './core/store'
import { Provider } from 'react-redux'

import App from './App';


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  document.getElementById('editor')
);

