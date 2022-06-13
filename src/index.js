import store from './ducks/store';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter location={history.location} navigator={history}>
      <App />
    </BrowserRouter>
  </Provider>
);
