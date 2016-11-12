import Exponent from 'exponent';
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { AsyncStorage } from 'react-native';

// immutability
import { combineReducers } from 'redux-immutable'
import { autoRehydrate, persistStore } from 'redux-persist-immutable'

// internal dependencies
import App from './components/App'
import notesReducer from './store/notes/reducer'

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
