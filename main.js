import Exponent from 'exponent';
import React from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App'
import notesReducer from './reducers/notes'

const reducers = combineReducers({ notes: notesReducer })
const store = createStore(reducers)

const Main = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

Exponent.registerRootComponent(Main);
