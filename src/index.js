import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import * as serviceWorker from './serviceWorker';
import logger from 'redux-logger';


function* fetchGifSaga(action){
    console.log('in fetchGifSaga with:', action);
    let response = yield axios({
        method: 'GET',
        url: '/api/query',
        payload: {action}
    })
}








function* rootSaga() {
yield takeEvery('FETCH_GIF', fetchGifSaga);
}

const sagaMiddleware = createSagaMiddleware();
const gifList = (state = [], action) => {
  console.log('state is:', state)
  switch (action.type) {
    case 'ADD_GIF':
      return action.payload
    default:
      return state;
  }
};
const store = createStore(
  combineReducers({ gifList }),
  applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(rootSaga);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
