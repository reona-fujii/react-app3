import React from 'react';
import { Provider } from 'react-redux';
import {render} from 'react-dom';
import tasksReducer from './reducers/tasks';
import TodoApp from './components/TodoApp';
import {createStore} from 'redux';
import {createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const store=createStore(reducer, applyMiddleware(logger));

render (
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);