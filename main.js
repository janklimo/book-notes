import Exponent from 'exponent';
import React from 'react'
import Immutable from 'immutable'
import { createStore } from 'redux'
import { combineReducers } from 'redux-immutable'
import { Provider } from 'react-redux'

import App from './components/App'
import notesReducer from './store/notes/reducer'

const reducers = combineReducers({ notes: notesReducer })
const initialState = Immutable.Map()
const store = createStore(reducers, initialState)

const Main = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

Exponent.registerRootComponent(Main);
