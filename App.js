import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import Colors from './constants/Colors';

import Navigator from './navigator/Navigator';
import authReducer from './store/reducers/authReducer';
import userReducer from './store/reducers/userReducer';
import feedReducer from './store/reducers/feedReducer';

const rootReducer = combineReducers({
  ath: authReducer,
  usr: userReducer,
  pst: feedReducer,
});

const store = createStore(rootReducer, applyMiddleware(Thunk));

export default function App() {
  return (
    <Provider store={store}>
        <Navigator />
        <StatusBar style="auto" />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
