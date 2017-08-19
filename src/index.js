import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import './index.css';
import App from './App';

// axios.defaults.baseURL = 'https://reqres.in/api';
axios.defaults.baseURL = 'http://universities.hipolabs.com';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
const rootElement = document.getElementById('root');

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
