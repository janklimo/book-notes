import Exponent from 'exponent';
import React from 'react'
import Immutable from 'immutable'
import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { Provider } from 'react-redux'
import {AsyncStorage} from 'react-native';

import App from './components/App'
import notesReducer from './store/notes/reducer'

import {persistStore, autoRehydrate} from 'redux-persist'

const reducers = combineReducers({ notes: notesReducer })
const store = createStore(reducers, undefined, autoRehydrate())
persistStore(store, {storage: AsyncStorage})

const Main = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

Exponent.registerRootComponent(Main);
