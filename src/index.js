import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import { store } from './configureStore';
import Routes from './containers/routes';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);