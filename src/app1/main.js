import '@styles/global.styl';

import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';

import App from './app';

import djReducer from '@resources/djs';
import genreReducer from '@resources/genres';
import djPageReducer from './pages/djs/reducer';

const rootReducer = combineReducers({
  djs: djReducer,
  genres: genreReducer,
  djPage: djPageReducer
})

const store = createStore(rootReducer);

render(<App store={store}></App>, document.getElementById('root'));
